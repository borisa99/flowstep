import React, { FunctionComponent } from 'react'
import Image from 'next/image'

import { Size, Sizes } from '../../types/sizes.types'
import AvatarCard, { AvatarCardProps } from '../AvatarCard/avatarCard.component'
import Avatar, { AvatarStyle } from '../Avatar/avatar.component'
import IphoneSvg from '@/assets/images/svg/iphone.svg'
import { useRouter } from 'next/router'

type Props = {
  id: string
  avatarCard: AvatarCardProps
  flowAvatarBackgroundColor: string
  flowAvatarUrl?: string | null | undefined
  size: Sizes
  screencastBannerURL: string
  className?: string
  premium?: boolean
  isDraft?: boolean
  isCollection?: boolean
}

const AppCard: FunctionComponent<Props> = ({
  id,
  avatarCard,
  flowAvatarBackgroundColor,
  size,
  className,
  screencastBannerURL,
  premium,
  flowAvatarUrl,
  isDraft,
  isCollection,
}) => {
  const router = useRouter()
  const sizes: Size = {
    [Sizes.base]: 'h-appCard-base w-84',
    [Sizes.lg]: 'h-appCard-lg w-100',
  }
  const additionalAvatarSizes: { [key in Sizes]: Sizes } = {
    [Sizes.xs]: Sizes.xs,
    [Sizes.sm]: Sizes.xs,
    [Sizes.base]: Sizes.xs,
    [Sizes.m]: Sizes.xs,
    [Sizes.lg]: Sizes.xs,
    [Sizes.xl]: Sizes.xs,
  }
  const imgWidths: Size = {
    [Sizes.base]: 'w-84',
    [Sizes.lg]: 'w-100',
  }
  const phoneImgWidths: Size = {
    [Sizes.base]: 'w-60',
    [Sizes.lg]: 'w-68',
  }
  const paddings: Size = {
    [Sizes.base]: 'pt-12 px-12',
    [Sizes.lg]: 'pt-16 px-16',
  }

  const sizeClasses = sizes[size]
  const paddingClasses = paddings[size]
  const imgWidthClasses = imgWidths[size]
  const phoneWidthClasses = phoneImgWidths[size]
  const additionalAvatarSize = additionalAvatarSizes[size]

  const premiumAvatar = (
    <Avatar
      style={AvatarStyle.circle}
      size={additionalAvatarSize}
      className={`bg-warning border-2 text-white -mb-1.5 z-10`}
      iconName="Diamond"
      styleCss={{ borderColor: flowAvatarBackgroundColor }}
    />
  )

  const profileAvatar = (
    <Avatar
      style={AvatarStyle.circle}
      size={additionalAvatarSize}
      className={`border-2 -mb-1.5 z-10`}
      image={flowAvatarUrl}
      styleCss={{ borderColor: flowAvatarBackgroundColor }}
      hasBorder
    />
  )

  return (
    <div
      className={`flex items-center justify-center flex-col cursor-pointer ${sizeClasses} ${className}`}
      onClick={() =>
        router.push(
          (isCollection ? '/collection/' : isDraft ? '/upload/' : '/app/') +
            id +
            `?app=${avatarCard.flowTitle}`
        )
      }
    >
      <div
        className={`flex flex-wrap grow bg-opacity-40 rounded-t-double overflow-hidden ${paddingClasses} ${imgWidthClasses}`}
        style={{ backgroundColor: `${flowAvatarBackgroundColor}60` }}
      >
        <div className={`pt-3.5 px-3.5 w-full`}>
          <Image
            src={screencastBannerURL}
            alt="img"
            layout="responsive"
            height={250}
            width={212}
            className="object-cover"
          />
        </div>
        <IphoneSvg className={`absolute ${phoneWidthClasses}`} />
      </div>
      <div
        className="w-full rounded-b-double p-4"
        style={{ backgroundColor: flowAvatarBackgroundColor }}
      >
        <AvatarCard
          {...avatarCard}
          additionalAvatar={
            premium ? premiumAvatar : flowAvatarUrl && profileAvatar
          }
        />
      </div>
    </div>
  )
}

export default AppCard
