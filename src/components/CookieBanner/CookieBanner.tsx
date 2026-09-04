'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'
import { LuCookie as CookieIcon } from 'react-icons/lu'
import Link from 'next/link'
import {
  getCookieNoticeSnapshot,
  getServerCookieNoticeSnapshot,
  hasDurableNotice,
  markCookieNoticeSeen,
  persistNoticeOnServer,
  subscribeToCookieNotice,
} from '@/lib/utils/cookieConsent'

/*
  Уведомление об использовании cookie.

  Плашка информирует, а не спрашивает разрешения: аналитика работает для всех
  посетителей независимо от нажатия. Кнопка только закрывает уведомление и
  запоминает, что человек его видел.
*/
export default function CookieBanner() {
  const seen = useSyncExternalStore(
    subscribeToCookieNotice,
    getCookieNoticeSnapshot,
    getServerCookieNoticeSnapshot
  )

  /* Отметки, поставленные до появления серверной cookie, лежат только в
     localStorage — Safari сотрёт их через 7 дней. Переносим в долговременную
     cookie, чтобы плашка не появилась повторно. */
  useEffect(() => {
    if (seen && !hasDurableNotice()) {
      void persistNoticeOnServer()
    }
  }, [seen])

  if (seen) return null

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании файлов cookie"
      className="
        fixed
        inset-x-0
        bottom-4
        sm:bottom-6
        z-50
        flex
        justify-center
        px-4
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="
          flex
          flex-col
          gap-4

          w-full
          max-w-[clamp(340px,90vw,560px)]

          bg-white
          border
          border-(--color-primary)/30
          rounded-2xl
          shadow-2xl

          p-[clamp(16px,4vw,20px)]
          sm:p-5
        "
      >
        <div className="flex items-start gap-3">
          <CookieIcon
            className="
              shrink-0
              mt-0.5
              w-6
              h-6
              text-(--color-primary)
            "
          />
          <p
            className="
              text-[clamp(13px,3.2vw,14px)]
              text-(--color-text)
              leading-[1.6]
            "
          >
            Мы используем файлы cookie и сервисы веб-аналитики, чтобы сайт работал
            корректно и становился удобнее. Продолжая пользоваться сайтом, вы
            соглашаетесь с{' '}
            <Link
              href="/privacy-policy"
              className="text-(--color-primary) underline hover:brightness-90 transition-colors"
            >
              политикой конфиденциальности
            </Link>
            .
          </p>
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={markCookieNoticeSeen}
          className="
            btn
            w-full
            px-6
            py-3
            text-[clamp(14px,3vw,16px)]
            font-semibold
            hover:brightness-95
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Принять
        </motion.button>
      </motion.div>
    </div>
  )
}
