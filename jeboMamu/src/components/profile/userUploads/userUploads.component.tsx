import { FC } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AppFragment } from '@/graphql/generated'

import AppCard from '@/components/elements/AppCard/appCard.component'
import { Sizes } from '@/components/types/sizes.types'
import { AvatarStyle } from '@/components/elements/Avatar/avatar.component'

import PublicIcon from '@/assets/images/svg/public.svg'
import PrivateIcon from '@/assets/images/svg/private.svg'

import UserListPlaceholder from '../userListPlaceholder/userListPlaceholder.component'

type Props = {
  userId: string
  uploads: AppFragment[]
  isCurrentUser: boolean
}
const UserUploads: FC<Props> = ({ userId, uploads, isCurrentUser }) => {
  const router = useRouter()

  const { t } = useTranslation('profile')

  const navigateToUpload = () => {
    router.push('/upload')
  }

  return (
    <>
      {uploads.length === 0 ? (
        isCurrentUser ? (
          <UserListPlaceholder
            title={t('create-first-upload-title')}
            description={t('create-upload-description')}
            iconName="Add"
            btnLabel={t('create-action')}
            btnCallback={navigateToUpload}
          />
        ) : (
          <UserListPlaceholder
            title="No original uploads yet" // ADD TRANSLATION
            description="This user has not uploaded any original work" // ADD TRANSLATION
            iconName="Cross" // ADD TRANSLATION
          />
        )
      ) : (
        <div className="app-grid">
          {uploads.map((app) => (
            <AppCard
              key={app.id}
              id={app.id}
              size={Sizes.base}
              premium={true}
              flowAvatarBackgroundColor={app.avatar_background_color as string}
              flowAvatarUrl={app.avatar_url}
              screencastBannerURL={app.flow_screencasts[0].banner_url}
              isDraft={app.is_draft}
              avatarCard={{
                size: Sizes.base,
                description: (
                  <>
                    {app.user_id === userId ? (
                      <div className="flex">
                        <span className="mr-1">
                          {app.is_draft ? 'Private' : 'Public'}
                        </span>
                        {app.is_draft ? <PrivateIcon /> : <PublicIcon />}
                      </div>
                    ) : (
                      app.flow_app_info?.category
                    )}
                  </>
                ),
                flowTitle: app.title,
                avatar: {
                  style: AvatarStyle.square,
                  size: Sizes.base,
                  iconUrl: app.avatar_url,
                },
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default UserUploads
