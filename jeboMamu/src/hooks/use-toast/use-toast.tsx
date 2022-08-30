import { useContext } from 'react'

import { ToastsContext } from '@/components/elements/Toasts/context/toastsContext'

export const useToast = () => {
  const toastHelpers = useContext(ToastsContext)

  return toastHelpers
}
