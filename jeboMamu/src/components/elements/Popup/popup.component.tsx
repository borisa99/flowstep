import React, { FC, useRef, useEffect, useCallback } from 'react'
import { motion, Variants } from 'framer-motion'
import PopupHeader from './header/popupHeader.component'
import { Alignments } from '@/components/types/aligment.types'
import Portal from '../Portal/portal.component'

interface Props {
  className?: string
  title?: string
  subtitle?: string
  headerAlignment?: Alignments
  separator?: boolean
  containerClassNames?: string
  modalClassNames?: string
  headerClassNames?: string
  hideClose?: boolean
  onClose: (event: React.MouseEvent<HTMLElement>) => void
}

const Popup: FC<Props> = ({
  children,
  title,
  subtitle,
  headerAlignment,
  separator,
  containerClassNames,
  modalClassNames,
  headerClassNames,
  hideClose = false,
  onClose,
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        return onClose(e)
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  const containerClasses = `fixed flex items-center justify-center shadow-default inset-0 z-10 ${containerClassNames}`
  const modalClasses = `bg-white rounded-4xl  overflow-y-auto ${modalClassNames}`

  const popupVariants: Variants = {
    hidden: {
      y: '100vh',
      transition: { ease: 'easeIn' },
    },
    visible: {
      y: 0,
      transition: {
        bounce: 0,
        duration: 0.3,
      },
    },
  }

  const backdropVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.6,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Portal>
      <div className={containerClasses}>
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute bg-black inset-0"
          onClick={onClose}
        />

        <motion.div
          className={modalClasses}
          role="dialog"
          ref={ref}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <PopupHeader
            onClose={onClose}
            title={title}
            subtitle={subtitle}
            alignment={headerAlignment}
            separator={separator}
            hideClose={hideClose}
            className={headerClassNames}
          />
          <div className="flex flex-col px-8 pb-8">{children}</div>
        </motion.div>
      </div>
    </Portal>
  )
}

export default Popup
