export interface IFilterItem {
  name: string
  id: number
  selected: boolean
}

export interface IFilter {
  filterName: string
  items: IFilterItem[]
}

// Max number of items visible in collapsed filter
export const DEFAULT_ITEMS_NUMBER = 5
