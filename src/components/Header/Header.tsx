'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FiX as CrossIcon } from 'react-icons/fi'
import { FaPhoneAlt as PhoneIcon  } from "react-icons/fa";
import { RxHamburgerMenu as BurgerIcon } from "react-icons/rx";
import AnchorLink from '@/components/AnchorLink/AnchorLink'

interface NavLink {
    id: number,
    label: string,
    href: string,
}

const navLinks : NavLink[] = [
    { id: 1, label: 'Обо мне', href: '#about' },
    { id: 2, label: 'Направления', href: '#directions' },
    { id: 3, label: 'Этапы работы', href: '#stages-work' },
    { id: 4, label: 'Наши результаты', href: '#results' },
    { id: 5, label: 'FAQ', href: '#faq' },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className='
            fixed 
            top-0 
            left-0 
            z-50 
            bg-(--color-bg-dark)
            w-full
            '>
            <div className='
                max-w-7xl 
                mx-auto
                px-4
                sm:max-w-[540px] sm:px-0
                md:max-w-[720px] 
                lg:max-w-[960px] 
                xl:max-w-[1140px] 
                2xl:max-w-[1320px] 
                3xl:max-w-[1600px]'
            >
                <div className='
                    flex 
                    justify-between 
                    items-center 
                    h-[60px] 
                    md:h-[70px] 
                    xl:h-20    
                '>

                    {/* Логотип */}
                    <AnchorLink
                        href='#hero' 
                        className='
                            flex 
                            items-center
                            cursor-pointer
                    '>
                        <Image 
                            src="/icons/label.png" width={48} height={48} 
                            alt='Главная иконка'
                        />
                        <span className='
                            text-white font-semibold
                            text-[clamp(14px,4vw,16px)]
                            sm:text-[clamp(15px,3.5vw,17px)]
                            md:text-[clamp(16px,3vw,18px)]
                            lg:text-[19px]
                        '>«Опора»</span>
                    </AnchorLink>
                    
                    {/* Десктопная навигация */}
                    <nav className='
                        hidden
                        md:flex 
                        md:text-[clamp(12px,1.2vw,14px)]
                        md:space-x-[clamp(8px,1.5vw,16px)]
                        lg:space-x-[clamp(16px,2vw,36px)]
                        lg:text-[clamp(14px,1.5vw,16px)]
                    '>
                        {navLinks.map((link) => (
                            <AnchorLink
                                key={link.id}
                                href={link.href}
                                className='
                                    text-white 
                                    hover:text-[#C4A484] 
                                    transition-colors 
                                    duration-300 
                                    font-medium
                                '
                            >
                                {link.label}
                            </AnchorLink>
                        ))}
                    </nav>
                    
                    {/* Десктопная кнопка */}
                    <AnchorLink
                        href='#consultation' 
                        className="
                            hidden 
                            btn
                            hover:brightness-90!
                            duration-300
                            md:flex 
                            md:items-center 
                            md:space-x-2 
                            md:text-[clamp(12px,1.1vw,14px)]
                            md:px-[clamp(12px,2vw,20px)]
                            md:py-[clamp(6px,1.5vh,10px)]
                            lg:px-[clamp(16px,2.5vw,24px)]
                            lg:py-[clamp(8px,1.8vh,12px)]
                    ">
                        <span>Записаться</span>
                        <PhoneIcon className='
                            w-[clamp(14px,3vw,16px)]
                            h-[clamp(14px,3vw,16px)]
                            lg:w-4 lg:h-4
                        ' />
                    </AnchorLink>
                    
                    {/* Кнопка бургера */}
                    <button
                        onClick={toggleMobileMenu}
                        className='md:hidden'
                    >
                        {isMobileMenuOpen ? (
                            <CrossIcon className='w-5 h-5' />
                        ) : (
                            <BurgerIcon className='w-5 h-5 text-white' />
                        )}
                    </button>
                </div>
            </div>
            
            {/* Мобильное меню (модальное окно) */}
            <div className={`
                    fixed 
                    inset-0 
                    z-40 
                    bg-(--color-bg-dark) 
                    transition-all 
                    duration-300 
                    ease-in-out 
                    ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                <div className='
                    flex flex-col justify-center items-center 
                    min-h-screen 
                    p-8
                '>

                    {/* Кнопка закрытия */}
                    <button
                        onClick={closeMobileMenu}
                        className="
                            absolute 
                            top-6 
                            right-6 
                            text-white 
                            p-2
                            cursor-pointer
                        "
                    >
                        <CrossIcon className="
                            w-[clamp(20px,5vw,24px)]
                            h-[clamp(20px,5vw,24px)]
                            sm:w-[clamp(24px,5vw,28px)]
                            sm:h-[clamp(24px,5vw,28px)]
                        " 
                        />
                    </button>

                    {/* Навигация */}
                    <nav className='
                        flex 
                        flex-col 
                        items-center 
                        justify-start 
                        space-y-[clamp(16px,3vh,20px)]
                        w-full
                    '>
                        {navLinks.map((link) => (
                            <AnchorLink
                                key={link.id}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className='
                                    text-white 
                                    text-[clamp(18px,4.5vw,22px)]
                                    hover:text-[#C4A484] 
                                    transition-colors 
                                    duration-300 
                                    font-medium 
                                    py-2
                                    sm:text-[clamp(20px,4vw,24px)]
                                '
                            >
                                {link.label}
                            </AnchorLink>
                        ))}
                    </nav>

                    {/* Кнопка в мобильном меню */}
                    <AnchorLink
                        href='#consultation'
                        onClick={closeMobileMenu}
                        className='
                            mt-[clamp(32px,8vh,48px)]
                            flex 
                            items-center 
                            gap-2
                            bg-[#C4A484] 
                            text-white 
                            px-[clamp(24px,10vw,40px)]
                            py-[clamp(12px,3vh,16px)]
                            rounded-lg 
                            hover:brightness-90!
                            transition-all 
                            duration-300 
                            text-[clamp(16px,4vw,18px)]
                            sm:text-[clamp(18px,3.5vw,20px)]
                            sm:mt-[clamp(48px,8vh,64px)]
                        '
                    >
                        <span>Записаться</span>
                        <PhoneIcon className='
                            w-[clamp(16px,4vw,18px)]
                            h-[clamp(16px,4vw,18px)] 
                            sm:w-5 
                            sm:h-5
                        ' />
                    </AnchorLink>

                </div>
            </div>

        </header>
    )
}