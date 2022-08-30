import { createContext } from 'react'

interface ITabContext {
  selectedTab: string | number | null
  setSelectedTab: (key: string | number) => void
}

const initialState: ITabContext = {
  selectedTab: null,
  setSelectedTab: () => null,
}

export const TabsContext = createContext(initialState)
