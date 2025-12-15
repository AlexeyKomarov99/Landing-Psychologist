import * as z from 'zod'

export const consultationFormSchema = z.object({
    name: z.string()
        .min(2, 'Имя должно содержать минимум 2 символа')
        .max(50, 'Имя слишком длинное'),
    phone: z.string()
        .min(18, 'Введите корректный номер телефона') // +7 (999) 123-45-67 = 18 символов
        .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Формат: +7 (999) 123-45-67'),
    agreement: z.boolean().refine(val => val === true, {
        message: 'Необходимо согласие на обработку данных'
    })
})

export type ConsultationFormData = z.infer<typeof consultationFormSchema>