import { useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { useAppSelector } from '@/redux/hooks'
import { selectUserId } from '@/redux/slices/auth.slice'
import { selectAppStoreLink, selectAppUserId } from '@/redux/slices/app.slice'

import useRedirect from '@/hooks/use-redirect/use-redirect'
import { useToast } from '@/hooks/use-toast/use-toast'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { ContentType } from '@/components/types/content.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import SharePopup from '@/components/flowContent/sharePopup/sharePopup.component'
import AppHeaderNavigationDropdown from './dropdown/appHeaderNavigationDropdown.component'
import { ToastStyle } from '@/components/elements/Toasts/toast/toast.component'

const AppHeaderNavigation = () => {
  const router = useRouter()
  const appStoreLink = useAppSelector(selectAppStoreLink)

  const user_id = useAppSelector(selectUserId)
  const app_user_id = useAppSelector(selectAppUserId)
  const [showShare, setShowShare] = useState<boolean>(false)

  const { t } = useTranslation(['common', 'app'])
  const { redirectOutside } = useRedirect()
  const { addToast } = useToast()

  const handleRedirect = () => {
    redirectOutside(appStoreLink as string, true)
  }

  const handleSave = () => {
    addToast({
      style: ToastStyle.success,
      title: `Save option is coming soon!`,
    })
  }
  return (
    <div className="flex">
      {user_id === app_user_id ? (
        <>
          <AppHeaderNavigationDropdown
            handleRedirect={handleRedirect}
            handleShare={setShowShare}
            handleSave={handleSave}
          />
          <Button
            size={Sizes.base}
            style={ButtonStyle.solid}
            color={Colors.blue}
            label={t('edit-label')}
            className="ml-3"
            onClick={() => router.push(`/upload/${router.query.appId}`)}
          />
        </>
      ) : (
        <>
          <Button
            size={Sizes.base}
            style={ButtonStyle.solid}
            color={Colors.grey}
            label={t('app-store-label', { ns: 'app' })}
            iconName="App-store"
            className="my-auto mr-3"
            onClick={handleRedirect}
          />
          <Button
            size={Sizes.base}
            style={ButtonStyle.solid}
            color={Colors.grey}
            label={t('save-label')}
            iconName="Bookmark"
            className="my-auto mr-3"
            onClick={handleSave}
          />
          <Button
            size={Sizes.base}
            style={ButtonStyle.solid}
            color={Colors.grey}
            label={t('share-label')}
            iconName="Share-box"
            className="my-auto"
            onClick={() => setShowShare(true)}
          />
        </>
      )}

      {showShare && (
        <SharePopup
          onClose={() => setShowShare(false)}
          type={ContentType.screencast}
        />
      )}
    </div>
  )
}
export default AppHeaderNavigation
