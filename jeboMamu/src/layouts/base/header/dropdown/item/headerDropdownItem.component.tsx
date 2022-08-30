import { FC, useMemo } from 'react'

type Props = {
  icon?: string
  title: string
  iconColor?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const HeaderDropdownItem: FC<Props> = ({ icon, iconColor, title, onClick }) => {
  const iconClassnames = useMemo(() => {
    if (icon) {
      return `icon-${icon} text-2xl ${
        iconColor ?? 'text-gray-700'
      }   group-hover:text-black mr-3`
    }
  }, [icon, iconColor])

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <div className="h-[40px] px-1" onClick={handleClick}>
      <div className="flex group h-full items-center transition ease-out delay-75 duration-500 hover:bg-gray-100 px-4 rounded-md cursor-pointer">
        <span className={iconClassnames}></span>
        <span className="text-base text-gray-900">{title}</span>
      </div>
    </div>
  )
}

export default HeaderDropdownItem
