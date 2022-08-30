import { getCurrentUser, setTokenCookies } from '@/apollo-client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  setCurrentEmail,
  setResetPassword,
  switchContent,
  selectCurrentEmail,
} from '@/redux/slices/auth.slice'
import { useCallback } from 'react'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const currentEmail = useAppSelector(selectCurrentEmail)

  const handleLogin = useCallback(
    async (token: string, refresh_token: string) => {
      setTokenCookies(token, refresh_token)
      await getCurrentUser()
    },
    []
  )

  const handleSetCurrentMail = (email: string) => {
    dispatch(setCurrentEmail(email))
  }
  const handleSetResetPassword = (email: string, ticket: string) => {
    dispatch(setResetPassword({ email, ticket }))
  }
  const handleSetPasswordContent = (email: string, ticket: string) => {
    dispatch(switchContent('SetPasswordContent'))
    handleSetResetPassword(email, ticket)
  }
  return {
    currentEmail,
    handleLogin,
    handleSetCurrentMail,
    handleSetPasswordContent,
  }
}

export default useAuth
