import { FC, useState, useMemo } from 'react'
import classes from './trackBar.module.css'
import classnames from 'classnames'

interface Props {
  items: {
    title: string
    duration: number
    timestamp: number
    active: boolean
  }[]
  progress: number
  setProgress: (timestamp: number) => void
}

const TrackBar: FC<Props> = (props) => {
  const { items, progress, setProgress } = props

  const [hoverIndex, setHoverIndex] = useState<number | undefined>(undefined)

  const totalDuration = useMemo(
    () => items.reduce((p, e) => e.duration + p, 0),
    [items]
  )

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${('0' + (seconds % 60)).slice(-2)}`

  const activeIndex = items.findIndex((item) => item.active)

  const sectionClasses = (i: number) => {
    return classnames(
      'relative shrink-0 group rounded-sm bg-white h-0.5 cursor-pointer',
      'hover:h-1 hover:rounded-sm',
      classes['trackbar-section'],
      {
        'opacity-50': i > activeIndex,
        'opacity-90': i > activeIndex && hoverIndex && i <= hoverIndex,
        '!bg-blue-600': i < activeIndex,
      }
    )
  }

  const sectionClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    timestamp: number,
    duration: number
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.x
    const sectionProgress = duration * (x / rect.width)
    setProgress(timestamp + sectionProgress)
  }

  return (
    <div className="h-1 w-full px-4 flex items-center gap-0.5">
      {items.map((item, index) => (
        <div
          key={index}
          className={sectionClasses(index)}
          style={{ flexGrow: item.duration }}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(undefined)}
          onClick={(event) =>
            sectionClickHandler(event, item.timestamp, item.duration)
          }
        >
          {index === activeIndex && (
            <span
              className="h-full bg-blue-600 absolute rounded-[1px] group-hover:rounded-sm"
              style={{
                width:
                  ((progress - item.timestamp) / item.duration) * 100 + '%',
              }}
            />
          )}
          <div className="absolute bottom-2 whitespace-nowrap bg-black px-2 py-1 text-xs rounded-[4px] invisible">
            {item.title}
            &nbsp;
            <span className="opacity-60">{formatTime(item.timestamp)}</span>
          </div>
        </div>
      ))}
      <div className="absolute h-1 w-[calc(100%_-_2rem)] pointer-events-none">
        <div
          className="h-full relative"
          style={{ width: `${(progress / totalDuration) * 100}%` }}
        >
          <div className="absolute right-[-4px] top-[-2px] w-2 h-2 rounded bg-blue-600" />
        </div>
      </div>
    </div>
  )
}

export default TrackBar
