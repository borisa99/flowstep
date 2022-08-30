import { FC } from 'react'
import classnames from 'classnames'
import Icon from '@/components/elements/Icon/icon.component'

interface Props {
  active?: boolean
  playing?: boolean
  order: number
  title: string
  duration: number // seconds
  timestamp: number
  progress?: number
  onClick: (timestamp: number, active: boolean) => void
}

const TimelineElement: FC<Props> = (props) => {
  const {
    title,
    order,
    duration,
    timestamp,
    active = false,
    playing = false,
    progress = 0,
    onClick,
  } = props

  const transitionStyle = 'transition-all duration-300 linear'

  const containerClasses = classnames(
    'group',
    'relative rounded-xl h-17 pt-3 pr-4 pl-10 overflow-hidden cursor-pointer shrink-0',
    transitionStyle,
    {
      'bg-blue-50': active,
      'text-blue-600': active,
      'hover:bg-gray-50': !active,
    }
  )

  const percentage = active
    ? Math.round((progress / duration) * 100) + '%'
    : '0%'

  const formattedTime = `${Math.floor(timestamp / 60)}:${(
    '0' +
    (timestamp % 60)
  ).slice(-2)}`

  return (
    <div
      className={containerClasses}
      onClick={() => onClick(timestamp, active)}
    >
      <div className="absolute top-3 left-0 w-10 text-center font-bold">
        {active && playing && <Icon icon="Pause" className="text-2xl" />}
        {active && !playing && <Icon icon="Play" className="text-2xl" />}
        {!active && (
          <div className="relative">
            <span
              className={`absolute left-0 right-0 group-hover:opacity-0 ${transitionStyle}`}
            >
              {order}
            </span>
            <Icon
              icon="Play"
              className={`absolute text-2xl left-0 right-0 opacity-0 group-hover:opacity-100 ${transitionStyle}`}
            />
          </div>
        )}
      </div>
      <div
        className="font-bold text-ellipsis whitespace-nowrap overflow-hidden"
        title={title}
      >
        {title}
      </div>
      <div className="text-sm text-gray-700">{formattedTime}</div>
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5">
          <div
            className="h-full bg-blue-600 rounded-[1px] transition-all duration-200 ease-linear"
            style={{ width: percentage }}
          />
        </div>
      )}
    </div>
  )
}

export default TimelineElement
