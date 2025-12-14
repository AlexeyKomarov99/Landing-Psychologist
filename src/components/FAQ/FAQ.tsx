'use client'
import { useState } from 'react'
import { IoIosArrowForward as ArrowRightIcon } from "react-icons/io"
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
    id: number
    question: string
    answer: string
}

export default function FAQ() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        )
    }

    const questions: FAQItem[] = [
        {
            id: 1,
            question: 'Сколько нужно сессий для результата?',
            answer: 'Первые изменения заметны после 4-6 встреч. Полный курс зависит от запроса и составляет в среднем 10-15 сессий.'
        },
        {
            id: 2,
            question: 'Это конфиденциально?',
            answer: 'Да, полностью. Все сессии строго конфиденциальны. Я соблюдаю профессиональную этику психолога, и ваши личные данные защищены.'
        },
        {
            id: 3,
            question: 'Как проходит консультация?',
            answer: 'Консультации проходят онлайн в удобное для вас время. Мы обсуждаем ваш запрос, анализируем ситуацию и работаем над решениями в безопасной и поддерживающей атмосфере.'
        },
        {
            id: 4,
            question: 'Что если станет хуже во время терапии?',
            answer: 'Иногда в процессе терапии могут всплывать сложные эмоции — это нормальная часть процесса. Я помогу вам безопасно пройти через них и интегрировать полученный опыт.'
        },
        {
            id: 5,
            question: 'Можно ли работать с психологом онлайн?',
            answer: 'Да, онлайн-консультации не менее эффективны, чем очные встречи. Современные исследования подтверждают, что терапия онлайн дает те же результаты при условии хорошей связи и приватного пространства.'
        },
        {
            id: 6,
            question: 'Как часто нужно ходить на сессии?',
            answer: 'Обычно мы встречаемся 1 раз в неделю. Такой ритм позволяет сохранить непрерывность работы и дает время для интеграции изменений между сессиями. В некоторых случаях возможна частота 2 раза в неделю или раз в 2 недели.'
        },
        {
            id: 7,
            question: 'Нужно ли мне что-то готовить к первой встрече?',
            answer: 'Ничего специально готовить не нужно. Просто подумайте, с какой проблемой или запросом вы хотите обратиться. На первой встрече мы вместе разберем ситуацию и наметим план работы.'
        },
        {
            id: 8,
            question: 'Что делать, если мне не подойдет психолог?',
            answer: 'Химия между психологом и клиентом действительно важна. Если после 2-3 сессий вы поймете, что это не ваш специалист, я помогу найти другого психолога из своей профессиональной сети или верну предоплату за оставшиеся сессии.'
        }
    ]

    return (
        <section
            id="faq"
            className="
                py-10
                bg-(--color-bg-main)
                md:py-15
                lg:py-20
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
                    <h2 className="
                        text-[26px]
                        text-center
                        mb-10
                        md:mb-12 md:text-[32px]
                        lg:text-[38px]
                    ">Ответы на часто задаваемые вопросы</h2>
                    
                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        space-y-4
                        w-full
                    ">
                        {questions.map((question) => {
                            const isOpen = openItems.includes(question.id)
                            
                            return (
                                <div 
                                    key={question.id}
                                    className="
                                        w-full
                                        rounded-xl
                                        shadow-sm
                                        overflow-hidden
                                        border
                                        border-gray-200
                                        hover:border-[#C4A484]/30
                                        transition-colors
                                        duration-300
                                    "
                                >
                                    {/* Кликабельный заголовок */}
                                    <button
                                        onClick={() => toggleItem(question.id)}
                                        className={`
                                            w-full
                                            flex
                                            flex-row
                                            justify-between
                                            items-center
                                            px-6
                                            py-5
                                            transition-all
                                            duration-300
                                            bg-[#F8F9FA]
                                            cursor-pointer
                                            md:px-8 md:py-6
                                            lg:px-10
                                            2xl:px-14
                                        `}
                                    >
                                        {/* Вопрос с акцентным цветом при открытии */}
                                        <h4 className={`
                                            text-left
                                            font-medium
                                            transition-colors
                                            duration-300
                                            sm:text-lg
                                            md:text-xl
                                            2xl:text-[21px]
                                            ${isOpen 
                                                ? 'text-[#C4A484]!' 
                                                : 'text-gray-800'
                                            }
                                        `}>
                                            {question.question}
                                        </h4>
                                        
                                        {/* Иконка стрелки с анимацией */}
                                        <motion.div
                                            animate={{ rotate: isOpen ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRightIcon className={`
                                                transition-colors
                                                duration-300
                                                w-5
                                                h-5
                                                md:w-6 md:h-6
                                                2xl:w-7 2xl:h-7
                                                ${isOpen 
                                                    ? 'text-[#C4A484]' 
                                                    : 'text-(--color-title)'
                                                }
                                            `} />
                                        </motion.div>
                                    </button>

                                    {/* Ответ с плавной анимацией */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="
                                                    px-6
                                                    pb-5
                                                    pt-2
                                                    bg-[#F8F9FA]
                                                    md:px-8 md:pb-6
                                                    lg:px-10 lg:pb-4
                                                    2xl:px-14 2xl:pb-6 2xl:pt-1
                                                ">
                                                    <span className="
                                                        text-[15px]
                                                        sm:text-base
                                                        md:text-[17px]
                                                        2xl:text-lg
                                                    ">
                                                        {question.answer}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}