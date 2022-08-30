import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import FeedbackButton from '@/components/elements/FeedbackButton/feedbackButton.component'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['not-found-404', 'common']
      )),
    },
  }
}
const Custom404: NextPage = () => {
  const { t } = useTranslation('not-found-404')

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <div className="grow min-h-content flex flex-col justify-center items-center text-gray-900">
        <h3>{t('title')}</h3>
        <div className="text-gray-700 text-base">{t('description')}</div>
        <Button
          className="mt-10"
          style={ButtonStyle.solid}
          label={t('go-home-action')}
          color={Colors.blue}
          size={Sizes.base}
          link="/"
        />
      </div>
      <div className="flex justify-between items-center h-10 mt-auto mb-3">
        <FeedbackButton />
      </div>
    </>
  )
}

export default Custom404
