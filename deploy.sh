#!/bin/bash
MESSAGE=${1:-"Внесение правок в проект"}

echo "🚀 Обновление репозитория Github"
git add .
git commit -m "$MESSAGE"
git push origin main

echo "📦 Сборка проекта и деплой на VPS"
npm run build && \
scp -r .next public aleks27@82.202.128.143:/home/aleks27/Landing-Psychologist/ && \
ssh aleks27@82.202.128.143 "pm2 restart landing" && \
echo "✅ Готово: https://epileus.ru"