import { useTranslation } from 'next-i18next'

import LogoDark from '@/assets/images/svg/logo-dark.svg'
import Icon from '@/components/elements/Icon/icon.component'

const FooterInfo = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-5 text-gray-700 w-64">
      <div>
        <LogoDark className="mb-3" />
        <span className="whitespace-nowrap ">
          © 2022 Flowstep. {t('all-rights-reserved-label')}.
        </span>
      </div>
      <span>{t('footer-description')}</span>
      <div className="flex text-gray-700 gap-4 text-2xl">
        <Icon icon="Facebook" />
        <Icon icon="Instagram" />
        <Icon icon="Twitter" />
        <Icon icon="Pinterest" />
      </div>
    </div>
  )
}

export default FooterInfo
