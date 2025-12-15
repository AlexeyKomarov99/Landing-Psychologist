'use client'

interface SubmitButtonProps {
  isSubmitting: boolean
  text?: string
}

export default function SubmitButton({ 
  isSubmitting, 
  text = 'Записаться на пробную консультацию' 
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="
        w-full 
        bg-[#C4A484] 
        text-white 
        py-4 
        px-6 
        rounded-lg 
        font-medium 
        hover:bg-[#C4A484]/90 
        transition-colors 
        duration-300 
        flex 
        items-center 
        justify-center 
        text-base 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        cursor-pointer"
    >
      <span>{isSubmitting ? 'Отправляем...' : text}</span>
    </button>
  )
}