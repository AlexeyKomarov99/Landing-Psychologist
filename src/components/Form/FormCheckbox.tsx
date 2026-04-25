'use client'

import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode
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
          className="
            mt-[clamp(2px,0.5vh,4px)] 
            w-[clamp(16px,3.5vw,20px)]
            h-[clamp(16px,3.5vw,20px)]
            min-w-4
            min-h-4
            aspect-square
            text-[#C4A484] 
            border-gray-300 
            rounded 
            focus:ring-[#C4A484]
            shrink-0
          "
        />
        <span className="
          text-[clamp(14px,2.5vw,15px)]
          text-gray-500
        ">{label}</span>
      </label>
      {error && (
        <p className="text-[clamp(12px,2.5vw,14px)] text-red-600">{error.message}</p>
      )}
    </div>
  )
}