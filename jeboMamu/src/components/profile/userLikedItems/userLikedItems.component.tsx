import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { setScreencastId } from '@/redux/slices/flow/flowScreencast.slice'
import { slugify } from '@/utils/helperFunctions'
import { FlowLikedScreencastFragment } from '@/graphql/generated'

import ScreencastCard from '@/components/elements/ScreencastCard/screencastCard.component'
import ScreencastPlayer from '@/components/flowContent/screencastPlayer/screencastPlayer.component'
import { Sizes } from '@/components/types/sizes.types'

import UserListPlaceholder from '../userListPlaceholder/userListPlaceholder.component'

interface Props {
  likes?: FlowLikedScreencastFragment[]
}

const UserLikedItems: FC<Props> = ({ likes }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { t } = useTranslation('profile')

  const [showPopup, setShowPopup] = useState(false)

  const navigateToDiscover = () => {
    router.push('/discover')
  }

  const handleScreencastClick = (screencast_id: string) => {
    dispatch(setScreencastId(screencast_id))
    setShowPopup(true)
  }

  return (
    <>
      {likes?.length ? (
        <>
          <div className="mt-8 screencasts-grid">
            {likes.map((e) => {
              const screen = e.flow_screencast
              return (
                <ScreencastCard
                  className={`${slugify(screen.title)}`}
                  key={screen.id}
                  id={screen.id}
                  screencastTitle={screen.title}
                  size={Sizes.base}
                  screencastBanner={screen.banner_url}
                  flowAvatar={screen.flow.avatar_url}
                  flowTitle={screen.flow.title}
                  handleClick={() => handleScreencastClick(screen.id)}
                />
              )
            })}
          </div>
          {showPopup && (
            <ScreencastPlayer onClose={() => setShowPopup(false)} />
          )}
        </>
      ) : (
        <UserListPlaceholder
          title={t('user-likes-title')}
          description={t('user-likes-description')}
          iconName="Like"
          btnLabel={t('go-discover-action')}
          btnCallback={navigateToDiscover}
        />
      )}
    </>
  )
}

export default UserLikedItems
