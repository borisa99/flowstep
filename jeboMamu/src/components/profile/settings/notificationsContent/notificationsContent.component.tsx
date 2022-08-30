import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

const NotificationsContent = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col">
      <div className="mt-8 flex items-center gap-3">
        <input type="checkbox" id="flowstep-communication" />
        <label htmlFor="flowstep-communication" className="cursor-pointer">
          {t('send-flowstep-communication-label')}
        </label>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <input type="checkbox" id="flowstep-newsletter" />
        <label htmlFor="flowstep-newsletter" className="cursor-pointer">
          {t('subscribe-to-flowstep-newsletter-label')}
        </label>
      </div>

      <div className="pt-8">
        <Button
          label={t('update-notifications-actions')}
          size={Sizes.m}
          color={Colors.blue}
          style={ButtonStyle.solid}
          full
        />
      </div>
    </div>
  )
}

export default NotificationsContent
