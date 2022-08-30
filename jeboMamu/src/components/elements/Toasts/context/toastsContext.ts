import { createContext } from 'react'

import { ToastProps } from '../toast/toast.component'

interface ToastContext {
  toasts: ToastProps[]
  addToast: (toast: ToastProps) => null | ToastProps[]
  removeToast: (toast: ToastProps) => null
}

const initialState: ToastContext = {
  toasts: [],
  addToast: () => null,
  removeToast: () => null,
}

export const ToastsContext = createContext(initialState)
