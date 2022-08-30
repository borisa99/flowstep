import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const FooterPlatfom = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-3 text-gray-800 cursor-default">
      <span className="text-gray-900 font-bold">{t('platform-label')}</span>
      <span>{t('contacts-label')}</span>
      <span>{t('media-kit-label')}</span>
      <Link href={'/termsAndConditions'}>
        {t('terms-and-conditions-label')}
      </Link>
      <Link href={'/cookiePolicy'}>{t('privacy-policy-label')}</Link>
    </div>
  )
}

export default FooterPlatfom
