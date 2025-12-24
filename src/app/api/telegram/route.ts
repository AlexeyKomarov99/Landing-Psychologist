import { NextRequest, NextResponse } from 'next/server'
import { consultationFormSchema } from '@/lib/schemas/consultation-form'

export async function POST(request: NextRequest) {
  try {
    // 1. Получаем и валидируем данные (та же схема что в форме)
    const body = await request.json()
    const validationResult = consultationFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Невалидные данные формы',
        },
        { status: 400 }
      )
    }
    
    const { name, phone } = validationResult.data

    // 2. Получаем настройки бота
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_DEV_ID = process.env.TELEGRAM_DEV_ID
    const TELEGRAM_OWNER_ID = process.env.TELEGRAM_OWNER_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_DEV_ID || !TELEGRAM_OWNER_ID) {
        return NextResponse.json(
            { error: 'Telegram бот не настроен' },
            { status: 500 }
        )
    }

    // 3. Создаём сообщение
    const message = `
        *НОВАЯ ЗАЯВКА С САЙТА*

        *Имя:* ${name}
        *Телефон:* ${phone}
        *Время:* ${new Date().toLocaleString('ru-RU')}
    `.trim()

    // 4. Функция для отправки сообщения в конкретный чат
    const sendToChat = async (chatId: string) => {
        return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        })
    }

    // 5. Отправляем ВСЕМ получателям
    const chatIds = [TELEGRAM_DEV_ID, TELEGRAM_OWNER_ID]
    const responses = await Promise.all(
        chatIds.map(chatId => sendToChat(chatId))
    )

    // 6. Проверяем все ответы
    const results = await Promise.all(
        responses.map(r => r.json())
    )

    // 7. Если хотя бы одна отправка не удалась
    const hasError = responses.some(r => !r.ok)
    if (hasError) {
        console.error('Telegram errors:', results)
    }

    // 8. Успешный ответ
    return NextResponse.json({
        success: true,
        message: 'Заявка отправлена психологу',
        sentTo: chatIds.length,
        telegramIds: results.map(r => r.result?.message_id)
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}