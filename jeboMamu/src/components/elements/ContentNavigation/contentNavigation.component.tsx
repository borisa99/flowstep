import { FC } from 'react'
import Icon from '@/components/elements/Icon/icon.component'
import classnames from 'classnames'

interface Props {
  totalItems: number
  index: number
  setIndex: (nextIndex: number) => void
  className?: string
}

const ContentNavigation: FC<Props> = (props) => {
  const { index, setIndex, totalItems, className } = props

  const arrowClasses = (disabled: boolean) =>
    classnames(
      'absolute text-2xl w-6 h-6 flex items-center justify-center rounded-xl cursor-pointer',
      {
        'text-gray-500': disabled,
        'cursor-default': disabled,
        'hover:bg-gray-300': !disabled,
      }
    )

  const previousDisabled = index <= 0
  const nextDisabled = index >= totalItems - 1

  const previousClickHandler = () => {
    if (previousDisabled) return
    setIndex(index - 1)
  }
  const nextClickHandler = () => {
    if (nextDisabled) return
    setIndex(index + 1)
  }

  const containerClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className={`max-w-fit relative flex h-8 bg-gray-100 items-center rounded-2xl px-9 select-none ${className}`}
      onClick={containerClickHandler}
    >
      <span
        className={`top-1 left-1 ${arrowClasses(previousDisabled)}`}
        onClick={previousClickHandler}
      >
        <Icon icon="Caret-left" />
      </span>
      <span className="text-sm whitespace-nowrap">
        {index + 1 + ' / ' + totalItems}
      </span>
      <span
        className={` top-1 right-1 ${arrowClasses(nextDisabled)}`}
        onClick={nextClickHandler}
      >
        <Icon icon="Caret-right" />
      </span>
    </div>
  )
}

export default ContentNavigation
