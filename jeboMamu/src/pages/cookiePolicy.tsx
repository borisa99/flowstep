import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import BackToTopButton from '@/components/elements/BackToTopButton/backToTopButton.component'
import FeedbackButton from '@/components/elements/FeedbackButton/feedbackButton.component'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['cookie-policy', 'common']
      )),
    },
  }
}

const CookiePolicy: NextPage = () => {
  const { t } = useTranslation('cookie-policy')

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <div className="w-128 m-auto">
        <div className="text-center py-8">
          <h3>{t('title')}</h3>
          <div className="text-base text-gray-700 pt-2">
            {t('updated-date')}
          </div>
        </div>
        <div>
          <div className="text-base text-gray-900 list-decimal">
            {t('intro-1')}
            <br />
            <br />
            {t('intro-2')}
            <br />
            <br />
            <h3 className="mb-2">{t('cookies-title')}</h3>
            {t('cookies-description-1')}
            <br />
            <br />
            {t('cookies-description-2')}
            <br />
            <br />
            <h3 className="mb-2">{t('cookies-usage-title')}</h3>
            {t('cookies-usage-description')}
            <br />
            <br />
            <h3 className="mb-2">{t('essential-cookies-title')}</h3>
            {t('essential-cookies-description')}
            <br />
            <br />
            <div>
              <strong>token, refresh_token</strong>{' '}
              {t('auth-cookies-description')}
            </div>
            <br />
            <h3 className="mb-2">{t('control-cookies-title')}</h3>
            {t('control-cookies-description-1')}
            <br />
            <br />
            {t('control-cookies-description-2')}
            <br />
            <br />
            <h3 className="mb-2">{t('update-cookie-policy-title')}</h3>
            {t('update-cookie-policy-description')}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-10 my-3 mx-0">
        <BackToTopButton className="ml-3" />
        <FeedbackButton />
      </div>
    </>
  )
}

CookiePolicy.activeLayout = 'Blank'
export default CookiePolicy
