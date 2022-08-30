import { FC } from 'react'
import { Sizes } from '@/components/types/sizes.types'
import AppCard from '@/components/elements/AppCard/appCard.component'
import { AvatarStyle } from '@/components/elements/Avatar/avatar.component'

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[] // TODO: Une interface
}

const AppCardGrid: FC<Props> = (props) => {
  const { items } = props

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((app, i) => (
        <AppCard
          id=""
          key={app.title + i}
          screencastBannerURL={app.image}
          flowAvatarBackgroundColor={app.color}
          size={Sizes.base}
          premium={app.premium}
          flowAvatarUrl={app.authorImg}
          avatarCard={{
            avatar: {
              style: AvatarStyle.square,
              size: Sizes.base,
              image: app.profileImg,
              iconName: app.profileIcon,
              className: app.profileColors,
            },
            size: Sizes.base,
            description: app.description,
            flowTitle: app.title,
          }}
        />
      ))}
    </div>
  )
}

export default AppCardGrid
