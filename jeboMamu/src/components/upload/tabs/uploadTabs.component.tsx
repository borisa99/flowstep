import { useTranslation } from 'next-i18next'

import { isDisabled } from '@/redux/slices/flow/flow.slice'
import { useAppSelector } from '@/redux/hooks'

import TabsHeader from '@/components/elements/Tabs/tabsHeader/tabsHeader.component'
import Tab from '@/components/elements/Tabs/tab/tab.component'
import TabsContainer from '@/components/elements/Tabs/tabsContainer/tabsContainer.component'
import TabContent from '@/components/elements/Tabs/tabContent/tabContent.component'

import UploadtabScreencasts from './screencasts/uploadtabScreencasts.component'
import UploadTabScreenshots from './screenshot/uploadTabScreenshots.component'
import UploadTabAttachments from './attachments/uploadTabAttachments.component'

const UploadTabs = () => {
  const disabled = useAppSelector(isDisabled)

  const { t } = useTranslation('upload')

  return (
    <TabsContainer defaultTabKey="screencasts">
      <TabsHeader>
        <Tab tabKey="screencasts" label={t('screencasts-tab')} />
        <Tab tabKey="screenshots" label={t('screenshots-tab')} />
        <Tab tabKey="attachments" label={t('attachments-tab')} />
      </TabsHeader>

      <TabContent tabKey="screencasts">
        <UploadtabScreencasts isDisabled={disabled} />
      </TabContent>
      <TabContent tabKey="screenshots">
        <UploadTabScreenshots isDisabled={disabled} />
      </TabContent>
      <TabContent tabKey="attachments">
        <UploadTabAttachments isDisabled={disabled} />
      </TabContent>
    </TabsContainer>
  )
}

export default UploadTabs
