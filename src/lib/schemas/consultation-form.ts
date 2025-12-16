import * as z from 'zod'

export const consultationFormSchema = z.object({
    name: z.string()
        .min(2, 'Имя должно содержать минимум 2 символа')
        .max(50, 'Имя слишком длинное')
        .refine(value => /^[A-Za-zА-Яа-яЁё\s\-]+$/.test(value), {
            message: 'Имя должно содержать только буквы'
        }),
    phone: z.string()
  .min(1, 'Телефон обязателен')
  .refine((value) => {
    // Проверяем что введено хотя бы 10 цифр
    const digits = value.replace(/\D/g, '')
    return digits.length >= 10
  }, {
    message: 'Введите минимум 10 цифр'
  }),
    agreement: z.boolean().refine(val => val === true, {
        message: 'Необходимо согласие на обработку данных'
    })
})

export type ConsultationFormData = z.infer<typeof consultationFormSchema>