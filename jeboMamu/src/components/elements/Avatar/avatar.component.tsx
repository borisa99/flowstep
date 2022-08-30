import React, { FunctionComponent, ReactNode } from 'react'
import Icon from '@/components/elements/Icon/icon.component'
import { Size, Sizes } from '../../types/sizes.types'

export enum AvatarStyle {
  circle = 'circle',
  square = 'square',
  squareRounded = 'squareRounded',
}

export type AvatarProps = {
  style: AvatarStyle
  size: Sizes
  className?: string
  styleCss?: React.CSSProperties
  iconName?: string
  iconUrl?: string | null
  image?: string | null
  additionalAvatar?: ReactNode
  hasBorder?: boolean
}

const Avatar: FunctionComponent<AvatarProps> = ({
  style,
  size,
  className,
  styleCss,
  iconName,
  iconUrl,
  image,
  additionalAvatar,
  hasBorder,
}) => {
  const sizes: Size = {
    [Sizes.xs]: 'h-6 w-6',
    [Sizes.sm]: 'h-8 w-8',
    [Sizes.base]: 'h-11 w-11',
    [Sizes.lg]: 'h-14 w-14',
    [Sizes.xl]: 'h-16 w-16',
  }
  const minorSizes: Size = {
    [Sizes.xs]: 'h-5 w-5',
    [Sizes.sm]: 'h-7 w-7',
    [Sizes.base]: 'h-10 w-10',
    [Sizes.lg]: 'h-13 w-13',
    [Sizes.xl]: 'h-15 w-15',
  }
  const iconSizes: Size = {
    [Sizes.xs]: 'h-4 w-4 text-base',
    [Sizes.sm]: 'h-5 w-5 text-xl',
    [Sizes.base]: 'h-6 w-6 text-2xl',
    [Sizes.lg]: 'h-7 w-7 text-3xl',
    [Sizes.xl]: 'h-8 w-8 texl-4xl',
  }
  const additionalAvatarPosition: Size = {
    [Sizes.xs]: 'ml-7 mt-7',
    [Sizes.sm]: 'ml-8 mt-8',
    [Sizes.base]: 'ml-9 mt-9',
    [Sizes.lg]: 'ml-11 mt-11',
    [Sizes.xl]: 'ml-12 mt-12',
  }
  const avatarShapes: { [key in AvatarStyle]: string } = {
    circle: 'rounded-full',
    square:
      size === Sizes.sm || size === Sizes.xs ? 'rounded-md' : 'rounded-default',
    squareRounded: 'rounded-double',
  }

  const sizeClasses = sizes[size]
  const minorSizeClasses = minorSizes[size]
  const iconSizeClasses = iconSizes[size]
  const additionalAvatarClasses = additionalAvatarPosition[size]
  const shapeClasses = avatarShapes[style]

  function getAvatar() {
    if (iconName) {
      return <Icon icon={iconName} className={`absolute ${iconSizeClasses}`} />
    } else if (image) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt="Image"
          className={`absolute object-cover ${
            hasBorder ? minorSizeClasses : sizeClasses
          } ${shapeClasses}`}
        />
      )
    } else if (iconUrl) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={iconUrl}
          alt="Icon"
          className={`absolute object-cover ${iconSizeClasses} ${shapeClasses}`}
        />
      )
    }
  }

  return (
    <div
      className={`flex items-center justify-center cursor-pointer ${sizeClasses} ${shapeClasses} ${className}`}
      style={styleCss}
    >
      {getAvatar()}
      {additionalAvatar && (
        <div className={`rounded-full z-10 ${additionalAvatarClasses}`}>
          {additionalAvatar}
        </div>
      )}
    </div>
  )
}

export default Avatar
