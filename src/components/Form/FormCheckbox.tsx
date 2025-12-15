'use client'

import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
  register: any
}

export default function FormCheckbox({ 
  label, 
  error, 
  register, 
  ...props 
}: FormCheckboxProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          type="checkbox"
          {...register}
          {...props}
          className="mt-1 w-4 h-4 text-[#C4A484] border-gray-300 rounded focus:ring-[#C4A484]"
        />
        <span className="text-sm text-gray-600">{label}</span>
      </label>
      {error && (
        <p className="text-sm text-red-600">{error.message}</p>
      )}
    </div>
  )
}