'use client'

import { useState, useCallback } from 'react'

export const usePhoneMask = () => {
  const [phone, setPhone] = useState('+7 (___) ___-__-__')

  const formatPhone = (value: string): string => {
    let digits = value.replace(/\D/g, '')
    
    if (!digits.startsWith('7')) {
      digits = '7' + digits
    }
    
    digits = digits.substring(0, 11)
    
    const match = digits.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/)
    
    if (!match) return '+7 (___) ___-__-__'
    
    const [, code, a, b, c, d] = match
    
    let result = `+${code}`
    if (a) result += ` (${a}`
    if (b) result += `) ${b}`
    if (c) result += `-${c}`
    if (d) result += `-${d}`
    
    // Добавляем плейсхолдеры
    result += '_'.repeat(18 - result.length)
    
    return result
  }

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setPhone(formatPhone(value))
  }, [])

  return { phone, handlePhoneChange, setPhone }
}