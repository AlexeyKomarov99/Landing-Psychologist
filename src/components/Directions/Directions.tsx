import { BsLightning as LightningIcon } from "react-icons/bs"
import { IoIosBatteryDead as BatteryIcon } from "react-icons/io"
import { PiHeartBreak as HeartBreakIcon } from "react-icons/pi"
import { GoLock as LockIcon } from "react-icons/go"
import { PiScalesLight as ScalesIcon } from "react-icons/pi"
import { PiSmileySad as SmileSadIcon } from "react-icons/pi"

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
            icon: <LightningIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Тревога и панические атаки',
            descr: 'Помогаю понять, корни тревоги, обучаю техникам сомопомощи и использую когнитивно-поведенческую терапию (КПТ) для устойчивых изменений.'
        },
        {
            id: 2,
            icon: <BatteryIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Выгорание на работе',
            descr: 'Анализируем причины, восстанавливаем энергетический баланс, учимся выстраивать здоровые границы и возвращаем вкус к жизни.'
        },
        {
            id: 3,
            icon: <HeartBreakIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Кризисы в отношениях',
            descr: 'Диагностирую конфликты, учу эмпатическому слушанию. помогаю восстановить взаимопонимание и гармонию в паре или с близкими.'
        },
        {
            id: 4,
            icon: <LockIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Низкая самооценка',
            descr: 'Работаем с внутренним критиком, укрепляем уверенность в себе, находим внутренние опоры и раскрываем потенциал.'
        },
        {
            id: 5,
            icon: <ScalesIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Управление эмоциями',
            descr: 'Научу распознавать причины эмоций, управлять их накалом и возвращать внутреннее равновесие.'
        },
        {
            id: 6,
            icon: <SmileSadIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"/>,
            title: 'Последствия психической травмы',
            descr: 'Создаю безопасное пространство для проработки травматического опыта, применения EMDR и другие эффективные методы для исцеления.'
        },

    ]

    return (
        <section
            id="directions"
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
                    justify-center
                    items-center
                ">
                    <h2 className="
                        text-[26px]
                        text-center
                        mb-10
                        md:mb-12 md:text-[32px]
                        lg:text-[38px]
                    ">С какими просьбами ко мне обращаются?</h2>
                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        space-y-5
                        md:grid md:grid-cols-2 md:gap-4 md:space-y-0
                        2xl:grid-cols-3 2xl:gap-5 2xl:w-full
                    ">
                        {directions.map((card) => (
                            <div
                                key={card.id}
                                className="
                                    flex
                                    flex-col
                                    justify-start
                                    items-center
                                    bg-(--color-bg-main)
                                    rounded-xl
                                    p-5
                                    shadow-sm
                                    min-h-[250px]
                                    max-w-[320px]
                                    sm:min-h-[290px] sm:max-w-[375px]
                                    lg:min-h-[280px] lg:max-w-[400px]
                                    xl:min-h-80 xl:max-w-[400px]
                                    2xl:justify-center 2xl:max-w-none
                                "
                            >
                                <div className="
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
                                ">{card.icon}</div>
                                <h4 className="
                                    text-center
                                    mb-3
                                    sm:text-lg
                                    lg:text-[21px]
                                ">{card.title}</h4>
                                <span className="
                                    text-center
                                    lg:text-[17px]
                                ">{card.descr}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}