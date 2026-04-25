'use client'

import { motion } from 'framer-motion'
import { 
  fadeInLeft, 
  fadeInRight, 
  fadeInTop, 
  staggerContainer,
} from '@/lib/animations/variants'
import Image from 'next/image'
import { AiOutlineHourglass as HourglassIcon } from "react-icons/ai"
import { HiOutlineUsers as UserGroup } from "react-icons/hi2"
import { LuBookText as BookIcon } from "react-icons/lu"

interface StatItem {
  id: number
  icon: React.ReactNode
  value: string
  label: string
}

export default function About() {

    const stats: StatItem[] = [
        {
            id: 1,
            icon: <HourglassIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 text-white" />,
            value: '15+',
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
        <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className='
                py-10
                bg-(--color-bg-main)
                md:py-15
                lg:py-20
                scroll-mt-10                
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
                    3xl:max-w-[1600px]
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
                        <motion.div
                            variants={fadeInLeft}
                            className="
                                flex
                                flex-col
                                justify-center
                                items-center
                                lg:flex-row lg:justify-start lg:items-start
                            "
                        >
                            <h2 className='
                                text-[clamp(24px,5vw,28px)]
                                text-center
                                mb-[34px]
                                sm:text-[clamp(26px,4.5vw,32px)]
                                sm:mb-7
                                lg:hidden
                            '>Соберите свою ментальную опору по кирпичику</h2>
                            <Image
                                src={'/images/about_hero.jpg'}
                                alt='Психолог Москва'
                                width={420}
                                height={580}
                                loading="lazy"
                                quality={100}
                                className='
                                    rounded-2xl
                                    mb-[clamp(16px,3vh,24px)]
                                    max-w-[260px] max-h-[360px]
                                    sm:max-w-[290px] sm:max-h-[440px]
                                    md:max-w-[340px] md:max-h-[460px] md:mb-6
                                    lg:max-w-[360px] lg:max-h-[520px]
                                    2xl:max-w-[420px] 2xl:max-h-[580px]
                            '/>
                        </motion.div>
                         
                        {/* Правая часть */}
                        <motion.div
                            variants={fadeInRight}
                            className="
                                flex
                                flex-col
                                justify-center
                                items-center
                                lg:justify-start lg:items-start
                        ">
                            <h2 className='
                                hidden
                                text-[clamp(32px,3vw,36px)]
                                mb-[clamp(24px,5vh,28px)]
                                lg:block lg:text-[38px]
                            '>Соберите свою ментальную опору по кирпичику</h2>
                            <h4 className='
                                text-center
                                font-semibold
                                text-[clamp(16px,4vw,18px)]
                                mb-[clamp(8px,2vh,10px)]
                                sm:text-[20px]
                                lg:text-[clamp(20px,2.5vw,22px)]
                            '>Евгений Пилеус</h4>
                            <span className='
                                text-center
                                mb-[clamp(22px,7vh,28px)]
                                leading-[1.4]
                                text-[16px]
                                sm:text-[clamp(15px,3vw,17px)]
                                md:mb-[clamp(40px,5vw,48px)]
                                lg:text-start 
                                lg:mb-[clamp(80px,6vw,96px)]
                                lg:text-[clamp(16px,2vw,18px)]
                                2xl:text-[clamp(17px,1.8vw,19px)]
                                2xl:mb-[clamp(104px,7vw,128px)]
                            '>
                                Мы рождаемся, не зная правил работы собственного сознания. Жизненный опыт формирует нас, но часто не оставляет в руках нужных инструментов для решения сложных задач. Я помогаю не просто «решить проблему», а исследовать архитектуру вашего мышления, чтобы вы смогли самостоятельно выстраивать свою жизнь — осознанно, гибко и устойчиво. Ваша психика — ваш главный ресурс. Научимся им пользоваться.»
                            </span>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="
                                    space-y-[clamp(24px,5vh,32px)]
                                    sm:grid 
                                    sm:grid-cols-3 
                                    sm:space-y-0 
                                    sm:gap-[clamp(24px,3vw,32px)] 
                                    sm:items-start
                                    lg:gap-12
                            ">
                                {stats.map((stat) => (
                                    <motion.div 
                                        key={stat.id}
                                        variants={fadeInTop}
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
                                                    text-[clamp(16px,3.5vw,18px)]
                                                    mr-1.5
                                                    font-semibold
                                                    sm:text-[clamp(18px,2.75vw,20px)]
                                                    lg:text-[19px]
                                                '>{stat.value}</span>
                                                <span className='
                                                    leading-none
                                                    text-[clamp(16px,3.5vw,18px)]
                                                    sm:text-[clamp(18px,2.75vw,20px)]
                                                    lg:text-[19px]
                                                '>{stat.label}</span>
                                            </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

        </motion.section>
    )
}