import { NextResponse } from 'next/server'
import { COOKIE_NOTICE_KEY, NOTICE_SEEN } from '@/lib/utils/cookieConsent'

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

/**
 * Запоминает, что посетитель видел уведомление о cookie.
 *
 * Ставить cookie обязательно на сервере: Safari (ITP) удаляет всё, что записано
 * скриптом — и localStorage, и cookie из document.cookie — через 7 дней без
 * посещения сайта. Cookie из заголовка Set-Cookie под это ограничение не
 * попадает и живёт заявленный срок.
 *
 * Тело запроса не разбираем: значение одно, и приходить извне ему незачем.
 */
export async function POST() {
  const response = NextResponse.json({ ok: true })

  response.cookies.set({
    name: COOKIE_NOTICE_KEY,
    value: NOTICE_SEEN,
    maxAge: ONE_YEAR_SECONDS,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    // Значение читается на клиенте, поэтому не httpOnly. Секретом оно не является.
    httpOnly: false,
  })

  return response
}
