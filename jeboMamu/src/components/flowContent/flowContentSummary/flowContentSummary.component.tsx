import { FC, useEffect, useState } from 'react'
// import Badge from '@/components/elements/Badge/badge.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import {
  useLikeScreencastMutation,
  useUnlikeScreencastMutation,
} from '@/graphql/generated'

import { selectUserId } from '@/redux/slices/auth.slice'
import { useAppSelector } from '@/redux/hooks'
import { useTranslation } from 'next-i18next'
interface Props {
  flowScreencastId: string
  screencastTitle: string
  flowTitle: string
  likeCount: number
  isPreviouslyLiked: boolean
  isPreviouslySaved: boolean
  // tags: ('Trending' | 'StaffPick')[]
  toggleSave: () => void
  toggleDetails: () => void
  toggleShare: () => void
}

const FlowContentSummary: FC<Props> = (props) => {
  const {
    flowScreencastId,
    flowTitle,
    screencastTitle,
    likeCount,
    isPreviouslyLiked,
    isPreviouslySaved,
    toggleSave,
    toggleDetails,
    toggleShare,
    // tags,
  } = props

  const user_id = useAppSelector(selectUserId)

  const { t } = useTranslation(['common', 'screencast-player'])

  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  const [likeScreencast] = useLikeScreencastMutation({
    variables: { flow_screencast_id: flowScreencastId },
  })
  const [unlikeScreencast] = useUnlikeScreencastMutation({
    variables: { flow_screencast_id: flowScreencastId },
  })
  useEffect(() => {
    setLikes(likeCount)
  }, [likeCount])

  useEffect(() => {
    setIsLiked(isPreviouslyLiked)
  }, [isPreviouslyLiked])

  const handleLikeClick = async () => {
    if (isLiked) {
      await unlikeScreencast()
      setLikes((prev) => prev - 1)
      setIsLiked(false)
    } else {
      await likeScreencast()
      setLikes((prev) => prev + 1)
      setIsLiked(true)
    }
  }

  return (
    <div className="h-[15rem] flex flex-col">
      <div className="text-2xl font-bold">
        <span className="cursor-pointer hover:text-blue-600 hover:underline">
          {screencastTitle}
        </span>
        <span> {t('on-label', { ns: 'screencast-player' })} </span>
        <span className="cursor-pointer hover:text-blue-600 hover:underline">
          {flowTitle}
        </span>
      </div>

      <div className="flex gap-2 pt-2 pb-8">
        {/* {tags.map((e, i) => ({}
          <Badge key={i} badgeType={e} />
        ))} */}
        {/* <Badge badgeType="StaffPick" /> */}
        {/* &middot; */}
        <div
          className="text-gray-700 cursor-pointer hover:text-blue-600 hover:underline"
          onClick={toggleDetails}
        >
          {t('details-label', { ns: 'screencast-player' })}
        </div>
      </div>

      <div className="flex gap-3 pb-8">
        <Button
          label={likes as unknown as string}
          style={!user_id ? ButtonStyle.disabled : ButtonStyle.solid}
          size={Sizes.base}
          color={isLiked ? Colors.lightBlue : Colors.grey}
          iconName={isLiked ? 'Like' : 'Heart'}
          full
          onClick={handleLikeClick}
        />
        <Button
          color={isPreviouslySaved ? Colors.lightBlue : Colors.grey}
          style={!user_id ? ButtonStyle.disabled : ButtonStyle.solid}
          label={isPreviouslySaved ? t('saved-label') : t('save-label')}
          iconName={isPreviouslySaved ? 'Checked-box' : 'Bookmark'}
          size={Sizes.base}
          full
          onClick={toggleSave}
        />
        <Button
          color={Colors.grey}
          style={ButtonStyle.solid}
          label={t('share-label')}
          iconName="Share-box"
          size={Sizes.base}
          className="mr-3"
          full
          onClick={toggleShare}
        />
      </div>
    </div>
  )
}

export default FlowContentSummary
