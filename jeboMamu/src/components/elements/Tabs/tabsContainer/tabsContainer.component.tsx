import { FC, useState, useEffect } from 'react'
import { TabsContext } from '../context/tabsContext'

interface Props {
  defaultTabKey: string | number
  onChange?: (tabKey: string) => void
}

const TabsContainer: FC<Props> = (props) => {
  const { children, defaultTabKey, onChange } = props
  const [selectedTab, setSelectedTab] = useState<string | number>(defaultTabKey)

  useEffect(() => {
    onChange?.(selectedTab as string)
  }, [selectedTab, onChange])

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabsContext.Provider>
  )
}

export default TabsContainer
