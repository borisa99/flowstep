import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppSelector } from '@/redux/hooks'
import { selectAppInfo } from '@/redux/slices/app.slice'

import { Alignments } from '@/components/types/aligment.types'
import Popup from '@/components/elements/Popup/popup.component'
import AppInfoPopupItem from './item/appInfoPopupItem.component'

type Props = {
  handleClose: () => void
}
const AppInfoPopup: FC<Props> = ({ handleClose }) => {
  const appInfo = useAppSelector(selectAppInfo)
  const { t } = useTranslation('app')

  return (
    <Popup
      title={t('app-info-title')}
      headerAlignment={Alignments.center}
      onClose={handleClose}
    >
      <div className="w-[424px]">
        <AppInfoPopupItem
          label={t('category-label')}
          value={appInfo?.category}
        />
        <AppInfoPopupItem
          label={t('downloads-label')}
          value={appInfo?.number_of_downloads}
        />
        <AppInfoPopupItem
          label={t('rating-label')}
          value={appInfo?.average_rating}
          showStar
        />
        <AppInfoPopupItem
          label={t('developer-label')}
          value={appInfo?.developer}
        />
        <AppInfoPopupItem
          label={t('website-label')}
          value={appInfo?.website}
          hideBorder
        />
      </div>
    </Popup>
  )
}

export default AppInfoPopup
