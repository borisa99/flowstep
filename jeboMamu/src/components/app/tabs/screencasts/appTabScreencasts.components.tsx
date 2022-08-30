import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectAppScreencasts, selectAppTitle } from '@/redux/slices/app.slice'
import { setScreencastId } from '@/redux/slices/flow/flowScreencast.slice'

import { Sizes } from '@/components/types/sizes.types'
import { Views } from '@/components/types/views.types'
import ScreencastCard from '@/components/elements/ScreencastCard/screencastCard.component'
import ScreencastPlayer from '@/components/flowContent/screencastPlayer/screencastPlayer.component'
import ScreencastListItem from '@/components/elements/ScreencastListItem/screencastListItem.component'
import ScreencastList from '@/components/elements/ScreencastList/screencastList.component'

interface Props {
  view: Views
}

const AppTabScreencasts = (props: Props) => {
  const { view } = props

  const dispatch = useAppDispatch()
  const [showPopup, setShowPopup] = useState(false)
  const appScreencasts = useAppSelector(selectAppScreencasts)
  const appTitle = useAppSelector(selectAppTitle)

  const handleScreencastClick = (screencast_id: string) => {
    dispatch(setScreencastId(screencast_id))
    setShowPopup(true)
  }

  return (
    <>
      {showPopup && <ScreencastPlayer onClose={() => setShowPopup(false)} />}
      {view === Views.List ? (
        <ScreencastList>
          {appScreencasts?.map((screencast) => {
            return (
              <ScreencastListItem
                key={screencast.id}
                title={screencast.title}
                flowName={appTitle || ''}
                components={screencast.flow_screencast_components}
                flows={screencast.flow_screencast_timestamps}
                handleClick={() => handleScreencastClick(screencast.id)}
              />
            )
          })}
        </ScreencastList>
      ) : (
        <div className="grid grid-cols-4 gap-6 mt-8">
          {appScreencasts?.map((screencast) => {
            return (
              <ScreencastCard
                key={screencast.id}
                id={1}
                screencastTitle={'screen.title'}
                size={Sizes.base}
                screencastBanner={screencast.banner_url}
                flowAvatar={screencast.banner_url}
                flowTitle={'app.title'}
                handleClick={() => handleScreencastClick(screencast.id)}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default AppTabScreencasts
