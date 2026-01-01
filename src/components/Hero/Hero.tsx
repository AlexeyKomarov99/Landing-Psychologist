'use client'
import Image from 'next/image'
import { FaPhoneAlt as PhoneIcon  } from "react-icons/fa";

export default function Hero() {

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center overflow-hidden"
        >   
            {/* Фон баннера с блюром */}
            <div className='absolute inset-0 z-0'>
                <Image 
                    src={'/images/bg-books.jpg'}
                    alt='Фоновое изображение'
                    fill
                    className="object-cover"
                    priority={true}
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* Внутренний контент */}
            <div className="relative z-30 w-full">

                {/* Контейнер */}
                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    min-h-screen
                    sm:max-w-[540px]
                    md:max-w-[720px]
                    md:min-h-screen
                    lg:max-w-[960px]
                    xl:max-w-[1140px]
                    2xl:max-w-[1320px]
                    3xl:max-w-[1600px]
                ">
                    <div className="
                        flex justify-between items-center
                    ">
                        {/* Текстовая часть слева */}
                        <div className="
                            flex 
                            flex-col 
                            items-center 
                            justify-center 
                            relative 
                            z-30
                            m-auto
                            sm:m-0
                            lg:justify-start lg:items-start
                        ">
                            {/* Титул */}
                            <h1 className='
                                text-center
                                text-white!
                                font-semibold
                                leading-[1.2]
                                max-w-[93%]
                                mt-[clamp(40vh,50vh,60vh)]
                                text-[clamp(22px,5vw,30px)]
                                sm:text-[clamp(30px,5vw,36px)] 
                                sm:text-center 
                                sm:max-w-[95%]
                                md:text-[clamp(36px,5vw,50px)] 
                                md:mt-[clamp(40vh,50vh,60vh)]
                                md:max-w-[98%]
                                lg:max-w-[625px]
                                lg:mt-[15vh]
                                lg:text-start
                                xl:text-[clamp(46px, 5vw, 52px)] 
                                xl:max-w-[750px]
                                xl:mt-[20vh]
                                2xl:text-[50px] 2xl:max-w-[680px] 2xl:mt-50
                                3xl:text-[54px]
                            '>Ваш внутренний стержень — ваша главная опора</h1>

                            {/* Описание 1 */}
                            <span className='
                                hidden
                                text-lg
                                text-white!
                                font-normal
                                leading-[1.4]
                                lg:block
                                lg:text-[clamp(18px,1.5vw,20px)]
                                lg:max-w-[clamp(450px,40vw,480px)]
                                lg:mt-[7vh]
                                xl:max-w-[550px]
                                xl:text-[clamp(19px,1.4vw,22px)]
                                xl:mt-[25vh]
                                2xl:max-w-[560px] 2xl:mt-14
                            '>Сообщество и психологическая практика «Опора» помогают развить внутренний стержень и научиться справляться с любыми жизненными вызовами через ментальную реструктуризацию.</span>
                            
                            {/* Описание 2 */}
                            <span className='
                                hidden
                                text-lg
                                text-white!
                                font-normal
                                leading-[1.4]
                                lg:block
                                lg:text-[clamp(18px,1.5vw,20px)]
                                lg:mt-[2vh]
                                xl:text-[clamp(19px,1.4vw,22px)]
                                2xl:mt-3
                            '>Адаптируйтесь, меняйтесь, улучшайтесь!</span>

                            {/* Кнопка */}
                            <a
                                href='#consultation'
                                className='
                                    btn
                                    text-center
                                    flex
                                    items-center
                                    space-x-2
                                    hover:brightness-90!
                                    duration-300
                                    text-[clamp(16px,4vw,18px)]
                                    mt-[clamp(10vh,20vh,25vh)]
                                    px-[clamp(24px,12vw,48px)]
                                    py-[clamp(8px,2vh,12px)]
                                    sm:text-[clamp(18px,4vw,20px)]
                                    md:text-[clamp(18px,2.5vw,22px)]
                                    md:mt-[clamp(12vh,18vh,22vh)]
                                    md:px-[clamp(40px,8vw,80px)]
                                    md:py-[clamp(12px,3vh,16px)]
                                    lg:mt-[30vh]
                                    xl:mt-[10vh]
                                    2xl:mt-[30vh]
                                    2xl:px-[clamp(80px,6vw,100px)]
                                    2xl:py-[clamp(16px,2.5vh,20px)]
                            '>
                                <span>Записаться</span>
                                <PhoneIcon className='w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)]' />
                            </a>
                        </div>

                        {/* Фотография психолога справа */}
                        <div className="
                            absolute 
                            bottom-0
                            left-0 
                            right-0 
                            z-10
                            flex
                            justify-center
                            lg:flex lg:justify-end lg:mr-20 lg:items-center
                            xl:mr-[clamp(80px,7vw,110px)]
                            2xl:mr-[clamp(170px,11vw,240px)]
                        ">
                            <Image 
                                src={'/images/banner_hero.avif'}
                                alt='Московский психолог'
                                width={440}  // Максимальная ширина (для 2xl)
                                height={800} // Максимальная высота (для 2xl)
                                priority={true}
                                quality={100}
                                className="
                                    /* Мобильные (320px-640px) */
                                    w-full
                                    h-[clamp(420px,85vh,900px)]
                                    max-w-none
                                    object-contain object-bottom
                                    
                                    /* sm (≥640px) */
                                    sm:max-w-[445px]
                                    sm:max-h-[790px]
                                    
                                    /* md (≥768px) */
                                    md:max-w-[550px]
                                    md:max-h-none
                                    md:h-[clamp(800px,85vh,1100px)]
                                    
                                    /* lg (≥1024px) и больше */
                                    lg:max-w-[475px]
                                    lg:h-[clamp(800px,85vh,1100px)]
                                    
                                    /* xl (≥1280px) */
                                    xl:max-w-[clamp(490px,30vw,520px)]
                                    xl:h-[clamp(800px,82vh,1000px)]
                                    
                                    /* 2xl (≥1536px)*/
                                    2xl:max-w-[clamp(510px,30vw,530px)]
                                    2xl:h-[clamp(850px,82vh,1000px)]
                                "
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 380px, (max-width: 1024px) 415px, 440px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}