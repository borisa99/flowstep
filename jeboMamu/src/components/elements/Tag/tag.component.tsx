import React, { FunctionComponent } from 'react'
import Icon from '@/components/elements/Icon/icon.component'
import { Size, Sizes } from '@/components/types/sizes.types'
import { Color, Colors } from '@/components/types/colors.types'
import Image from 'next/image'

export enum TagStyle {
  solid = 'solid',
  light = 'light',
  white = 'white',
}

type Props = {
  label?: string
  style: TagStyle
  color: Colors
  size: Sizes
  iconUrl?: string
  iconName?: string
  classNames?: string
  closeable?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const tagSizes: Size = {
  [Sizes.sm]: 'h-5 px-1.5 text-xs',
  [Sizes.base]: 'h-6 px-1.5 text-sm',
  [Sizes.lg]: 'h-7 px-2 text-base',
}

const closeSizes: Size = {
  [Sizes.sm]: 'text-base',
  [Sizes.base]: 'text-xl',
  [Sizes.lg]: 'text-2xl',
}

const iconSolidSizes: Size = {
  [Sizes.sm]: 'text-base',
  [Sizes.base]: 'text-lg',
  [Sizes.lg]: 'text-2xl',
}

const tagColors: { [key in TagStyle]: Color } = {
  solid: {
    red: 'bg-critical text-white',
    grey: 'bg-gray-900 text-white',
    green: 'bg-success text-white',
    blue: 'bg-blue-900 text-white',
    orange: 'bg-warning text-white',
    brown: 'bg-other text-white',
  },
  light: {
    red: 'bg-criticalBg text-critical',
    grey: 'bg-gray-100 text-gray-900',
    green: 'bg-successBg text-success',
    blue: 'bg-blue-50 text-blue-900',
    orange: 'bg-warningBg text-warning',
    brown: 'bg-otherBg text-other',
  },
  white: {
    red: 'bg-white text-critical',
    grey: 'bg-white text-gray-900',
    green: 'bg-white text-success',
    blue: 'bg-white text-blue-900',
    orange: 'bg-white text-warning',
    brown: 'bg-white text-other',
  },
}

const closeColors: { [key in TagStyle]: Color } = {
  solid: {
    red: 'text-critical',
    grey: 'text-gray-900',
    green: 'text-success',
    blue: 'text-blue-900',
    orange: 'text-warning',
    brown: 'text-other',
  },
  light: {
    red: 'text-criticalBg',
    grey: 'text-gray-100',
    green: 'text-successBg',
    blue: 'text-blue-50',
    orange: 'text-warningBg',
    brown: 'text-otherBg',
  },
  white: {
    red: 'text-white',
    grey: 'text-white',
    green: 'text-white',
    blue: 'text-white',
    orange: 'text-white',
    brown: 'text-white',
  },
}

const Tag: FunctionComponent<Props> = ({
  label = '',
  style,
  color,
  size,
  iconUrl,
  iconName,
  classNames,
  closeable,
  onClick,
}) => {
  const sizeClasses = tagSizes[size]
  const colorClasses = tagColors[style][color]
  const closeSizeClasses = closeSizes[size]
  const closeClasses = closeColors[style][color]
  const iconSolidClasses = iconSolidSizes[size]

  function handleOnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <div
      className={`w-[max-content] inline-flex items-center justify-center rounded-lg font-bold py-0.5 cursor-pointer ${sizeClasses} ${colorClasses} ${classNames}`}
      onClick={handleOnClick}
    >
      {iconName && (
        <Icon
          icon={iconName}
          className={`text-inherit mr-1 ${iconSolidClasses}`}
        />
      )}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="Tag Icon"
          height={16}
          width={20}
          objectFit="scale-down"
          objectPosition="left"
        />
      )}
      {label}
      {closeable && (
        <div className="inline-flex">
          <Icon
            icon="Info-rect"
            className={`text-inherit ${closeSizeClasses}`}
          />
          <Icon
            icon="Cross"
            className={`absolute z-10 ${closeSizeClasses} ${closeClasses}`}
          />
        </div>
      )}
    </div>
  )
}

export default Tag
