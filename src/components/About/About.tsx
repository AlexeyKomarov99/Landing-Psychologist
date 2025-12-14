'use client'

import Image from 'next/image'
import { AiOutlineHourglass as HourglassIcon } from "react-icons/ai"
import { HiOutlineUsers as UserGroup } from "react-icons/hi2"
import { LuBookText as BookIcon } from "react-icons/lu"

// Тип для статистики
interface StatItem {
  id: number
  icon: React.ReactNode
  value: string
  label: string
}

export default function About() {
    // Массив статистики
    const stats: StatItem[] = [
        {
        id: 1,
        icon: <HourglassIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 text-white" />,
        value: '10+',
        label: 'лет практики'
        },
        {
        id: 2,
        icon: <UserGroup className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 text-white" />,
        value: '200+',
        label: 'довольных клиентов'
        },
        {
        id: 3,
        icon: <BookIcon className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-9 2xl:h-9 text-white" />,
        value: '5+',
        label: 'специализаций'
        }
    ]

    return (
        <section
            id="about"
            className='
                py-10
                bg-(--color-bg-main)
                md:py-15
                lg:py-20
            '>
                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:max-w-[540px] sm:px-0
                    md:max-w-[720px]
                    lg:max-w-[960px]
                    xl:max-w-[1140px]
                    2xl:max-w-[1320px]
                ">
                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        lg:flex-row lg:justify-between lg:items-start lg:space-x-12
                        2xl:space-x-24
                    ">
                        {/* Левая часть */}
                        <div className="
                            flex
                            flex-col
                            justify-center
                            items-center
                            lg:flex-row lg:justify-start lg:items-start
                        ">
                            <h2 className='
                                text-[26px]
                                text-center
                                mb-[34px]
                                sm:text-[32px] sm:mb-7
                                lg:hidden
                            '>Соберите свою ментальную опору по кирпичику</h2>
                            <Image 
                                src={'/images/about_hero.JPG'}
                                alt='Психолог Москва'
                                width={420}
                                height={580}
                                className='
                                    rounded-2xl
                                    mb-4
                                    max-w-[260px] max-h-[360px]
                                    sm:max-w-[290px] sm:max-h-[440px]
                                    md:max-w-[340px] md:max-h-[460px] md:mb-6
                                    lg:max-w-[360px] lg:max-h-[520px]
                                    2xl:max-w-[420px] 2xl:max-h-[580px]
                            '/>
                        </div>
                         
                        {/* Правая часть */}
                        <div className="
                            flex
                            flex-col
                            justify-center
                            items-center
                            lg:justify-start lg:items-start
                        ">
                            <h2 className='
                                hidden
                                text-[36px]
                                mb-6
                                lg:block lg:text-[38px]
                            '>Соберите свою ментальную опору по кирпичику</h2>
                            <h4 className='
                                text-[18px]
                                text-center
                                font-semibold
                                mb-2.5
                                sm:text-[20px]
                                lg:text-[21px]
                            '>Евгений Пилеус</h4>
                            <span className='
                                text-center
                                mb-7
                                leading-[1.4]
                                text-[15px]
                                sm:text-base
                                md:mb-12
                                lg:text-start lg:mb-24 lg:text-[17px]
                                2xl:text-lg 2xl:mb-32
                            '>
                                Мы рождаемся, не зная правил работы собственного сознания. Жизненный опыт формирует нас, но часто не оставляет в руках нужных инструментов для решения сложных задач. Я помогаю не просто «решить проблему», а исследовать архитектуру вашего мышления, чтобы вы смогли самостоятельно выстраивать свою жизнь — осознанно, гибко и устойчиво. Ваша психика — ваш главный ресурс. Научимся им пользоваться.»
                            </span>
                            <div 
                                className="
                                    space-y-8
                                    sm:grid sm:grid-cols-3 sm:space-y-0 sm:gap-8 sm:items-start
                                    lg:gap-12
                            ">
                                {stats.map((stat) => (
                                    <div 
                                        key={stat.id}
                                        className="
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                        ">
                                            <div className='
                                                flex
                                                justify-center
                                                items-center
                                                bg-(--color-primary)
                                                w-12
                                                h-12
                                                rounded-[10000px]
                                                mb-2
                                                sm:w-16 sm:h-16
                                                lg:w-14 lg:h-14
                                                2xl:w-18 2xl:h-18
                                            '>{stat.icon}</div>
                                            <div className='text-center
                                            '>
                                                <span className='
                                                    text-(--color-primary)
                                                    text-base
                                                    mr-1.5
                                                    font-semibold
                                                    sm:text-lg
                                                    lg:text-[19px]
                                                '>{stat.value}</span>
                                                <span className='
                                                    leading-none
                                                    sm:text-lg
                                                    lg:text-[19px]
                                                '>{stat.label}</span>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

        </section>
    )
}