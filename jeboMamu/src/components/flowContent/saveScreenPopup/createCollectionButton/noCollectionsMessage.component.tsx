import { useTranslation } from 'next-i18next'

import { Sizes } from '@/components/types/sizes.types'
import Avatar, {
  AvatarStyle,
} from '@/components/elements/Avatar/avatar.component'

const NoCollectionsMessage = () => {
  const { t } = useTranslation('screencast-player')

  return (
    <div>
      <Avatar
        size={Sizes.lg}
        style={AvatarStyle.circle}
        className="bg-blue-100 p-3 m-auto"
        iconUrl="/images/sparkles.png"
      />
      <div className="text-gray-900 text-base text-center font-bold mt-4">
        {t('you-have-no-collections-yet-msg')}
      </div>
      <div className="text-gray-700 text-sm text-center mb-2">
        {t('type-to-create-first-collection-msg')}
      </div>
    </div>
  )
}
export default NoCollectionsMessage
