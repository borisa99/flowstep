import React, { FunctionComponent } from 'react'
import Icon from '@/components/elements/Icon/icon.component'

type Props = {
  direction: 'up' | 'down' | 'right' | 'left'
  onClick?: React.MouseEventHandler<HTMLDivElement>
  className?: string
}

const DirectionButton: FunctionComponent<Props> = ({
  direction,
  className,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold 
          cursor-pointer w-10 h-10 bg-gray-100 ${className}
        `}
      onClick={onClick}
    >
      <Icon icon={`Arrow-${direction}`} className="text-gray-900 text-2xl" />
    </div>
  )
}

export default DirectionButton
