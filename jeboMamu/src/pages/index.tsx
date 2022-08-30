import { useEffect } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectUser,
  setCurrentEmail,
  setIsOpen,
} from '@/redux/slices/auth.slice'

import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HomeFeatureLayout from '@/components/home/featured/homeFeaturedLayout.component'
import HomeSection from '@/components/home/sections/section/homeSection.component'
import FeedbackButton from '@/components/elements/FeedbackButton/feedbackButton.component'
import BackToTopButton from '@/components/elements/BackToTopButton/backToTopButton.component'

import { refreshTokenExpiration, tokenExpiration } from '@/utils/expirations'
import { useHomepageDataQuery } from '@/graphql/generated'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'

interface Props {
  error: string | string[] | null
  screencast: string | string[] | null
  _nextI18Next: {
    initialI18nStore: unknown
    initialLocale: string
    userConfig: UserConfig | null
  }
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { token, refresh_token, error, screencast } = context.query
  if (token && refresh_token) {
    context.res.setHeader('set-cookie', [
      `token=${token}; path=/; max-age=${tokenExpiration};`,
      `refresh_token=${refresh_token}; path=/; max-age=${refreshTokenExpiration};`,
    ])
  }
  const props: Props = {
    error: error ?? null,
    screencast: screencast ?? null,
    ...(await serverSideTranslations(
      context.locale || context.defaultLocale || 'en',
      ['common', 'home', 'auth', 'screencast-player']
    )),
  }
  return {
    props,
  }
}
const Home: NextPage<Props> = ({ error, screencast }) => {
  const router = useRouter()
  const { t } = useTranslation('home')

  const { loading, data } = useHomepageDataQuery({
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    router.replace('/', undefined, { shallow: true })

    if (error) {
      setTimeout(() => {
        alert(error)
      }, 500)
    } else if (screencast) {
      setTimeout(() => {
        const screencastDiv = document.querySelector<HTMLDivElement>(
          `.${screencast}`
        )
        screencastDiv?.click()
      }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  const headerMock = {
    title: t('staff-pick-header-title'),
    description: t('staff-pick-description'),
    iconName: 'Heart',
  }

  function handleSignUp(email: string) {
    dispatch(setCurrentEmail(email))
    dispatch(setIsOpen(true))
  }

  return (
    <div>
      <Head>
        <title>Flowstep</title>
      </Head>
      <HomeFeatureLayout
        isAuthenticated={!!user}
        latestCount={!!user ? 12 : undefined}
        signup={handleSignUp}
      />
      <div className="flex flex-col">
        {loading ? (
          <Spinner size={Sizes.lg} />
        ) : (
          <>
            {/* Apps */}
            <HomeSection header={headerMock} flows={data?.flows} />
            {/* Screncasts */}
            <HomeSection header={headerMock} screeencasts={data?.screencasts} />
          </>
        )}
      </div>
      <div className="flex justify-between items-center h-10 my-3 mx-[calc((100vw/2_-_1040px/2)*(-1))]">
        <BackToTopButton className="ml-3" />
        <FeedbackButton />
      </div>
    </div>
  )
}

Home.activeLayout = 'Base'

export default Home
