'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { consultationFormSchema, ConsultationFormData } from '@/lib/schemas/consultation-form'
import FormCheckbox from '../Form/FormCheckbox'
import SubmitButton from '../Form/SubmitButton'
import { IMaskInput } from 'react-imask'

export default function ConsultationForm() {
    
    const [phoneInput, setPhoneInput] = useState('')
  
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
        // Отправка на сервер...
        reset()
        setPhoneInput('')
    }

    const handlePhoneChange = (value: string) => {
        setPhoneInput(value)
        setValue('phone', value, { shouldValidate: false }) // Сначала не валидируем
        
        // Валидируем только если введено достаточно символов
        if (value.replace(/\D/g, '').length >= 10) {
            setValue('phone', value, { shouldValidate: true })
            trigger('phone')
        }
    }

    return (
        <section
            id="consultation"
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
                    {/* Текст */}
                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        mb-10
                    ">
                        <h2 className="
                            text-[26px]
                            mb-10
                            md:mb-12 md:text-[32px]
                            lg:text-[38px]
                        ">Начните меняться уже сегодня!</h2>
                        <span className="
                            text-center
                        ">Запишитесь на вводную консультацию. Мы исследуем ваш запрос, и вы получите ясный план развития вашего личного потенциала.</span>
                    </div>

                    {/* Форма обратной связи */}
                    <div className="
                        w-full
                        max-w-md
                        md:max-w-lg 
                        lg:max-w-2xl
                    ">
                        <form 
                            onSubmit={handleSubmit(onSubmit)} 
                            className="
                                bg-(--color-bg-main) 
                                rounded-2xl 
                                shadow-lg 
                                p-6 
                                md:p-8 
                                lg:p-10"
                        >
                            {/* Имя и фамилия */}
                            <div className="mb-6">
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
                            </div>

                            {/* Телефон с маской */}
                            {/* <div className="mb-6">
                                <label className="
                                    block 
                                    text-sm 
                                    font-medium 
                                    text-(--color-title) 
                                    mb-2">
                                    Телефон *
                                </label>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onKeyDown={handlePhoneKeyDown}
                                    onFocus={handlePhoneFocus}
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
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                )}
                            </div> */}

                            {/* Телефон с маской */}
                            <div className="mb-6">
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
                            </div>

                            {/* Checkbox согласия */}
                            <div className="mb-8">
                                <FormCheckbox
                                    label="Я соглашаюсь на обработку моих персональных данных в соответствии с политикой конфиденциальности"
                                    register={register('agreement')}
                                    error={errors.agreement}
                                />
                            </div>

                            {/* Кнопка */}
                            <SubmitButton isSubmitting={isSubmitting} />
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}