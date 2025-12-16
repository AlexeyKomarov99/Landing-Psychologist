'use client'

import { motion } from 'framer-motion'
import { 
  fadeInTop, 
  cardVariants,
  staggerContainer
} from '@/lib/animations/variants'
import { GiIonicColumn as ColumnIcon } from "react-icons/gi"
import { PiSuitcase as SuiteCaseIcon } from "react-icons/pi"
import { LuBird as BirdIcon } from "react-icons/lu"
import { BsFlower1 as FlowerIcon } from "react-icons/bs"
import { SiLeaflet as LeafletIcon } from "react-icons/si"
import { GiScales as ScalesIcon } from "react-icons/gi"

interface ResultCard {
    id: number
    icon: React.ReactNode
    title: string
    descr: string
}

export default function Results() {

    const results: ResultCard[] = [
        {
            id: 1,
            icon: <ColumnIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Прочный фундамент личности',
            descr: 'Уверенность, основанная не на внешних оценках, а на глубоком понимании и принятии себя.'
        },
        {
            id: 2,
            icon: <SuiteCaseIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Инструменты на всю жизнь',
            descr: 'Навыки осознанности, эмоциональной регуляции и работы со стрессом, которые вы сможете применять самостоятельно в любой ситуации.'
        },
        {
            id: 3,
            icon: <BirdIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Свобода от шаблонов',
            descr: 'Способность делать свой собственный выбор, не зависеть от автоматических мыслей и навязанных установок.'
        },
        {
            id: 4,
            icon: <FlowerIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Умение выстраивать гармоничные отношения',
            descr: 'Глубокие и здоровые связи с окружающими, основанные на взаимопонимании и уважении.'
        },
        {
            id: 5,
            icon: <LeafletIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Эффективная адаптация',
            descr: 'Внутренняя гибкость, позволяющая спокойно и уверенно проходить через любые жизненные изменения.'
        },
        {
            id: 6,
            icon: <ScalesIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Гармония между разумом и чувствами',
            descr: 'Четкое понимание связи ваших мыслей, эмоций и действий. Жизнь в согласии с собой.'
        },
    ]

    return (
        <motion.section
            id="results"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="
                py-10
                bg-(--color-bg-main)
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
                        Что изменится после нашей работы?
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
                        {results.map((card, index) => (
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
                                    bg-[#F0F0F0]
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
                                    whileHover={{ color: "#C4A484" }}
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