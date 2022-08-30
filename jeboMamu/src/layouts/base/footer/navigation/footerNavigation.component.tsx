import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const FooterNavigation = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-3 text-gray-800 cursor-default">
      <span className="text-gray-900 font-bold">{t('navigation-label')}</span>
      <Link href="/">{t('home-label')}</Link>
      <Link href="/discover">{t('discover-label')}</Link>
      <span>{t('saved-label')}</span>
      <Link href="/pricing">{t('pricing-label')}</Link>
      <span>{t('blog-label')}</span>
      <span>{t('help-label')}</span>
    </div>
  )
}

export default FooterNavigation
