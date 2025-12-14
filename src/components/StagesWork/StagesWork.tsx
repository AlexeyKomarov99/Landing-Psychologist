interface StahesWorkCard {
    id: number
    number: string
    title: string
    descr: string
}

export default function StagesWork() {
    
    const stages: StahesWorkCard[] = [
        {
            id: 1,
            number: '01',
            title: 'Знакомство и диагностика',
            descr: 'Мы глубоко разбираем ваш запрос, определяем цели и анализируем текущие модели мышления. Вы получаете ясный план работы и понимание вашего внутреннего устройства.',
        },
        {
            id: 2,
            number: '02',
            title: 'Погружение и анализ',
            descr: 'Исследуем архитектуру вашего мышления: убеждения, автоматические мысли, эмоциональные реакции. Вы осознаёте, как формируются ваши привычные сценарии.',
        },
        {
            id: 3,
            number: '03',
            title: 'Реструктуризация и развитие',
            descr: 'Активно развиваем психологические навыки: работа с мышлением, управление эмоциями, коммуникация. Вы получаете работающие методы для повседневной жизни.',
        },
        {
            id: 4,
            number: '04',
            title: 'Закрепление и интеграция',
            descr: 'Новые модели мышления и поведения становятся вашей естественной опорой. Вы учитесь гибко применять их в любых ситуациях — самостоятельно и уверенно.',
        },
    ]
    
    return (
        <section
            id="#stages-work"
            className="
                py-10
                bg-(--color-bg-secondary)
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
                    justify-start
                    items-center
                ">
                    <h2 className="
                        text-[26px]
                        text-center
                        mb-10
                        md:mb-12 md:text-[32px]
                        lg:text-[38px]
                    ">
                        Путь к устойчивым изменениям
                    </h2>
                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        space-y-5
                        md:items-start md:justify-start md:w-full
                    ">
                        {stages.map((stage) => (
                            <div
                                key={stage.id}
                                className="
                                    flex
                                    flex-col
                                    justify-start
                                    items-start
                                    p-5
                                    bg-(--color-bg-main)
                                    rounded-xl
                                    shadow-sm
                                    max-w-[320px]
                                    min-h-[330px]
                                    sm:max-w-[375px]
                                    md:flex-row md:w-full md:max-w-none md:gap-8 md:min-h-[175px] md:px-6 md:py-5
                                    xl:gap-10 xl:min-h-[180px] xl:px-5 xl:py-5
                                    2xl:px-6 2xl:py-6
                                "
                            >
                                <span className="
                                    text-(--color-primary)
                                    font-bold
                                    text-[40px]
                                    tracking-[-0.05em]
                                    mb-4
                                    md:text-[60px] md:flex md:items-start md:justify-start md:text-start md:mb-0
                                    xl:text-[64px]
                                    2xl:text-[68px]
                                "
                                style={{ fontFamily: 'var(--font-lora)' }}>{stage.number}</span>
                                <div>
                                    <h4 className="
                                        font-bold
                                        mb-2
                                        text-lg
                                        md:text-xl md:font-semibold md:mt-4
                                        lg:text-[21px]
                                        2xl:text-[22px]
                                    ">{stage.title}</h4>
                                    <span className="
                                        md:text-[17px]
                                        2xl:text-lg
                                    ">{stage.descr}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>      
    )
}
