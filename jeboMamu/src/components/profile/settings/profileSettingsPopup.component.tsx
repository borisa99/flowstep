import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { setShowSettingsPopup } from '@/redux/slices/ui/ui.slice'

import { AnimatePresence } from 'framer-motion'
import Popup from '@/components/elements/Popup/popup.component'
import Tab from '@/components/elements/Tabs/tab/tab.component'
import TabContent from '@/components/elements/Tabs/tabContent/tabContent.component'
import TabsContainer from '@/components/elements/Tabs/tabsContainer/tabsContainer.component'
import TabsHeader from '@/components/elements/Tabs/tabsHeader/tabsHeader.component'
import ProfileContent from './profileContent/profileContent.component'
import PasswordContent from './passwordContent/passwordContent.component'
import NotificationsContent from './notificationsContent/notificationsContent.component'

import { UserResponse } from '@/graphql/generated'

interface Props {
  show: boolean
  user: UserResponse
}

const ProfileSettingsPopup: FC<Props> = (props) => {
  const { show, user } = props

  const { t } = useTranslation('common')

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(setShowSettingsPopup(false))
  }

  return (
    <AnimatePresence exitBeforeEnter={true}>
      {show && (
        <Popup
          onClose={handleClose}
          title={t('settings-label')}
          modalClassNames="w-[26.5rem]"
          containerClassNames="!items-start py-[100px]"
          headerClassNames="border-0 border-teal-600 pb-0"
        >
          <TabsContainer defaultTabKey="profile">
            <TabsHeader>
              <Tab label={t('profile-tab')} tabKey="profile" />
              <Tab label={t('password-tab')} tabKey="password" />
              <Tab label={t('notifications-tab')} tabKey="notifications" />
            </TabsHeader>
            <TabContent tabKey="profile">
              <ProfileContent user={user} />
            </TabContent>
            <TabContent tabKey="password">
              <PasswordContent />
            </TabContent>
            <TabContent tabKey="notifications">
              <NotificationsContent />
            </TabContent>
          </TabsContainer>
        </Popup>
      )}
    </AnimatePresence>
  )
}

export default ProfileSettingsPopup
