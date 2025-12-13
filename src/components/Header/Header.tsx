'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FiX as CrossIcon } from 'react-icons/fi'
import { FaPhoneAlt as PhoneIcon  } from "react-icons/fa";
import { RxHamburgerMenu as BurgerIcon } from "react-icons/rx";

interface NavLink {
    id: number,
    label: string,
    href: string,
}

const navLinks : NavLink[] = [
    { id: 1, label: 'Обо мне', href: '#about' },
    { id: 2, label: 'Направления', href: '#directions' },
    { id: 3, label: 'Этапы работы', href: '#stages-work' },
    { id: 4, label: 'Ваш результат', href: '#results' },
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
        <header className='fixed top-0 left-0 right-0 z-50 bg-(--color-bg-dark)'>
            <div className='max-w-7xl mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1600px]'>
                <div className='flex justify-between items-center h-[60px] md:h-[70px] xl:h-20'>

                    {/* Логотип */}
                    <div className='flex items-center'>
                        <Image 
                            src="/icons/label.png" width={48} height={48} 
                            alt='Главная иконка'
                        />
                        <span className='
                            text-white 
                            font-semibold
                            text-[15px]
                            sm:text-base
                            md:inline md:text-[17px]
                            lg:text-lg
                        '>«Опора»</span>
                    </div>
                    
                    {/* Десктопная навигация */}
                    <nav className='
                        hidden
                        md:flex md:text-[13px] md:space-x-3
                        lg:space-x-9
                    '>
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className='text-white hover:text-[#C4A484] transition-colors duration-300 font-medium lg:text-sm'
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    
                    {/* Десктопная кнопка */}
                    <button className="
                        hidden 
                        md:flex md:items-center md:space-x-2 md:text-sm md:px-3 md:py-2
                        lg:text-sm lg:px-5 lg:py-3
                        btn
                        hover:bg-primary/90 
                        duration-300
                    ">
                        <span>Записаться</span>
                        <PhoneIcon className='w-5 h-5 lg:w-4 lg:h-4 md:w-3.5 md:h-3.5' />
                    </button>
                    
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
                <div className='flex flex-col justify-center items-center min-h-screen p-8'>

                    {/* Кнопка закрытия */}
                    <button
                        onClick={closeMobileMenu}
                        className="
                            absolute 
                            top-6 
                            right-6 
                            text-white 
                            p-2"
                    >
                        <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Навигация */}
                    <nav className='
                        flex 
                        flex-col 
                        items-center 
                        justify-start 
                        space-y-4 
                        w-full
                    '>
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className='
                                    text-white 
                                    text-base
                                    hover:text-[#C4A484] 
                                    transition-colors 
                                    duration-300 
                                    font-medium 
                                    py-2
                                    sm:text-lg
                                '
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Кнопка в мобильном меню */}
                    <button 
                        onClick={closeMobileMenu}
                        className='
                            mt-12
                            flex 
                            items-center 
                            gap-2
                            bg-[#C4A484] 
                            text-white 
                            px-8 
                            py-3 
                            rounded-lg 
                            hover:bg-[#C4A484]/90 
                            transition-all 
                            duration-300 
                            text-base
                            sm:text-xl sm:px-10 sm:py-4 sm:mt-16
                        '
                    >
                        <span>Записаться</span>
                        <PhoneIcon className='w-4 h-4 sm:w-5 sm:h-5' />
                    </button>

                </div>
            </div>

        </header>
    )
}