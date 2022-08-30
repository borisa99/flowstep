import useAuth from '@/hooks/use-auth/use-auth'
import { useAppDispatch } from '@/redux/hooks'
import { setIsOpen } from '@/redux/slices/auth.slice'
import { useRouter } from 'next/router'

import { useEffect } from 'react'

const ResetPassword = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { handleSetPasswordContent } = useAuth()

  useEffect(() => {
    if (!router.isReady) return
    else {
      const { email, ticket } = router.query

      if (email && ticket) {
        handleSetPasswordContent(email as string, ticket as string)
        dispatch(setIsOpen(true))
      }
    }
  }, [router, handleSetPasswordContent, dispatch])
  return <></>
}

ResetPassword.layout = 'Auth'
export default ResetPassword
