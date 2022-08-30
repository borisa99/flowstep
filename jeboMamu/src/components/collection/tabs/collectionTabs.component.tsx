import { FC, useMemo, useState } from 'react'

import { useTranslation } from 'next-i18next'

import TabsHeader from '@/components/elements/Tabs/tabsHeader/tabsHeader.component'
import Tab from '@/components/elements/Tabs/tab/tab.component'
import TabsContainer from '@/components/elements/Tabs/tabsContainer/tabsContainer.component'
import TabContent from '@/components/elements/Tabs/tabContent/tabContent.component'
import {
  CollectionFlowFragment,
  ScreencastCardFragment,
} from '@/graphql/generated'
import ScreencastCard from '@/components/elements/ScreencastCard/screencastCard.component'
import { Sizes } from '@/components/types/sizes.types'

import { slugify } from '@/utils/helperFunctions'
import { useDispatch } from 'react-redux'
import { setScreencastId } from '@/redux/slices/flow/flowScreencast.slice'
import ScreencastPlayer from '@/components/flowContent/screencastPlayer/screencastPlayer.component'

type Props = {
  collectionFlows: CollectionFlowFragment[]
}
const CollectionTabs: FC<Props> = ({ collectionFlows }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('collection')
  const [showPopup, setShowPopup] = useState(false)

  const screencasts: ScreencastCardFragment[] = useMemo(
    () => collectionFlows.map((flow) => flow.flow_screencast),
    [collectionFlows]
  )

  const handleScreencastClick = (screencast_id: string) => {
    dispatch(setScreencastId(screencast_id))
    setShowPopup(true)
  }
  return (
    <TabsContainer defaultTabKey="screencasts">
      <TabsHeader>
        <Tab tabKey="screencasts" label={t('screencasts-tab')} />
      </TabsHeader>

      <TabContent tabKey="screencasts">
        <div className="mt-8 screencasts-grid">
          {showPopup && (
            <ScreencastPlayer onClose={() => setShowPopup(false)} />
          )}
          {screencasts.map((screencast) => (
            <ScreencastCard
              className={`${slugify(screencast.title)}`}
              key={screencast.id}
              id={screencast.id}
              screencastTitle={screencast.title}
              size={Sizes.base}
              screencastBanner={screencast.banner_url}
              flowAvatar={screencast.flow.avatar_url}
              flowTitle={screencast.flow.title}
              handleClick={() => handleScreencastClick(screencast.id)}
            />
          ))}
        </div>
      </TabContent>
    </TabsContainer>
  )
}

export default CollectionTabs
