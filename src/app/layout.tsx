import type { Metadata } from 'next'
import { Lora, Source_Serif_4 } from 'next/font/google'
import './globals.css'

// Настраиваем шрифты через next/font (оптимизация)
const lora = Lora({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700']
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-source-serif',
  weight: ['300', '400', '500', '600']
})

// Объявляем метаданные для SEO
export const metadata: Metadata = {
  title: 'Пилеус | Профессиональный психолог',
  description: 'Помощь при тревоге, выгорании, панических атаках. 15+ лет практики. Верните себе внутреннее спокойствие.',
  keywords: ['психолог', 'тревога', 'выгорание', 'терапия', 'панические атаки', 'консультация психолога'],
  openGraph: {
    type: 'website',
    title: 'Пилеус | Профессиональный психолог',
    description: 'Помощь при тревоге, выгорании, панических атаках. 15+ лет практики.',
  },
}

// Объявляем тип для пропсов компонента
interface RootLayoutProps {
  children: React.ReactNode  // Тип для дочерних элементов
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className={`${lora.variable} ${sourceSerif4.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}