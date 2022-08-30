import { FC, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import PopupHeader from '@/components/elements/Popup/header/popupHeader.component'
import { Alignments } from '@/components/types/aligment.types'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { resetContent, selectActiveContent } from '@/redux/slices/auth.slice'

import { motion } from 'framer-motion'

const AuthLayout: FC = ({ children }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const contentName = useAppSelector(selectActiveContent)
  const { t } = useTranslation('common')

  const handleClose = useCallback(() => {
    router.push('/')
    setTimeout(() => {
      dispatch(resetContent())
    }, 1000)
  }, [router, dispatch])

  const handleEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        return handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [handleEscape])

  const variantsContainer = {
    hidden: {
      transform: 'translatey(5px)',
      opacity: 0.6,
    },
    visible: {
      opacity: 1,
      transform: 'translatey(0px)',
      transition: {
        duration: 0.5,
      },
    },
  }
  const variantsChilder = {
    hidden: {
      transform: 'translatey(5px)',
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transform: 'translatey(0px)',
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <div className="fixed flex items-center justify-center bg-black bg-opacity-50  shadow-default inset-0 z-10">
      <motion.div
        key={t(`${contentName}-title`)}
        initial="hidden"
        animate="visible"
        variants={variantsContainer}
        className="bg-white rounded-4xl !w-[424px]"
      >
        <PopupHeader
          onClose={handleClose}
          title={t(`${contentName}-title`)}
          subtitle={t(`${contentName}-subtitle`)}
          alignment={Alignments.center}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantsChilder}
        >
          <div className="flex flex-col px-8 pb-8">{children}</div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AuthLayout
