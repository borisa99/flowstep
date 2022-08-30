import { useCallback, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { useTranslation } from 'next-i18next'

import Popup from '@/components/elements/Popup/popup.component'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  resetContent,
  selectActiveContent,
  selectIsOpen,
  setCurrentEmail,
  setIsOpen,
  switchContent,
} from '@/redux/slices/auth.slice'
import {
  components,
  ContentName,
} from '@/components/auth/popup/content/content'
import { Alignments } from '@/components/types/aligment.types'

const AuthPopup = () => {
  const isOpen = useAppSelector(selectIsOpen)
  const dispatch = useAppDispatch()
  const contentName = useAppSelector(selectActiveContent)
  const { t } = useTranslation(['common', 'auth'])

  const variantsContainer = useMemo(() => {
    return {
      hidden: {
        transform: 'translatey(5px)',
        opacity: 0.6,
        transition: {
          staggerChildren: 0.05,
          staggerDirection: -1,
        },
      },
      visible: {
        opacity: 1,
        transform: 'translatey(0px)',
        transition: {
          duration: 0.5,
          staggerChildren: 0.07,
          delayChildren: 0.2,
        },
      },
    }
  }, [])
  const variantsChildern = useMemo(() => {
    return {
      hidden: {
        transform: 'translatey(5px)',
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transform: 'translatey(0px)',
        transition: {
          duration: 0.5,
        },
      },
    }
  }, [])

  const ActiveContent = components[contentName as ContentName]

  const handleSwitchContent = (name: ContentName) => {
    dispatch(switchContent(name))
  }

  const handleClose = useCallback(() => {
    dispatch(resetContent())
    dispatch(setIsOpen(false))
    dispatch(setCurrentEmail(''))
  }, [dispatch])

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <Popup
          onClose={handleClose}
          title={t(`${contentName}-title`, { ns: 'auth' })}
          subtitle={t(`${contentName}-subtitle`, { ns: 'auth' })}
          headerAlignment={Alignments.center}
          modalClassNames="!w-[424px]"
        >
          <motion.div
            key={t(`${contentName}-title`)}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsContainer}
            className="bg-white rounded-4xl "
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsChildern}
            >
              <div className="flex flex-col gap-8">
                <ActiveContent
                  switchContent={handleSwitchContent}
                  close={handleClose}
                />
              </div>
            </motion.div>
          </motion.div>
        </Popup>
      )}
    </AnimatePresence>
  )
}

export default AuthPopup
