#!/usr/bin/env bash
#
# Обновление боевого сервера. Запускается НА VPS, а не с ноутбука:
#
#   ssh aleks27@82.202.128.143 '~/Landing-Psychologist/update.sh'
#
# Ничего не копируем с клиента — сервер сам забирает код из GitHub и
# собирает его у себя. Рабочая сборка не удаляется, пока новая не
# соберётся успешно: если сборка упадёт, сайт вернётся на предыдущую
# версию и останется доступен.
#
# Весь код обёрнут в функцию main и вызывается в самом конце. Это не
# украшательство: bash читает скрипт по мере выполнения, а внутри мы
# делаем git pull, который может переписать этот же файл на полуслове.
# Обёртка заставляет bash разобрать файл целиком до первого действия.

set -euo pipefail

APP_NAME="landing"   # имя процесса в pm2 (должно совпадать с nginx upstream)
PORT=3000            # на нём слушает next start
HEAP_MB=640          # потолок JS-кучи, подобран замером: на 512 сборка падает
SWAP_GB=2            # сколько свопа создать, если его нет

# Предупреждения копим и повторяем в конце: за временем сборки
# первые строки уходят из видимой части экрана.
WARNINGS=()

warn() {
  echo "⚠️  $1"
  WARNINGS+=("$1")
}

main() {
  cd "$(dirname "$0")"

  # ── Переменные окружения ────────────────────────────────────
  # Без них форма записи на консультацию соберётся, но заявки не будут
  # уходить в Telegram: route.ts вернёт 500 «Telegram бот не настроен».
  # .env.local в git не хранится, на сервере он свой.
  if [ ! -f .env.local ]; then
    warn "Нет .env.local — заявки с формы не будут уходить в Telegram"
  else
    for var in TELEGRAM_BOT_TOKEN TELEGRAM_DEV_ID TELEGRAM_OWNER_ID; do
      grep -qE "^${var}=.+" .env.local || warn "В .env.local не задан ${var}"
    done
  fi

  # ── Своп ────────────────────────────────────────────────────
  # На этой машине 961 МБ RAM. Сборка Next даже под webpack подходит
  # к 700–800 МБ, и без свопа ядро убивает процесс (OOM) — либо, что
  # хуже, выносит заодно sshd и nginx.
  #
  # Деплой идёт из-под обычного пользователя, поэтому своп создаётся
  # только через sudo без пароля. Нет прав — не падаем, а предупреждаем.
  if [ "$(swapon --show --noheadings 2>/dev/null | wc -l)" -eq 0 ]; then
    local sudo_cmd=""
    if [ "$(id -u)" -eq 0 ]; then
      sudo_cmd=""
    elif sudo -n true 2>/dev/null; then
      sudo_cmd="sudo"
    else
      sudo_cmd="unavailable"
    fi

    if [ "$sudo_cmd" = "unavailable" ]; then
      warn "Свопа нет и нет прав его создать — сборка почти наверняка упадёт по памяти."
      warn "  Один раз от root: fallocate -l ${SWAP_GB}G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile"
    else
      echo "💾 Свопа нет — создаю ${SWAP_GB} ГБ..."
      $sudo_cmd fallocate -l "${SWAP_GB}G" /swapfile
      $sudo_cmd chmod 600 /swapfile
      $sudo_cmd mkswap /swapfile >/dev/null
      $sudo_cmd swapon /swapfile
      grep -q '^/swapfile' /etc/fstab \
        || echo '/swapfile none swap sw 0 0' | $sudo_cmd tee -a /etc/fstab >/dev/null
      echo "   готово, своп переживёт перезагрузку"
    fi
  fi

  # ── Место на диске ──────────────────────────────────────────
  # На время сборки на диске лежат две версии .next: прошлая и новая.
  # Текущая сборка — около 310 МБ, отсюда запас в 500 МБ.
  # du в конвейере с cut не даёт понять, была ли ошибка: статус берётся
  # от cut, а он и на пустом вводе успешен. Поэтому проверяем сам результат.
  local prev_mb need_mb free_mb
  prev_mb=$(du -sm .next 2>/dev/null | cut -f1)
  [ -n "$prev_mb" ] || prev_mb=310
  need_mb=$(( prev_mb + 500 ))
  # -P — POSIX-формат вывода: длинное имя устройства не переносится
  # на вторую строку и не сбивает разбор.
  free_mb=$(df -Pm . | awk 'NR==2 {print $4}')
  if [ "$free_mb" -lt "$need_mb" ]; then
    echo "❌ Мало места: свободно ${free_mb} МБ, нужно около ${need_mb} МБ"
    exit 1
  fi

  # ── Чистота рабочего дерева ─────────────────────────────────
  # git pull молча не переживёт правок прямо на сервере: либо откажется
  # затирать изменённые файлы, либо оборвётся на конфликте посреди
  # обновления. Лучше остановиться здесь, пока ничего не сломано.
  if [ -n "$(git status --porcelain)" ]; then
    echo "❌ На сервере есть незакоммиченные изменения — обновление остановлено."
    echo "   Что именно:"
    git status --short | sed 's/^/     /'
    echo
    echo "   Правки на сервере всегда затирает следующий деплой. Если они нужны —"
    echo "   перенесите их в репозиторий. Если нет — сбросьте и повторите:"
    echo "     git -C \"$PWD\" stash push --include-untracked -m 'до деплоя'"
    exit 1
  fi

  echo "📥 Забираем изменения..."
  git pull --ff-only

  echo "📦 Устанавливаем пакеты..."
  NODE_OPTIONS="--max-old-space-size=${HEAP_MB}" \
    npm install --no-audit --no-fund

  # Останавливаем только своё приложение. «pm2 stop all» гасил бы и
  # соседние процессы на этой же машине. Гасим до сборки не из
  # аккуратности, а ради памяти: next start держит около 150 МБ,
  # которых на этой машине сборке не хватает.
  echo "⏸️  Останавливаем приложение (сайт недоступен на время сборки)..."
  pm2 stop "$APP_NAME" >/dev/null 2>&1 || true

  # ── Сборка с возможностью отката ────────────────────────────
  rm -rf .next.prev
  [ -d .next ] && mv .next .next.prev

  # --webpack принципиально, и это измерено, а не предположение.
  # Под Turbopack основная память уходит в нативную Rust-часть, которую
  # --max-old-space-size не ограничивает: с потолком 512 и 640 МБ пик RSS
  # одинаковый, около 1.9 ГБ. Webpack на потолок реагирует — с 512 МБ
  # падает по OOM, с 640 МБ собирается с пиком около 940 МБ.
  # На машине с 961 МБ это разница между «собралось» и «не собралось».
  echo "🏗️  Собираем проект (webpack, потолок кучи ${HEAP_MB} МБ)..."
  if NODE_OPTIONS="--max-old-space-size=${HEAP_MB}" npx next build --webpack; then
    rm -rf .next.prev
    echo "✅ Сборка удалась"
  else
    echo "❌ Сборка упала — возвращаем предыдущую версию"
    rm -rf .next
    [ -d .next.prev ] && mv .next.prev .next
    start_app || true
    echo "   сайт работает на прошлой сборке, изменения не применены"
    exit 1
  fi

  echo "▶️  Запускаем приложение..."
  start_app

  pm2 save >/dev/null

  reload_nginx

  # Ждём, пока next start поднимется: на этой машине это заметно дольше
  # трёх секунд, поэтому опрашиваем в цикле, а не спим наугад.
  echo "🔎 Проверяем, что сайт отвечает..."
  local ok=0
  for _ in $(seq 1 20); do
    if curl -sf -o /dev/null --max-time 5 "http://localhost:${PORT}/"; then
      ok=1
      break
    fi
    sleep 2
  done

  if [ "$ok" -eq 1 ]; then
    echo "✅ Обновлено, сайт отвечает"
  else
    echo "⚠️  Приложение запущено, но localhost:${PORT} не отвечает — смотрите: pm2 logs \"$APP_NAME\""
    exit 1
  fi

  if [ ${#WARNINGS[@]} -gt 0 ]; then
    echo
    echo "На что обратить внимание:"
    printf '  • %s\n' "${WARNINGS[@]}"
  fi
}

# Первый запуск на новом сервере — и ровно тот случай, что случился после
# вывода VPS из архива: процесса в pm2 нет, и «pm2 restart landing» падает
# с «Process or Namespace landing not found». Поэтому сначала проверяем,
# знает ли pm2 про процесс, и только потом решаем — поднимать или заводить.
start_app() {
  if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
    pm2 start "$APP_NAME" --update-env >/dev/null 2>&1 \
      || pm2 restart "$APP_NAME" --update-env >/dev/null
  else
    echo "   процесса «$APP_NAME» в pm2 нет — создаю"
    pm2 start npm --name "$APP_NAME" -- start >/dev/null
  fi
}

# nginx проксирует на localhost:3000 и о перезапуске приложения знать не
# обязан — при штатном обновлении перезагружать его не нужно. Делаем это
# только потому, что дёшево и снимает вопросы, если правился конфиг.
# Права есть не всегда, поэтому шаг необязательный и никогда не валит деплой.
reload_nginx() {
  if ! sudo -n true 2>/dev/null; then
    return 0
  fi
  if sudo -n nginx -t >/dev/null 2>&1; then
    sudo -n systemctl reload nginx >/dev/null 2>&1 \
      && echo "🔄 nginx перезагружен" \
      || warn "Не удалось перезагрузить nginx"
  else
    warn "Конфиг nginx не проходит проверку — перезагрузку пропустил"
  fi
}

main "$@"
