import { FC, ReactNode } from 'react'

interface Props {
  actionComponent?: ReactNode
}

const TabsHeader: FC<Props> = (props) => {
  const { children, actionComponent } = props

  return (
    <div className="flex font-bold text-gray-700 border-b-[1px] border-gray-200">
      <div className="flex flex-grow">{children}</div>
      {actionComponent && <div>{actionComponent}</div>}
    </div>
  )
}

export default TabsHeader
