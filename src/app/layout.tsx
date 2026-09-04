import type { Metadata } from 'next'
import { Lora, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import YandexMetrika from '@/components/YandexMetrika/YandexMetrika'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import CookieBanner from '@/components/CookieBanner/CookieBannerClient'

// Настраиваем шрифты через next/font (оптимизация)
const lora = Lora({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-source-serif',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

// Объявляем метаданные для SEO
export const metadata: Metadata = {
  title: {
    template: '%s | Пилеус — Психолог Москва',
    default: 'Пилеус — Профессиональный психолог в Москве | Ментальная реструктуризация',
  },

  description: 'Профессиональный психолог Евгений Пилеус. 15+ лет практики. Помощь при тревоге, выгорании, панических атаках. Ментальная реструктуризация, развитие осознанности и эмоционального интеллекта. Онлайн-консультации.',

  keywords: [
    // Основные запросы
    'психолог Москва',
    'психолог онлайн',
    'консультация психолога',
    'профессиональный психолог',
    'психологическая практика',
    'ментальная реструктуризация',

    // С какими проблемами работаем
    'тревога',
    'выгорание',
    'панические атаки',
    'стресс',
    'кризис',
    'эмоциональное выгорание',
    'депрессия',
    'страхи',
    'неуверенность',

    // Направления работы
    'развитие осознанности',
    'эмоциональный интеллект',
    'когнитивная гибкость',
    'коммуникации и отношения',
    'ментальный контроль',
    'работа с мышлением',
    'управление эмоциями',
    'внутренняя опора',

    // Результаты
    'уверенность в себе',
    'гармоничные отношения',
    'свобода от шаблонов',
    'личностный рост',
    'самопознание',
    'принятие себя',
    'жизненные изменения',
    'адаптация к переменам',

    // Типы услуг
    'онлайн консультация психолога',
    'терапия тревоги',
    'помощь при выгорании',
    'лечение панических атак',
    'психотерапия онлайн',
    'вводная консультация',

    // Имя и бренд
    'Евгений Пилеус',
    'Пилеус психолог',
    'сообщество Опора',
    'психологическая практика Опора',

    // Гео
    'Москва',
    'психолог в Москве',
    'онлайн психолог Москва',
  ].join(', '),

  authors: [{ name: 'Евгений Пилеус', url: 'https://epileus.ru' }],

  publisher: 'Евгений Пилеус',

  // Open Graph для соцсетей
  openGraph: {
    type: 'website',
    title: 'Пилеус — Профессиональный психолог | Ментальная реструктуризация',
    description: 'Помощь при тревоге, выгорании, панических атаках. 15+ лет практики. Верните себе внутреннее спокойствие и устойчивость.',
    url: 'https://epileus.ru',
    siteName: 'Пилеус',
    locale: 'ru_RU',
  },

  // Правила индексации
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  // Иконки
  icons: {
    icon: '/icons/label.png',
    shortcut: '/icons/label.png',
    apple: '/icons/label.png',
  },

  // Канонический URL
  alternates: {
    canonical: 'https://epileus.ru',
  },
}

// Объявляем тип для пропсов компонента
interface RootLayoutProps {
  children: React.ReactNode  // Тип для дочерних элементов
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className={`${lora.variable} ${sourceSerif4.variable}`}>
      <head>
        <link rel="canonical" href="https://epileus.ru" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Структурированные данные для поисковиков */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              'name': 'Пилеус — Психологическая практика',
              'url': 'https://epileus.ru',
              'logo': 'https://epileus.ru/icons/label.png',
              'description': 'Профессиональный психолог Евгений Пилеус. Ментальная реструктуризация, работа с тревогой, выгоранием, паническими атаками. 15+ лет практики.',
              'founder': {
                '@type': 'Person',
                'name': 'Евгений Пилеус',
                'jobTitle': 'Психолог',
              },
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Москва',
                'addressCountry': 'RU',
              },
              'email': 'epileus55@gmail.com',
              'sameAs': [
                'https://t.me/EPileus',
              ],
              'offers': {
                '@type': 'Offer',
                'name': 'Вводная консультация',
                'description': 'Индивидуальная онлайн-консультация с профессиональным психологом',
              },
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <YandexMetrika />
        <GoogleAnalytics />
      </body>
    </html>
  )
}