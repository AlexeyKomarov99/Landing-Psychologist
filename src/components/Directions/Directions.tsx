'use client'

import { motion } from 'framer-motion'
import { 
  fadeInTop, 
  cardVariants,
  staggerContainer,
  hoverScale 
} from '@/lib/animations/variants'
import { LuPuzzle as PuzzleIcon } from "react-icons/lu"
import { BsShield as ShieldIcon } from "react-icons/bs"
import { IoBulbOutline as BulbIcon } from "react-icons/io5"
import { FaRegHeart as HeartIcon } from "react-icons/fa"
import { LuHeartHandshake as HandshakeIcon } from "react-icons/lu"
import { LuBrain as BrainIcon } from "react-icons/lu"

interface DirectionCard {
    id: number
    icon: React.ReactNode
    title: string
    descr: string
}

export default function Directions() {

    const directions: DirectionCard[] = [
        {
            id: 1,
            icon: <PuzzleIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Ментальная реструктуризация',
            descr: 'Меняем автоматические негативные мысли на реалистичные и поддерживающие. Это фундаментальное изменение внутренней «архитектуры» вашего мышления.'
        },
        {
            id: 2,
            icon: <ShieldIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Кризисы и стресс',
            descr: 'Развиваем навыки ментального контроля. Обучаем техникам работы с тревогой, выгоранием и сложными жизненными периодами. Вы получаете инструменты для самопомощи, которые останутся навсегда.'
        },
        {
            id: 3,
            icon: <BulbIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Развитие осознанности',
            descr: 'Учим понимать свои истинные цели и мотивы, в том числе скрытые в бессознательном. Это ключ к принятию решений, которые будут вести вас по вашему собственному пути.'
        },
        {
            id: 4,
            icon: <HeartIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Эмоциональный интеллект',
            descr: 'Формируем умение понимать, принимать и управлять своими эмоциями. Превращаем эмоции из источника хаоса в источник силы и ясности.'
        },
        {
            id: 5,
            icon: <HandshakeIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Коммуникации и отношения',
            descr: 'Развиваем социальный интеллект — способность выстраивать эффективные и здоровые коммуникации в семье, на работе и с друзьями.'
        },
        {
            id: 6,
            icon: <BrainIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Когнитивная гибкость',
            descr: 'Учимся оценивать ситуацию с разных точек зрения и находить неочевидные, эффективные решения, выходя за рамки привычных шаблонов мышления.'
        },

    ]

    return (
        <motion.section
            id="directions"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="
                py-10
                bg-(--color-bg-secondary)
                md:py-15
                lg:py-20
                scroll-mt-10
            "
        >
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
                    justify-center
                    items-center
                ">
                    <motion.h2 
                        variants={fadeInTop}
                        className="
                            text-[26px]
                            text-center
                            mb-10
                            md:mb-12 md:text-[32px]
                            lg:text-[38px]
                        "
                    >
                        С какими задачами мы работаем?
                    </motion.h2>
                    
                    <motion.div 
                        variants={staggerContainer}
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            space-y-5
                            md:grid md:grid-cols-2 md:gap-4 md:space-y-0
                            2xl:grid-cols-3 2xl:gap-5 2xl:w-full
                        "
                    >
                        {directions.map((card, index) => (
                            <motion.div
                                key={card.id}
                                variants={cardVariants}
                                custom={index}
                                whileHover={{ 
                                    scale: 1.03,
                                    transition: { duration: 0.2 }
                                }}
                                className="
                                    flex
                                    flex-col
                                    justify-start
                                    items-center
                                    bg-(--color-bg-main)
                                    rounded-xl
                                    p-5
                                    shadow-sm
                                    min-h-[295px]
                                    max-w-[320px]
                                    sm:min-h-[290px] sm:max-w-[375px]
                                    md:min-h-[305px]
                                    lg:min-h-[310px] lg:max-w-[400px]
                                    xl:min-h-80 xl:max-w-[400px]
                                    2xl:justify-center 2xl:max-w-none
                                "
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="
                                        w-12
                                        h-12
                                        flex
                                        justify-center
                                        items-center
                                        bg-(--color-primary)
                                        rounded-[10000px]
                                        mb-4
                                        sm:w-14 sm:h-14
                                        lg:w-16 lg:h-16
                                        2xl:w-14 2xl:h-14
                                    "
                                >
                                    {card.icon}
                                </motion.div>
                                
                                <motion.h4 
                                    transition={{ duration: 0.2 }}
                                    className="
                                        text-center
                                        mb-3
                                        sm:text-lg
                                        lg:text-[21px]
                                    "
                                >
                                    {card.title}
                                </motion.h4>
                                
                                <motion.span className="
                                    text-center
                                    lg:text-[17px]
                                ">
                                    {card.descr}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}