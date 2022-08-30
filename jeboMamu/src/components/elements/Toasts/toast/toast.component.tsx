import React, { FC, useRef, useMemo } from 'react'

import { motion } from 'framer-motion'

export enum ToastStyle {
  info = 'info',
  error = 'error',
  success = 'success',
}

export interface ToastProps {
  style: ToastStyle
  title: string
  className?: string
}

const Toast: FC<ToastProps> = ({ style, title, className }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const toastColors: { [key in ToastStyle]: string } = {
    info: 'bg-gray-900 text-white',
    error: 'bg-critical text-white',
    success: 'bg-gray-900 text-white',
  }

  const toastColorClasses = toastColors[style]

  const variants = useMemo(() => {
    return {
      hidden: {
        transform: 'translatey(48px)',
        opacity: 0.5,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
      visible: {
        opacity: 1,
        transform: 'translatey(0px)',
        transition: {
          duration: 0.2,
          ease: 'easeIn',
        },
      },
      exit: {
        opacity: 0.5,
        transform: 'translatey(48px)',
        transition: {
          duration: 0.2,
          ease: 'easeIn',
        },
      },
    }
  }, [])

  return (
    <motion.div
      className={`rounded-lg z-20 text-base p-3 mb-4 max-w-lg w-128 text-left ${toastColorClasses} ${className}`}
      role="dialog"
      ref={ref}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      {title}
    </motion.div>
  )
}

export default Toast
