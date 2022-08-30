import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Size, Sizes } from '@/components/types/sizes.types'

import Image from 'next/image'
import { Feature } from '../types/features.types'
import Avatar, { AvatarStyle } from '../elements/Avatar/avatar.component'
import Tag, { TagStyle } from '../elements/Tag/tag.component'

type Props = {
  feature: Feature
  size: Sizes
  className?: string
}

const sizes: Size = {
  [Sizes.base]: 'w-84',
  [Sizes.lg]: 'w-2xl',
}
const imgSizes: Size = {
  [Sizes.base]: 336,
  [Sizes.lg]: 300,
}

export const FeatureCard: FC<Props> = ({ feature, size, className }) => {
  const { title, description, imageUrl, imagePosition, premium, recommended } =
    feature
  const sizeClasses = sizes[size]
  const imgSizeClasses = imgSizes[size]

  const { t } = useTranslation('pricing')

  function getImage(image: string, position: string) {
    const style = position === 'up' ? 'rounded-t-3xl' : 'rounded-b-3xl'

    if (size === Sizes.lg) {
      return (
        <Image
          src={image}
          alt="Feature Image"
          layout="responsive"
          height={imgSizeClasses}
          width={688}
          objectFit="cover"
          className={style}
        />
      )
    }

    return (
      <Image
        src={image}
        alt="Feature Image"
        layout="responsive"
        height={imgSizeClasses}
        width={imgSizeClasses}
        objectFit="cover"
        className={style}
      />
    )
  }

  return (
    <div
      className={`shadow-custom text-left text-gray-900 bg-white rounded-3xl mb-4 last:mb-0 ${sizeClasses} ${className}`}
    >
      {imageUrl && imagePosition === 'up' && getImage(imageUrl, imagePosition)}
      {recommended && (
        <div className="pt-6 pl-6 pb-2">
          <Avatar
            size={Sizes.base}
            style={AvatarStyle.circle}
            iconUrl="/emojis/recommended.svg"
            className="bg-blue-50"
          />
        </div>
      )}
      <div className="flex items-start justify-center flex-col px-6 pt-6 pb-6 last:pb-8">
        <h3 className="font-bold">{title}</h3>
        <div className="text-l "></div>
        <div className="text-base text-gray-700 mt-1">{description}</div>
        {premium && (
          <Tag
            color={Colors.orange}
            size={Sizes.sm}
            style={TagStyle.light}
            iconName="Diamond"
            label={t('premium-only-label')}
            classNames="mt-8 -mb-2"
          />
        )}
      </div>
      {imageUrl &&
        imagePosition === 'down' &&
        getImage(imageUrl, imagePosition)}
    </div>
  )
}

export default FeatureCard
