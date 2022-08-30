import { FC, ReactNode } from 'react'

import { Size, Sizes } from '@/components/types/sizes.types'
import Avatar, { AvatarProps } from '../Avatar/avatar.component'

export type AvatarCardProps = {
  avatar: AvatarProps
  flowTitle: string
  description: string | ReactNode | null | undefined
  size: Sizes
  tags?: ReactNode
  options?: ReactNode
  additionalAvatar?: ReactNode
}

const AvatarCard: FC<AvatarCardProps> = ({
  avatar,
  size,
  flowTitle,
  description,
  tags,
  options,
  additionalAvatar,
}) => {
  const titleSizes: Size = {
    [Sizes.sm]: 'text-sm',
    [Sizes.base]: 'text-base',
    [Sizes.lg]: 'text-lg',
  }
  const descriptionSizes: Size = {
    [Sizes.sm]: 'text-xs',
    [Sizes.base]: 'text-sm',
    [Sizes.lg]: 'text-base',
  }

  const titleSizeClasses = titleSizes[size]
  const descriptionSizeClasses = descriptionSizes[size]

  return (
    <div className="flex items-center">
      <Avatar
        {...avatar}
        additionalAvatar={additionalAvatar}
        className="bg-white"
      />
      <div className="ml-4">
        <h6 className={`${titleSizeClasses}`}>{flowTitle}</h6>
        <div className="flex justify-center items-center">
          {tags}
          {description && (
            <div
              className={`text-gray-700 font-normal mr-5 ${descriptionSizeClasses}`}
            >
              {description}
            </div>
          )}
          {options}
        </div>
      </div>
    </div>
  )
}

export default AvatarCard
