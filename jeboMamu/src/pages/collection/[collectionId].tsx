import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'
import UploadHeader from '@/components/upload/header/uploadHeader.component'
import CollectionTabs from '@/components/collection/tabs/collectionTabs.component'

import { useCollectionQuery } from '@/graphql/generated'
import { useTranslation } from 'next-i18next'

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
        ['common', 'collection', 'screencast-player']
      )),
    },
  }
}

const CollectionPage = () => {
  const router = useRouter()
  const { t } = useTranslation('collection')

  const collectionId = router.query.collectionId

  const { data, loading } = useCollectionQuery({
    variables: { id: collectionId },
  })

  if (!loading && !data?.collections_by_pk) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      {loading && !data ? (
        <div className="flex justify-center items-center min-h-content">
          <Spinner size={Sizes.lg} />
        </div>
      ) : (
        <div className="mb-10">
          <UploadHeader />
          <CollectionTabs
            collectionFlows={data?.collections_by_pk?.collection_flows ?? []}
          />
        </div>
      )}
    </>
  )
}

export default CollectionPage
