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
                    src={'/images/bg-books.png'}
                    alt='Фоновое изображение'
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* Внутренний контент */}
            <div className="relative z-30 w-full">
                <div className="
                    mx-auto
                    min-h-[80vh]
                    px-4
                    sm:min-h-[90vh] sm:max-w-[540px] sm:px-6
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
                            lg:justify-start lg:items-start
                        ">
                            <h1 className='
                                mt-90
                                text-[26px]
                                text-center
                                text-white!
                                font-semibold
                                leading-[1.2]
                                sm:text-[30px] sm:text-center sm:max-w-[520px] sm:mt-118
                                md:text-[32px] md:mt-135
                                lg:text-[38px] lg:max-w-[520px] lg:mt-34 lg:text-start
                                xl:text-[42px] xl:max-w-[600px] xl:mt-38
                                2xl:text-[48px] 2xl:max-w-[680px] 2xl:mt-46
                                3xl:text-[54px]
                            '>Ваш внутренний стержень — ваша главная опора</h1>
                            <span className='
                                hidden
                                text-lg
                                text-white!
                                font-normal
                                leading-[1.4]
                                lg:block lg:max-w-[480px] lg:mt-38
                                xl:max-w-[520px] xl:mt-26
                                2xl:max-w-[560px] 2xl:mt-22
                            '>Сообщество и психологическая практика «Опора» помогают развить внутренний стержень и научиться справляться с любыми жизненными вызовами через ментальную реструктуризацию.</span>
                            <span className='
                                hidden
                                text-lg
                                text-white!
                                font-normal
                                leading-[1.4]
                                lg:block lg:mt-2
                                2xl:mt-3
                            '>Адаптируйтесь, меняйтесь, улучшайтесь!</span>
                            <button className='
                                btn
                                text-center
                                mt-28
                                px-20 
                                py-4 
                                flex
                                items-center
                                space-x-3 
                                hover:bg-primary/90 
                                duration-300
                                text-base
                                sm:mt-[140px] sm:text-lg
                                md:px-16 md:py-3 md:mt-44
                                lg:mt-10
                                xl:mt-16
                                2xl:mt-24 2xl:px-20 2xl:py-4
                            '>
                                <span>Записаться</span>
                                <PhoneIcon className='w-5 h-5' />
                            </button>
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

                            lg:flex lg:justify-end lg:mr-26 lg:items-center
                            xl:mr-28
                            2xl:mr-50
                        ">
                            <Image 
                                src={'/images/banner_hero.png'}
                                alt='Московский психолог'
                                width={490}
                                height={530}
                                className="
                                    max-w-[300px] max-h-[540px]
                                    sm:max-w-[400px] sm:max-h-[720px]
                                    md:max-w-[430px] md:max-h-[760px]
                                    xl:max-w-[460px] xl:max-h-[780px]
                                    2xl:max-w-[500px] 2xl:max-h-[840px]
                            "/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}