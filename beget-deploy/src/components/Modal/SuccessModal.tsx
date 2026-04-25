'use client'

import { motion } from 'framer-motion'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed 
        inset-0 
        z-50 
        flex 
        items-center 
        justify-center 
        bg-black/50 
        backdrop-blur-sm
        p-4
      "
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        className="
          relative 
          bg-white 
          rounded-2xl 
          shadow-2xl 
          max-w-md 
          w-full 
          p-8
        "
      >
        {/* Кнопка закрытия */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="
            absolute 
            top-4 
            right-4 
            text-gray-400 
            hover:text-gray-600 
            transition-colors
            cursor-pointer
          "
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
        
        {/* Иконка успеха */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.1,
            type: "spring",
            stiffness: 200
          }}
          className="
            flex 
            justify-center 
            mb-6
          "
        >
          <div className="
            w-16 
            h-16 
            bg-green-100 
            rounded-full 
            flex 
            items-center 
            justify-center
          ">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>
        
        {/* Заголовок */}
        <motion.h3 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-2xl 
            font-bold 
            text-center 
            text-gray-900 
            mb-4
          "
        >
          Заявка отправлена!
        </motion.h3>
        
        {/* Текст */}
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            text-gray-600 
            text-center 
            mb-6
          "
        >
          Спасибо за вашу заявку! Я свяжусь с вами в течение 24 часов 
          для уточнения деталей и назначения времени консультации.
        </motion.p>
        
        {/* Дополнительная информация */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            bg-gray-50 
            rounded-lg 
            p-4 
            mb-6
          "
        >
          <p className="
            text-sm 
            text-gray-500 
            text-center
          ">
            Проверьте указанные контактные данные. 
            Если вы не получите ответ в течение суток, 
            свяжитесь со мной напрямую.
          </p>
        </motion.div>
        
        {/* Кнопка закрытия */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="
              bg-[#C4A484] 
              hover:bg-[#B89464] 
              text-white 
              font-semibold 
              px-8 
              py-3 
              rounded-lg 
              transition-colors 
              duration-300
              cursor-pointer
            "
          >
            Понятно
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}