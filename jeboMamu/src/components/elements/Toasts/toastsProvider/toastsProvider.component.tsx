import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'

import { timeout } from '@/utils/expirations'

import { ToastsContext } from '../context/toastsContext'

import Toast, { ToastProps } from '../toast/toast.component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastsProvider = ({ children }: { children: any }) => {
  const [toasts, setToasts] = useState([] as ToastProps[])
  const [mounted, setMounted] = useState<boolean>(false)

  const addToast = useCallback(
    (toast) => {
      if (
        toasts.findIndex(
          (t) => t.title === toast.title && t.style === toast.style
        ) < 0
      ) {
        const updatedToasts = [...toasts, toast]
        setToasts(updatedToasts)
      }
      return null
    },
    [toasts]
  )

  const removeToast = useCallback(
    (toast) => {
      setToasts(
        toasts.filter((t) => t.title !== toast.title || t.style !== toast.style)
      )
      return null
    },
    [toasts]
  )

  useEffect(() => {
    setMounted(true)

    if (toasts[0]) {
      const timer = setTimeout(() => {
        removeToast(toasts[0])
      }, timeout(toasts[0].title.replaceAll(' ', '').length)) // delay

      return () => {
        clearTimeout(timer)
      }
    }

    return () => setMounted(false)
  }, [removeToast, toasts])

  return mounted ? (
    <ToastsContext.Provider value={{ toasts, addToast, removeToast }}>
      {createPortal(
        <div className="fixed bottom-0 left-[calc((100vw/2_-_512px/2))] z-20">
          <AnimatePresence>
            {toasts.map((toast) => (
              <Toast
                key={`${toast.style}-${toast.title}`}
                style={toast.style}
                title={toast.title}
                className={toast.className}
              />
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
      {children}
    </ToastsContext.Provider>
  ) : null
}

export default ToastsProvider
