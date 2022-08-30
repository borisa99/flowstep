import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'

import { Size, Sizes } from '../../types/sizes.types'
import Avatar, { AvatarStyle } from '../Avatar/avatar.component'
import Icon from '../Icon/icon.component'

type Props = {
  screencastTitle: string
  size: Sizes
  id: number
  screencastBanner: string
  flowAvatar: string | null | undefined
  flowTitle: string
  className?: string
  handleClick: () => void
}

const ScreencastCard: FunctionComponent<Props> = ({
  screencastTitle,
  size,
  screencastBanner,
  flowAvatar,
  flowTitle,
  className,
  handleClick,
}) => {
  const [showDetails, setShowDetails] = useState(false)

  const sizes: Size = {
    [Sizes.base]: 'h-screenCard-base w-62',
    [Sizes.lg]: 'h-screenCard-lg w-72',
  }

  const sizeClasses = sizes[size]
  const hoverClasses = showDetails ? 'opacity-100' : 'opacity-0'

  return (
    <div
      className={`flex items-center justify-center flex-col cursor-pointer ${sizeClasses} ${className}`}
      onClick={handleClick}
    >
      <div
        className={`w-full rounded-xl`}
        onMouseOver={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <div className={`w-full rounded-xl`}>
          <Image
            src={screencastBanner}
            alt="img"
            layout="responsive"
            height={537}
            width={248}
            className="object-cover -z-[1] rounded-xl"
          />
          <div
            className={`flex justify-start items-center h-16 -mt-16 px-3 pb-3 pt-6 z-10 rounded-b-xl bg-gradient-to-b from-transparent to-black transition ease-out duration-200 ${hoverClasses} `}
          >
            <Avatar
              size={Sizes.xs}
              style={AvatarStyle.square}
              image={flowAvatar}
              className={`float-left mr-2 mt-auto}`}
            />
            <span className="text-white text-sm my-auto">{flowTitle}</span>
            <div className="inline-flex justify-center items-center ml-auto">
              <Icon icon="Info-rect" className={`text-gray-100 text-4xl`} />
              <Icon
                icon="Bookmark"
                className={`absolute text-gray-900 text-xl z-10`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`text-gray-700 text-center text-base mx-auto mt-2 h-12`}>
        {screencastTitle}
      </div>
    </div>
  )
}

export default ScreencastCard
