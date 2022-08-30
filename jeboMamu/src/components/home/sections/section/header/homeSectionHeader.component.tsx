import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import Avatar, {
  AvatarStyle,
} from '@/components/elements/Avatar/avatar.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'

export type HomeSectionHeaderProps = {
  iconName: string
  title: string
  description?: string
}

const HomeSectionHeader: FC<HomeSectionHeaderProps> = ({
  iconName,
  title,
  description,
}) => {
  const { t } = useTranslation('home')

  return (
    <div className="flex justify-between items-center bg-white text-gray-900 mb-4">
      <div className="flex justify-center items-center">
        <Avatar
          size={Sizes.lg}
          style={AvatarStyle.squareRounded}
          className="bg-blue-50"
          iconName={iconName}
        />
        <div className="ml-4">
          <h6 className="text-xl">{title}</h6>
          {description && (
            <div className="text-base text-gray-700 font-normal">
              {description}
            </div>
          )}
        </div>
      </div>
      <Button
        size={Sizes.base}
        style={ButtonStyle.solid}
        color={Colors.grey}
        label={t('show-all-label')}
        className="my-auto"
      />
    </div>
  )
}

export default HomeSectionHeader
