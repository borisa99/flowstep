import { FC, useContext } from 'react'
import { TabsContext } from '../context/tabsContext'

interface Props {
  tabKey: string | number
}

const TabContent: FC<Props> = (props) => {
  const { children, tabKey } = props

  const { selectedTab } = useContext(TabsContext)

  if (tabKey !== selectedTab) return null

  return <div>{children}</div>
}

export default TabContent
