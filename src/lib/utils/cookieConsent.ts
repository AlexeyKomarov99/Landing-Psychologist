/*
  Хранение факта, что уведомление о cookie показано и закрыто.

  Плашка информирует, а не спрашивает разрешения: Яндекс Метрика и Google
  Analytics подключаются для всех посетителей независимо от нажатия. Это
  значение отвечает только за одно — показывать плашку или нет.
*/

export const COOKIE_NOTICE_KEY = 'cookie_consent'
export const COOKIE_NOTICE_EVENT = 'cookie-notice-change'

/** Любое непустое значение = плашка закрыта. */
export const NOTICE_SEEN = 'accepted'

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

/** Видел ли посетитель уведомление. */
export function hasSeenCookieNotice(): boolean {
  if (typeof window === 'undefined') return false

  // Приоритет у cookie: её ставит сервер, поэтому она переживает очистку
  // скриптового хранилища в Safari. localStorage — запасной источник.
  if (readCookie(COOKIE_NOTICE_KEY)) return true
  return Boolean(window.localStorage.getItem(COOKIE_NOTICE_KEY))
}

/** Есть ли долговременная cookie от сервера. */
export function hasDurableNotice(): boolean {
  if (typeof window === 'undefined') return false
  return Boolean(readCookie(COOKIE_NOTICE_KEY))
}

/**
 * Просит сервер выставить долговременную cookie.
 * Ошибка сети не критична — отметка уже в localStorage,
 * попытка повторится при следующем заходе.
 */
export function persistNoticeOnServer(): Promise<void> {
  // Слеш на конце обязателен: в next.config.ts включён trailingSlash,
  // и без него запрос уходит через лишний редирект 308.
  return fetch('/api/consent/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => undefined)
    .catch(() => undefined)
}

export function markCookieNoticeSeen() {
  // localStorage — чтобы плашка исчезла мгновенно, не дожидаясь ответа сервера.
  window.localStorage.setItem(COOKIE_NOTICE_KEY, NOTICE_SEEN)
  window.dispatchEvent(new CustomEvent(COOKIE_NOTICE_EVENT))

  void persistNoticeOnServer()
}

// Для useSyncExternalStore.
export function subscribeToCookieNotice(callback: () => void) {
  window.addEventListener(COOKIE_NOTICE_EVENT, callback)
  return () => window.removeEventListener(COOKIE_NOTICE_EVENT, callback)
}

export function getCookieNoticeSnapshot(): boolean {
  return hasSeenCookieNotice()
}

/** На сервере плашку не рендерим — считаем, что уведомление уже показано. */
export function getServerCookieNoticeSnapshot(): boolean {
  return true
}
