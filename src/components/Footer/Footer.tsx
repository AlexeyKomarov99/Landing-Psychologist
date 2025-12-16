'use client'

import Image from 'next/image'
import { MdOutlineEmail as MailIcon } from "react-icons/md"
import { FiPhone as PhoneIcon } from "react-icons/fi"
import { RiVkLine as VKIcon } from "react-icons/ri"
import { RiTelegramLine as TelegramIcon } from "react-icons/ri"
import { IoLogoInstagram as InstagramIcon } from "react-icons/io5"

interface NavLink {
    id: number,
    label: string,
    href: string,
}

interface AboutInfo {
    id: number
    label: string
    icon: React.ReactNode
}

interface SocialNetworkIcon {
    id: number
    icon: React.ReactNode
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const navLinks : NavLink[] = [
        { id: 1, label: 'Обо мне', href: '#about' },
        { id: 2, label: 'Направления', href: '#directions' },
        { id: 3, label: 'Этапы работы', href: '#stages-work' },
        { id: 4, label: 'Наши результаты', href: '#results' },
        { id: 5, label: 'FAQ', href: '#faq' },
    ]

    const aboutInfo : AboutInfo[] = [
        {
            id: 1,
            label: 'PileusMoscow@yandex.ru',
            icon: <MailIcon className='w-6 h-6'/>
        },
        {
            id: 2,
            label: '+7 (800) 555-35-35',
            icon: <PhoneIcon className='w-6 h-6'/>
        }
    ]

    const socialNetworkIcons: SocialNetworkIcon[] = [
        {
            id: 1,
            icon: <VKIcon className='w-6 h-6 text-[#C4A484] hover:text-white/75 duration-300 transition-colors cursor-pointer' />
        },
        {
            id: 2,
            icon: <TelegramIcon className='w-6 h-6 text-[#C4A484] hover:text-white/75 duration-300 transition-colors cursor-pointer'/>
        },
        {
            id: 3,
            icon: <InstagramIcon className='w-6 h-6 text-[#C4A484] hover:text-white/75 duration-300 transition-colors cursor-pointer' />
        },
    ]

    return (
        <footer
            className='
                py-10
                bg-(--color-bg-dark)
                md:py-15
                lg:py-20
            '
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
                    items-start
                    gap-8
                    pb-7.5
                    w-full
                    md:flex-row md:justify-between
                    xl:justify-center
                    2xl:grid 2xl:grid-cols-2 2xl:gap-12 2xl:w-full
                ">
                    {/* 1 и 2 */}
                    <div className="
                        flex
                        flex-col
                        justify-start
                        items-start
                        gap-8
                        2xl:grid 2xl:grid-cols-2 2xl:gap-16
                    ">
                        {/* 1 группа */}
                        <div className="
                            flex
                            flex-col
                        ">
                            <a
                                href='#hero'
                                className="
                                    flex
                                    flex-row
                                    items-center
                                    mb-4
                                    md:-mt-2.5
                            ">
                                <Image
                                    src='/icons/label.png'
                                    alt='Главная иконка'
                                    className='
                                        -ml-2.5
                                        md:ml-0 
                                        '
                                    width={48}
                                    height={48}
                                />
                                <h4 className='
                                    text-white!
                                    text-lg
                                '>
                                    Опора
                                </h4>
                            </a>
                            <span className='
                                text-white!
                                opacity-65
                                leading-[1.4]
                                md:max-w-[375px]
                                xl:max-w-[350px]
                            '>
                                Сообщество «Опора». Психологическая практика для ментальной реструктуризации и развития личности.
                            </span>
                        </div>

                        {/* 2 группа */}
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <h4 className='
                                text-white!
                                text-lg
                                mb-4
                            '>Навигация</h4>
                            <div className="
                                flex
                                flex-col
                                justify-start
                                items-start
                                gap-2
                            ">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        className='
                                            text-white!
                                            opacity-65
                                            hover:text-[#C4A484]!
                                            transition-colors
                                            duration-300
                                    '>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* 3 и 4 */}
                    <div className="
                        flex
                        flex-col
                        justify-start
                        items-start
                        gap-8
                        2xl:grid 2xl:grid-cols-2 2xl:gap-16
                    ">
                        {/* 3 группа */}
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <h4 className='
                                text-white!
                                text-lg
                                mb-4
                            '>Связаться со мной</h4>
                            <div className="
                                flex
                                flex-col
                                justify-start
                                items-start
                                gap-2
                            ">
                            {aboutInfo.map((info) => (
                                    <div
                                        key={info.id}
                                        className='
                                            flex
                                            flex-row
                                            justify-start
                                            items-center
                                        '
                                    >
                                        <span className='
                                            mr-3
                                            text-[#C4A484]
                                        '>{info.icon}</span>
                                        <span className='
                                            text-white!
                                            opacity-65
                                        '>{info.label}</span>
                                    </div>
                            ))}
                            </div>
                        </div>

                        {/* 4 группа */}
                        <div className="
                            flex
                            flex-col
                            justify-start
                            items-start
                        ">
                            <h4 className='
                                text-white!
                                text-lg
                                mb-4
                            '>Социальные сети</h4>
                            <div className="
                                flex 
                                flex-row 
                                justify-start 
                                items-center
                                gap-2
                            ">
                                {socialNetworkIcons.map((icon) => (
                                    <span
                                        key={icon.id}
                                    >
                                        {icon.icon}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-screen border-t border-white/20"></div>
                    <div className="relative z-10 ">
                    </div>
                </div>

                <div className="
                    text-white!
                    opacity-65
                    pt-5
                    text-center
                    text-[15px]
                ">
                    © 2025 “Московский психолог - Пилеус”. Все права защищены
                </div>
            </div>
        </footer>
    )
}