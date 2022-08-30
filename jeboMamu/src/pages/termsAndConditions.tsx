import Head from 'next/head'
import BackToTopButton from '@/components/elements/BackToTopButton/backToTopButton.component'
import FeedbackButton from '@/components/elements/FeedbackButton/feedbackButton.component'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['terms-and-conditions', 'common', 'auth']
      )),
    },
  }
}
const TermsAndConditions: NextPage = () => {
  const { t } = useTranslation('terms-and-conditions')

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <div className="w-128 m-auto cursor-default">
        <div className="text-center py-8">
          <h3>{t('title')}</h3>
          <div className="text-base text-gray-700 pt-2"></div>
        </div>
        <ol className="text-base text-gray-900 list-decimal" type="1">
          <li key={'term-1'}>{t('term-1')}</li>
          <br />
          <li key={'term-2'}>{t('term-2')}</li>
          <br />
          <li key={'term-3'}>
            {t('term-3')}
            <ol type="a" className="ml-6" style={{ listStyle: 'lower-alpha' }}>
              <li key={'term-3.1'}>{t('term-3.1')}</li>
              <li key={'term-3.2'}>{t('term-3.2')}</li>
              <li key={'term-3.3'}>{t('term-3.3')}</li>
            </ol>
          </li>
          <br />
          <li key={'term-4'}>{t('term-4')}</li>
        </ol>
      </div>
      <div className="flex justify-between items-center h-10 my-3 mx-0">
        <BackToTopButton className="ml-3" />
        <FeedbackButton />
      </div>
    </>
  )
}

TermsAndConditions.activeLayout = 'Blank'
export default TermsAndConditions
