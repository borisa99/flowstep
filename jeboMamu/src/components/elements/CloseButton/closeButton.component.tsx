import React, { FunctionComponent } from 'react'
import Icon from '@/components/elements/Icon/icon.component'
import { Size, Sizes } from '@/components/types/sizes.types'

export enum CloseButtonStyle {
  default = 'default',
  light = 'light',
}

type Props = {
  size: Sizes
  style: CloseButtonStyle
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const CloseButton: FunctionComponent<Props> = ({
  size,
  style,
  className,
  onClick,
}) => {
  const sizes: Size = {
    [Sizes.base]: 'h-7 w-7',
    [Sizes.lg]: 'h-10 w-10',
  }
  const colors: { [key in CloseButtonStyle]: string } = {
    default: 'bg-gray-200',
    light: 'bg-gray-100',
  }

  const sizeClasses = sizes[size]
  const colorClasses = colors[style]

  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold cursor-pointer ${sizeClasses} ${colorClasses} ${className}`}
      onClick={onClick}
    >
      <Icon icon="Cross" className="text-gray-900 text-2xl" />
    </div>
  )
}

export default CloseButton
