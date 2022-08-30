import Head from 'next/head'
import { useRouter } from 'next/router'

import { attachmentMock } from '@/components/flowContent/attachmentViewer/mocks'
import AttachmentViewer from '@/components/flowContent/attachmentViewer/attchmentViewer.component'
import { useTranslation } from 'next-i18next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
        ['common', 'attachment']
      )),
    },
  }
}

const AttachmentPage = () => {
  const router = useRouter()
  const { t } = useTranslation('attachment')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { screenId } = router.query // TODO: Use to fetch screenshot info

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <AttachmentViewer
        show={true}
        onClose={() => router.back()}
        attachment={attachmentMock}
      />
    </>
  )
}

export default AttachmentPage
