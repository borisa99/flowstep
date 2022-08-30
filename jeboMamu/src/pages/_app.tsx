import '../styles/globals.css'
import '../styles/icomoon-v1.0/style.css'

import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import type { NextComponentType } from 'next'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'

import { appWithTranslation } from 'next-i18next'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'

import { Provider } from 'react-redux'
import { store } from '@/redux/store'

import { ApolloProvider } from '@apollo/client'
import { client, getCurrentUser } from '../apollo-client'

import { LayoutName, Layouts } from '@/layouts'
import ToastsProvider from '@/components/elements/Toasts/toastsProvider/toastsProvider.component'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'
import { publicRoutes } from '@/utils/publicRoutes'
import { colors } from '@/utils/colors'

const consentCookieName = 'cookies_consent'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
  router,
}: AppLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const cookiesConsent = getCookieConsentValue(consentCookieName)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        await getCurrentUser()
      } catch {
        if (!publicRoutes.includes(router.pathname)) {
          router.push('/')
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchCurrentUser()
  }, [router])

  const CurrentLayout =
    Layouts[(Component.activeLayout as LayoutName) ?? 'Base'] ?? Layouts.Base
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <CurrentLayout>{page}</CurrentLayout>)

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ToastsProvider>
          {getLayout(
            isLoading ? (
              <div className="flex justify-center items-center h-screen w-screen">
                <Spinner size={Sizes.base} />
              </div>
            ) : (
              <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter>
                  <m.div
                    key={router.route}
                    className="page-wrap"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      initial: {
                        opacity: 0,
                        transform: ' translateX(100%)',
                      },
                      animate: {
                        opacity: 1,
                        transform: 'translateX(0%)',
                      },
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <Component {...pageProps} />
                  </m.div>
                </AnimatePresence>
              </LazyMotion>
            )
          )}
          <div id="portal-container" />
          {!cookiesConsent && (
            <CookieConsent
              location="bottom"
              cookieName={consentCookieName}
              cookieValue={true}
              overlay
              style={{
                backgroundColor: colors.primary,
              }}
              buttonStyle={{
                backgroundColor: colors.white,
                padding: '0.5rem 1rem',
                color: colors.primary,
                borderRadius: '0.5rem',
                fontWeight: '600',
              }}
              buttonText="Accept"
            >
              We use cookies to offer you a great experience. By continuing to
              use this website, you consent to the use of cookies in accordance
              with our{' '}
              <Link href="/cookiePolicy" passHref>
                <span className="cursor-pointer underline">Cookie Policy</span>
              </Link>
              .
            </CookieConsent>
          )}
        </ToastsProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default appWithTranslation(MyApp)
