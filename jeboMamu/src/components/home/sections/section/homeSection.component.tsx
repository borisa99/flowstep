import { FC, ReactNode, useState } from 'react'

import AppCard from '@/components/elements/AppCard/appCard.component'
import { AvatarStyle } from '@/components/elements/Avatar/avatar.component'
import HomeSectionHeader, {
  HomeSectionHeaderProps,
} from './header/homeSectionHeader.component'
import ScreencastCard from '@/components/elements/ScreencastCard/screencastCard.component'
import { Sizes } from '@/components/types/sizes.types'
import ScreencastPlayer from '@/components/flowContent/screencastPlayer/screencastPlayer.component'
import { AppCardFragment, ScreencastCardFragment } from '@/graphql/generated'
import { useAppDispatch } from '@/redux/hooks'
import { setScreencastId } from '@/redux/slices/flow/flowScreencast.slice'
import { slugify } from '@/utils/helperFunctions'

type Props = {
  header: HomeSectionHeaderProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flows?: AppCardFragment[]
  screeencasts?: ScreencastCardFragment[]
  children?: ReactNode
  className?: string
}

export const HomeSection: FC<Props> = ({
  header,
  flows = [],
  screeencasts = [],
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
}) => {
  const dispatch = useAppDispatch()
  const [showPopup, setShowPopup] = useState(false)

  const handleScreencastClick = (screencast_id: string) => {
    dispatch(setScreencastId(screencast_id))
    setShowPopup(true)
  }
  return (
    <div className={`mt-16 ${className}`}>
      <HomeSectionHeader
        title={header.title}
        description={header.description}
        iconName={header.iconName}
      />
      <div className="flex space-x-4">
        {flows.map((flow) => (
          <AppCard
            key={flow.id}
            id={flow.id}
            size={Sizes.base}
            premium={true}
            flowAvatarBackgroundColor={flow.avatar_background_color as string}
            flowAvatarUrl={flow.avatar_url}
            screencastBannerURL={flow.screencasts[0].banner_url}
            avatarCard={{
              size: Sizes.base,
              description: flow.app_info?.category,
              flowTitle: flow.title,
              avatar: {
                style: AvatarStyle.square,
                size: Sizes.base,
                iconUrl: flow.avatar_url,
              },
            }}
          />
        ))}

        {screeencasts.map((screen) => (
          <ScreencastCard
            className={`${slugify(screen.title)}`}
            key={screen.id}
            id={screen.id}
            screencastTitle={screen.title}
            size={Sizes.base}
            screencastBanner={screen.banner_url}
            flowAvatar={screen.flow.avatar_url}
            flowTitle={screen.flow.title}
            handleClick={() => handleScreencastClick(screen.id)}
          />
        ))}
        {showPopup && <ScreencastPlayer onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  )
}

export default HomeSection
