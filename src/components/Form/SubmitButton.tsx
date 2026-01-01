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
        px-[clamp(16px,4vw,24px)] 
        py-[clamp(8px,3vw,16px)]
        rounded-lg 
        font-medium 
        hover:bg-[#C4A484]/90 
        transition-colors 
        duration-300 
        flex 
        items-center 
        justify-center 
        text-[clamp(14px,3.5vw,16px)]
        disabled:opacity-50 
        disabled:cursor-not-allowed
        cursor-pointer
        md:text-[clamp(15px,2vw,17px)]
        lg:text-[clamp(16px,2.5vw,18px)]
      "  
    >
      <span>{isSubmitting ? 'Отправляем...' : text}</span>
    </button>
  )
}