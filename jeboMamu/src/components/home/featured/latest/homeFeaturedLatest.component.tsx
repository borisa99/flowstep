import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'

type Props = {
  latestCount?: number
}

export const HomeFeaturedLatest: FC<Props> = ({ latestCount }) => {
  const { t } = useTranslation('home')

  const title = (count = 0) => {
    if (count > 1) {
      return `${count} ${t('new-apps-label')}`
    }

    return `${count} ${t('new-app-label')}`
  }
  return (
    <>
      <h1 className="text-6xl mb-2">{title(latestCount)}</h1>
      <div className="text-base text-gray-700 text-left mb-6">
        {t('featured-user-description')}
      </div>
      <Button
        size={Sizes.base}
        style={ButtonStyle.solid}
        color={Colors.blue}
        label={t('show-latest-label')}
      />
    </>
  )
}
export default HomeFeaturedLatest
