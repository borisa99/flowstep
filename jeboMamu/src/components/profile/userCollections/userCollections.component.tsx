import { FC } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import UserListPlaceholder from '../userListPlaceholder/userListPlaceholder.component'
import { CollectionAppCardFragment } from '@/graphql/generated'
import AppCard from '@/components/elements/AppCard/appCard.component'
import { Sizes } from '@/components/types/sizes.types'
import { AvatarStyle } from '@/components/elements/Avatar/avatar.component'

type Props = {
  collections: CollectionAppCardFragment[]
}
const UserCollections: FC<Props> = ({ collections }) => {
  const router = useRouter()

  const { t } = useTranslation('profile')

  const navigateToDiscover = () => {
    router.push('/discover')
  }

  if (collections.length === 0) {
    return (
      <UserListPlaceholder
        title={t('create-first-collection-title')}
        description={t('create-collection-description')}
        iconName="Globe"
        btnLabel="Go discover"
        btnCallback={navigateToDiscover}
      />
    )
  }
  return (
    <div className="app-grid">
      {collections.map((app) => (
        <AppCard
          key={app.id}
          id={app.id}
          size={Sizes.base}
          premium={true}
          isCollection={true}
          flowAvatarBackgroundColor={app.avatar_backgorund_color as string}
          flowAvatarUrl={app.avatar_url}
          screencastBannerURL={
            app.collection_flows[0].flow_screencast.banner_url
          }
          avatarCard={{
            size: Sizes.base,
            description: app.collection_visibility_value,
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
  )
}

export default UserCollections
