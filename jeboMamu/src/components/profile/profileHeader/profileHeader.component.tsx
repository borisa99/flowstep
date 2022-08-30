import { FC, useState } from 'react'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Icon from '@/components/elements/Icon/icon.component'
import { format } from 'date-fns'
import Tag, { TagStyle } from '@/components/elements/Tag/tag.component'
import { ProfileFragment } from '@/graphql/generated'
import SharePopup from '@/components/flowContent/sharePopup/sharePopup.component'
import { ContentType } from '@/components/types/content.types'
import { setShowSettingsPopup } from '@/redux/slices/ui/ui.slice'
import { useAppDispatch } from '@/redux/hooks'

interface Props {
  user: ProfileFragment
  isCurrentUser: boolean
}

const ProfileHeader: FC<Props> = ({
  user: { avatar_url, first_name, last_name, created_at, is_premium },
  isCurrentUser,
}) => {
  const dispatch = useAppDispatch()
  const [avatarSrc, setAvatarSrc] = useState(avatar_url)
  const [showShare, setShowShare] = useState(false)

  const { t } = useTranslation('profile')

  return (
    <div className="flex h-[12rem] items-center">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        {avatarSrc ? (
          <Image
            layout="fill"
            src={avatarSrc}
            alt="Avatar"
            onError={() => setAvatarSrc(undefined)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-100 rounded-full">
            <Icon icon="User" />
          </div>
        )}
      </div>
      <div className="ml-6">
        <div className="flex items-center gap-2">
          <h5>
            {first_name && first_name} {last_name && last_name}{' '}
            {isCurrentUser && t('you-word')}
          </h5>
          {is_premium && (
            <Tag
              color={Colors.orange}
              style={TagStyle.light}
              size={Sizes.base}
              iconName="Diamond"
              label={t('pro-label')}
            />
          )}
        </div>

        <div className="text-gray-700">
          {t('member-since-label')} {format(new Date(created_at), 'LLL yyyy')}
          <span className="mx-2">&middot;</span>
          Talin, Estonia
        </div>
      </div>
      <div className="flex-grow" />
      <Button
        label={t('share-action')}
        style={ButtonStyle.solid}
        color={Colors.grey}
        size={Sizes.base}
        iconName="Share-box"
        onClick={() => setShowShare(true)}
      />
      {isCurrentUser && (
        <Button
          className="ml-3"
          label={t('edit-profile-action')}
          style={ButtonStyle.solid}
          color={Colors.blue}
          size={Sizes.base}
          onClick={() => dispatch(setShowSettingsPopup(true))}
        />
      )}
      {showShare && (
        <SharePopup
          type={ContentType.profile}
          onClose={() => setShowShare(false)}
        />
      )}
    </div>
  )
}

export default ProfileHeader
