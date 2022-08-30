import { FC } from 'react'
import TimelineElement from '../timelineElement/timelineElement.component'
import classes from './videoTimeline.component.module.css'

interface Props {
  items: {
    title: string
    duration: number
    timestamp: number
    active: boolean
  }[]
  playing: boolean
  progress: number
  togglePlaying: () => void
  setProgress: (timestamp: number) => void
}

const VideoTimeline: FC<Props> = (props) => {
  const { items, playing, progress, togglePlaying, setProgress } = props

  const activeElement = items.find((e) => e.active)
  const elementProgress = activeElement
    ? progress - activeElement.timestamp + 1
    : 0

  const elementClickHandler = (timestamp: number, active: boolean) => {
    if (active) {
      togglePlaying()
    } else {
      setProgress(timestamp)
    }
  }

  return (
    <div
      className={`flex flex-col overflow-hidden hover:overflow-auto ${classes.container}`}
    >
      {items.map((e, i) => (
        <TimelineElement
          active={e.active}
          playing={playing}
          progress={elementProgress}
          key={i}
          duration={e.duration}
          timestamp={e.timestamp}
          order={i + 1}
          title={e.title}
          onClick={elementClickHandler}
        />
      ))}
    </div>
  )
}

export default VideoTimeline
