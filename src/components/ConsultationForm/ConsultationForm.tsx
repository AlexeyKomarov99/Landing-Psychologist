'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { consultationFormSchema, ConsultationFormData } from '@/lib/schemas/consultation-form'
import FormCheckbox from '../Form/FormCheckbox'
import SubmitButton from '../Form/SubmitButton'
import SuccessModal from '../Modal/SuccessModal'
import { IMaskInput } from 'react-imask'
import { 
  fadeInTop, 
  fadeInLeft,
  staggerContainer 
} from '@/lib/animations/variants'

export default function ConsultationForm() {
    
    const [phoneInput, setPhoneInput] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ConsultationFormData>({
        resolver: zodResolver(consultationFormSchema)
    })

    const onSubmit = async (data: ConsultationFormData) => {
        console.log('Данные формы:', data)
        
        try {
            // Отправка на сервер...
            // await fetch('/api/send-form', { ... })
            
            // После успешной отправки:
            reset()
            setPhoneInput('')
            setIsModalOpen(true)
            
            setTimeout(() => {
                setIsModalOpen(false)
            }, 7000)
            
        } catch (error) {
            console.error('Ошибка отправки:', error)
        }
    }

    const handlePhoneChange = (value: string) => {
        setPhoneInput(value)
        setValue('phone', value, { shouldValidate: false })
        
        if (value.replace(/\D/g, '').length >= 10) {
            setValue('phone', value, { shouldValidate: true })
            trigger('phone')
        }
    }

    return (
        <>
            <motion.section
                id="consultation"
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
                        {/* Текст */}
                        <motion.div 
                            variants={staggerContainer}
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                mb-10
                            "
                        >
                            <motion.h2 
                                variants={fadeInTop}
                                className="
                                    text-[26px]
                                    mb-10
                                    md:mb-12 md:text-[32px]
                                    lg:text-[38px]
                                "
                            >
                                Начните меняться уже сегодня!
                            </motion.h2>
                            
                            <motion.span 
                                variants={fadeInLeft}
                                className="
                                    text-center
                                "
                            >
                                Запишитесь на вводную консультацию. Мы исследуем ваш запрос, и вы получите ясный план развития вашего личного потенциала.
                            </motion.span>
                        </motion.div>

                        {/* Форма обратной связи */}
                        <motion.div 
                            variants={fadeInLeft}
                            className="
                                w-full
                                max-w-md
                                md:max-w-lg 
                                lg:max-w-2xl
                            "
                        >
                            <motion.form 
                                variants={staggerContainer}
                                onSubmit={handleSubmit(onSubmit)} 
                                className="
                                    bg-(--color-bg-main) 
                                    rounded-2xl 
                                    shadow-lg 
                                    p-6 
                                    md:p-8 
                                    lg:p-10
                                "
                            >
                                {/* Имя и фамилия */}
                                <motion.div 
                                    variants={fadeInLeft}
                                    className="mb-6"
                                >
                                    <label className="
                                        block 
                                        text-sm 
                                        font-medium
                                        text-(--color-title)
                                        mb-2
                                    ">
                                        Имя и фамилия *
                                    </label>
                                    <input
                                        {...register('name')}
                                        className="
                                            w-full 
                                            px-4 
                                            py-3 
                                            border 
                                            border-gray-300 
                                            rounded-lg 
                                            focus:ring-2 
                                            focus:ring-[#C4A484] 
                                            focus:border-transparent 
                                            outline-none 
                                            transition
                                            cursor-pointer"
                                        placeholder="Иван Иванов"
                                    />
                                    {errors.name && (
                                        <p className="
                                            mt-1 
                                            text-sm 
                                            text-red-600
                                        ">{errors.name.message}</p>
                                    )}
                                </motion.div>

                                {/* Телефон с маской */}
                                <motion.div 
                                    variants={fadeInLeft}
                                    transition={{ delay: 0.1 }}
                                    className="mb-6"
                                >
                                    <label className="
                                        block 
                                        text-sm 
                                        font-medium 
                                        text-(--color-title) 
                                        mb-2">
                                        Телефон *
                                    </label>
                                    <IMaskInput
                                        mask="+7 (000) 000-00-00"
                                        definitions={{
                                            '0': /[0-9]/
                                        }}
                                        value={phoneInput}
                                        onAccept={(value: string) => {
                                            handlePhoneChange(value)
                                        }}
                                        placeholder="+7 (___) ___-__-__"
                                        className="
                                            w-full 
                                            px-4 
                                            py-3 
                                            border 
                                            border-gray-300 
                                            rounded-lg 
                                            focus:ring-2 
                                            focus:ring-[#C4A484] 
                                            focus:border-transparent 
                                            outline-none 
                                            transition 
                                            font-mono
                                            cursor-pointer
                                        "
                                    />
                                    {errors.phone && phoneInput.length > 0 && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                    )}
                                </motion.div>

                                {/* Checkbox согласия */}
                                <motion.div 
                                    variants={fadeInLeft}
                                    transition={{ delay: 0.2 }}
                                    className="mb-8"
                                >
                                    <FormCheckbox
                                        label="Я соглашаюсь на обработку моих персональных данных в соответствии с политикой конфиденциальности"
                                        register={register('agreement')}
                                        error={errors.agreement}
                                    />
                                </motion.div>

                                {/* Кнопка */}
                                <motion.div 
                                    variants={fadeInLeft}
                                    transition={{ delay: 0.3 }}
                                >
                                    <SubmitButton isSubmitting={isSubmitting} />
                                </motion.div>
                            </motion.form>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Модальное окно успешной отправки */}
            <SuccessModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}