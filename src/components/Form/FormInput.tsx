'use client'

import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
  register: any
}

export default function FormInput({ 
  label, 
  error, 
  register, 
  ...props 
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...register}
        {...props}
        className={`w-full px-4 py-3 border rounded-lg outline-none transition
          ${error 
            ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-2 focus:ring-[#C4A484] focus:border-transparent'
          }`}
      />
      {error && (
        <p className="text-sm text-red-600">{error.message}</p>
      )}
    </div>
  )
}