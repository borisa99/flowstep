// import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useAppSelector } from '@/redux/hooks'
import { selectUserId } from '@/redux/slices/auth.slice'

import TabsContainer from '@/components/elements/Tabs/tabsContainer/tabsContainer.component'
import TabsHeader from '@/components/elements/Tabs/tabsHeader/tabsHeader.component'
import Tab from '@/components/elements/Tabs/tab/tab.component'
import TabContent from '@/components/elements/Tabs/tabContent/tabContent.component'
import ProfileHeader from '@/components/profile/profileHeader/profileHeader.component'
import UserUploads from '@/components/profile/userUploads/userUploads.component'
import UserCollections from '@/components/profile/userCollections/userCollections.component'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'
import UserLikedItems from '@/components/profile/userLikedItems/userLikedItems.component'

import { useUserProfileQuery } from '@/graphql/generated'
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
        ['profile', 'common']
      )),
    },
  }
}

const ProfilePage: NextPage = () => {
  const { t } = useTranslation('profile')

  const router = useRouter()
  const currentUserId = useAppSelector(selectUserId)
  const { userId, tab } = router.query
  const isCurrentUser = currentUserId === userId

  const { data, loading } = useUserProfileQuery({
    variables: {
      id: userId,
    },
  })
  // const { setParam } = useClientQueryParams(router)
  // const tabChangeHandler = (tab: string) => {
  //   setParam('tab', tab)
  // }

  // useEffect(() => {
  //   const allowedTabs = ['uploads', 'collections', 'liked']
  //   if (!allowedTabs.includes(tab as string)) {
  //     setParam('tab', allowedTabs[0])
  //   }
  // }, [setParam, tab])

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      {loading ? (
        <div className="flex justify-center items-center min-h-content">
          <Spinner size={Sizes.lg} />
        </div>
      ) : data?.user ? (
        <>
          <ProfileHeader user={data.user} isCurrentUser={isCurrentUser} />
          <TabsContainer defaultTabKey={(tab as string) ?? 'uploads'}>
            {/* onChange={tabChangeHandler} */}
            <TabsHeader>
              <Tab
                tabKey="uploads"
                label={t('original-uploads-tab')}
                number={data.uploads.length}
              />
              <Tab
                tabKey="collections"
                label={t('collections-tab')}
                number={data.collections.length}
              />
              <Tab
                tabKey="liked"
                label={t('liked-tab')}
                number={data.likes.length}
              />
            </TabsHeader>
            <TabContent tabKey="uploads">
              <UserUploads
                userId={currentUserId}
                uploads={data.uploads}
                isCurrentUser={isCurrentUser}
              />
            </TabContent>
            <TabContent tabKey="collections">
              <UserCollections collections={data.collections} />
            </TabContent>
            <TabContent tabKey="liked">
              <UserLikedItems likes={data.likes} />
            </TabContent>
          </TabsContainer>
        </>
      ) : (
        <ErrorPage statusCode={404} />
      )}
    </>
  )
}

export default ProfilePage
