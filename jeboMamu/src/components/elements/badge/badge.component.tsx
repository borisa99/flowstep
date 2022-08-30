import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Tag, { TagStyle } from '../Tag/tag.component'

interface Props {
  badgeType: 'Trending' | 'StaffPick'
}

const Badge: FC<Props> = (props) => {
  const { badgeType } = props

  const { t } = useTranslation('common')

  const variations = {
    Trending: {
      classes: 'bg-criticalBg text-critical',
      text: t('trending-badge'),
      color: Colors.red,
      iconUrl: '/images/fire.svg',
    },
    StaffPick: {
      classes: 'bg-warningBg text-warning',
      text: t('staff-pick-badge'),
      color: Colors.orange,
      iconUrl: '/images/goblet.svg',
    },
  }

  return (
    <Tag
      color={variations[badgeType].color}
      label={variations[badgeType].text}
      size={Sizes.base}
      iconUrl={variations[badgeType].iconUrl}
      style={TagStyle.light}
    />
  )
}

export default Badge
