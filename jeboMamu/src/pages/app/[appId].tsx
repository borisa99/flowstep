import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectAppContentCounts, setApp } from '@/redux/slices/app.slice'

import { Sizes } from '@/components/types/sizes.types'
import Spinner from '@/components/elements/Spinner/spinner.component'
import DirectionButton from '@/components/elements/DirectionButton/directionButton.component'
import FeedbackButton from '@/components/elements/FeedbackButton/feedbackButton.component'
import BackToTopButton from '@/components/elements/BackToTopButton/backToTopButton.component'
import AppHeader from '@/components/app/header/appHeader.component'
import AppTabs from '@/components/app/tabs/appTabs.component'

import { useAppByIdLazyQuery } from '@/graphql/generated'
// import useClientQueryParams from '@/hooks/use-client-query-params/use-client-query-params.hook'

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['common', 'app', 'auth', 'screencast-player']
      )),
    },
  }
}
const AppPage: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const appTitle = useAppSelector((state) => state.app.app?.title)
  const appContentCounts = useAppSelector(selectAppContentCounts)
  const { appId, tab } = router.query

  const [getAppById, { loading }] = useAppByIdLazyQuery({
    onCompleted: (data) => {
      if (data.flows_by_pk?.is_draft) {
        router.push('/')
      } else if (data.flows_by_pk) {
        dispatch(setApp(data.flows_by_pk))
      }
    },
    onError: () => router.push('/'),
  })

  useEffect(() => {
    if (appId) {
      getAppById({ variables: { id: appId.toString() } })
    }
  }, [appId, getAppById])

  // const { setParam } = useClientQueryParams(router)
  // const tabChangeHandler = (tab: string) => {
  //   setParam('tab', tab)
  // }

  // useEffect(() => {
  //   const allowedTabs = ['screencasts', 'screenshots', 'attachments']
  //   if (!allowedTabs.includes(tab as string)) {
  //     setParam('tab', allowedTabs[0])
  //   }
  // }, [setParam, tab])

  return (
    <>
      <Head>
        <title>{`Flowstep - ${appTitle ?? 'App'}`}</title>
      </Head>
      {loading ? (
        <Spinner size={Sizes.base} />
      ) : (
        <>
          <div className="h-16">
            <DirectionButton
              direction="left"
              onClick={() => router.back()}
              className="absolute top-3 left-3 ml-[calc((100vw/2_-_1040px/2)*(-1))]"
            />
          </div>
          <>
            <AppHeader />
            <AppTabs
              tabCounts={appContentCounts}
              defaultTabKey={tab as string | undefined}
            />
            {/* onChange={tabChangeHandler} */}
          </>
          <div className="flex justify-between items-center h-10 my-3 mx-[calc((100vw/2_-_1040px/2)*(-1))]">
            <BackToTopButton className="ml-3" />
            <FeedbackButton />
          </div>
        </>
      )}
    </>
  )
}

export default AppPage
