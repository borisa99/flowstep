import classNames from 'classnames'
import { FC, useMemo } from 'react'

type Props = {
  isOpen: boolean
  styles?: string
}

const Dropdown: FC<Props> = ({ isOpen, children, styles }) => {
  
  const dropdownClassNames = useMemo(() => {
    return classNames(
      `absolute  flex flex-col py-2 transition-all duration-300 ease-out bg-white shadow-default rounded-lg mt-2 z-10  ${styles}`,
      {
        'opacity-0 pointer-events-none': !isOpen,
        'opacity-1': isOpen,
      }
    )
  }, [isOpen, styles])

  return (
    <div className={dropdownClassNames}>
      <div className="relative w-full">{children}</div>
    </div>
  )
}
export default Dropdown
