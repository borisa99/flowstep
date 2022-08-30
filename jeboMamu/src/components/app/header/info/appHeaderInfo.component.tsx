import { useState } from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import AppInfoPopup from './popup/appInfoPopup.component'

import { useAppSelector } from '@/redux/hooks'
import { selectAppHeaderInfo, selectAppUserId } from '@/redux/slices/app.slice'

import { Sizes } from '@/components/types/sizes.types'
import Avatar, {
  AvatarStyle,
} from '@/components/elements/Avatar/avatar.component'

const AppHeaderInfo = () => {
  const router = useRouter()
  const info = useAppSelector(selectAppHeaderInfo)
  const { t } = useTranslation('app')
  const userId = useAppSelector(selectAppUserId)

  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="flex justify-center items-center">
      <div onClick={() => router.push(`/profile/${userId}`)}>
        <Avatar
          size={Sizes.lg}
          style={AvatarStyle.squareRounded}
          styleCss={{
            backgroundColor: info.avatar_background_color ?? '',
          }}
          iconUrl={info.avatar_url}
        />
      </div>
      <div className="ml-4">
        <h6 className="text-xl">{info.title}</h6>
        <div className="text-base text-gray-700 font-normal">
          <span className="mr-1">{info.category}</span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => setShowDetails(true)}
          >
            {t('app-info-label')}
          </span>
        </div>
      </div>
      {showDetails && (
        <AppInfoPopup handleClose={() => setShowDetails(false)} />
      )}
    </div>
  )
}

export default AppHeaderInfo
