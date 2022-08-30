import { useState } from 'react'

import { Views } from '@/components/types/views.types'
import TabsContainer from '@/components/elements/Tabs/tabsContainer/tabsContainer.component'
import TabsHeader from '@/components/elements/Tabs/tabsHeader/tabsHeader.component'
import Tab from '@/components/elements/Tabs/tab/tab.component'
import TabContent from '@/components/elements/Tabs/tabContent/tabContent.component'
import OptionsSwitch from '@/components/elements/OptionsSwitch/optionsSwitch.component'
import AppTabScreencasts from './screencasts/appTabScreencasts.components'
import AppTabScreenshots from './screenshots/appTabScreenshots.component'
import AppTabAttachments from './attachments/appTabAttachments.component'

interface Props {
  tabCounts: number[]
  onChange?: (tabKey: string) => void
  defaultTabKey?: string
}

const AppTabs = (props: Props) => {
  const [activeView, setActiveView] = useState<string | Views>(Views.Tiles)

  const { tabCounts, defaultTabKey, onChange } = props

  return (
    <TabsContainer
      defaultTabKey={defaultTabKey ?? 'screencasts'}
      onChange={onChange}
    >
      <TabsHeader>
        <Tab tabKey="screencasts" label="Screencasts" number={tabCounts[0]} />
        <Tab tabKey="screenshots" label="Screenshots" number={tabCounts[1]} />
        <Tab tabKey="attachments" label="Attachments" number={tabCounts[2]} />
        <div className="my-auto ml-auto h-full">
          <OptionsSwitch
            options={[Views.Tiles, Views.List]}
            optionIcons={['Layout', 'List']}
            activeOption={activeView}
            onSwitch={setActiveView}
            light
            className="bg-gray-100 mt-2"
          />
        </div>
      </TabsHeader>

      <TabContent tabKey="screencasts">
        <AppTabScreencasts view={activeView as Views} />
      </TabContent>
      <TabContent tabKey="screenshots">
        <AppTabScreenshots />
      </TabContent>
      <TabContent tabKey="attachments">
        <AppTabAttachments />
      </TabContent>
    </TabsContainer>
  )
}

export default AppTabs
