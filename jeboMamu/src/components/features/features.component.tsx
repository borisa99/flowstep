import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { Sizes } from '../types/sizes.types'
import { Feature } from '../types/features.types'
import FeatureCard from './featureCard.component'

type Props = {
  className?: string
}

export const Features: FC<Props> = ({ className }) => {
  const { t } = useTranslation('pricing')

  const featuresMinor: Feature[] = [
    {
      id: 1,
      title: t('filters-title'),
      description: t('filters-description'),
      imageUrl: '/images/hand.svg',
      imagePosition: 'up',
    },
    {
      id: 2,
      title: t('filters-title'),
      description: t('filters-description'),
      recommended: true,
    },
  ]

  const featuresMajor: Feature[] = [
    {
      id: 3,
      title: t('create-collections-title'),
      description: t('create-collections-description'),
      imageUrl: '/images/records.svg',
      imagePosition: 'down',
    },
    {
      id: 4,
      title: t('premium-flows-title'),
      description: t('premium-flows-description'),
      premium: true,
      recommended: true,
    },
  ]
  return (
    <div className={`mx-auto max-w-[1040px] min-w-[1040px] ${className}`}>
      <div className="flex flex-col justify-center items-center text-gray-900 bg-white mb-8">
        <h3 className="font-bold">{t('features-title')}</h3>
        <div className="text-gray-700 text-base mt-2">{t('subtitle')}</div>
      </div>
      <div className="flex justify-center items-start text-gray-900 bg-white w-[1040px]">
        <div className="flex flex-col text-center mx-auto text-gray-900 mr-4">
          {featuresMinor.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} size={Sizes.base} />
          ))}
        </div>
        <div className="flex flex-col text-center mx-auto text-gray-900">
          {featuresMajor.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} size={Sizes.lg} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
