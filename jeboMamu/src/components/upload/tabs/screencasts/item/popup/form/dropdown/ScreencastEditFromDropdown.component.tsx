import { FC, useState } from 'react'
import Icon from '@/components/elements/Icon/icon.component'

type Props = {
  title: string
}
const ScreencastEditFromDropdown: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="flex flex-col relative">
      <div
        className="flex relative group rounded-md justify-between items-center cursor-pointer mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bg-gray-100 opacity-50 hidden group-hover:block absolute top-[-5px] bottom-[-5px] left-[-5px] right-[-5px] rounded-md z-[-1]"></div>
        <span className="text-sm font-semibold">{title}</span>
        {isOpen ? (
          <Icon icon="Caret-up" className="text-2xl text-gray-700 font-bold" />
        ) : (
          <Icon
            icon="Caret-down"
            className="text-2xl text-gray-700 font-bold"
          />
        )}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export default ScreencastEditFromDropdown
