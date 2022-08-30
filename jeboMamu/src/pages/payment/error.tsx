import { useEffect } from 'react'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useAppDispatch } from '@/redux/hooks'
import { setIsOpen, setJWT, switchContent } from '@/redux/slices/auth.slice'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['auth']
      )),
    },
  }
}
const ResetPassword = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!router.isReady) return
    else {
      const { token, refresh_token } = router.query

      if (token && refresh_token) {
        dispatch(
          setJWT({
            token: token.toString(),
            refresh_token: refresh_token.toString(),
          })
        )
        dispatch(switchContent('StripeErrorContent'))
        dispatch(setIsOpen(true))
      }
      router.push('/')
    }
  }, [router, dispatch])
  return <></>
}

export default ResetPassword
