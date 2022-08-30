import { FC, ReactEventHandler } from 'react'

import { useTranslation } from 'next-i18next'

import Icon from '@/components/elements/Icon/icon.component'

interface Props {
  playbackRate: number
  duration: number
  progress: number
  playing: boolean
  togglePlaying: () => void
  onPlaybackRateChange: () => void
  onToggleFullScreen: ReactEventHandler<HTMLSpanElement>
}

const VideoControls: FC<Props> = (props) => {
  const {
    playbackRate,
    progress,
    duration,
    playing,
    togglePlaying,
    onPlaybackRateChange,
    onToggleFullScreen,
  } = props

  const { t } = useTranslation('screencast-player')

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${('0' + (seconds % 60)).slice(-2)}`

  return (
    <div className="flex items-center gap-3 pb-3 px-3">
      <span onClick={togglePlaying}>
        <Icon
          icon={playing ? t('pause-action') : t('play-action')}
          className="text-2xl cursor-pointer"
        />
      </span>
      <div className="text-sm">{`${formatTime(progress)} / ${formatTime(
        duration
      )}`}</div>
      <div className="grow" />
      <div className="font-bold cursor-pointer" onClick={onPlaybackRateChange}>
        {playbackRate}x
      </div>
      <span onClick={onToggleFullScreen}>
        <Icon icon="Expand" className="text-2xl cursor-pointer" />
      </span>
    </div>
  )
}

export default VideoControls
