import { FC, useContext } from 'react'
import { TabsContext } from '../context/tabsContext'

interface Props {
  label: string
  number?: number
  tabKey: string | number
}

const Tab: FC<Props> = (props) => {
  const { label, number, tabKey } = props

  const { selectedTab, setSelectedTab } = useContext(TabsContext)

  const tabActive = selectedTab === tabKey

  const tabClickHandler = () => {
    setSelectedTab(tabKey)
  }

  return (
    <div
      onClick={tabClickHandler}
      className={`relative cursor-pointer pt-4 pb-[15px] ${
        number ? 'mr-5' : 'mr-4'
      } last:mr-0`}
    >
      <span className={`${tabActive ? 'text-gray-900' : ''}`}>{label}</span>
      <span className="text-gray-500 font-normal ml-2">{number}</span>
      {tabActive && (
        <div className="absolute w-full bottom-[-1px] rounded-t-sm bg-gray-900 h-0.5" />
      )}
    </div>
  )
}

export default Tab
