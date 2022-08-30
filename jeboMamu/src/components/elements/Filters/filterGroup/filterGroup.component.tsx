import { FC, useState, useMemo } from 'react'

import { useTranslation } from 'next-i18next'

import {
  IFilterItem,
  DEFAULT_ITEMS_NUMBER,
} from '@/components/types/filter.types'
import FilterItem from '../filterItem/filterItem.component'

interface Props {
  title: string
  items: IFilterItem[]
  itemsNumberWhenCollapsed?: number
}

const FilterGroup: FC<Props> = (props) => {
  const { title, items, itemsNumberWhenCollapsed } = props
  const { t } = useTranslation('discover')
  const [expanded, setExpanded] = useState<boolean>(false)

  const collapsedCount = itemsNumberWhenCollapsed ?? DEFAULT_ITEMS_NUMBER

  const visibleItems = useMemo(() => {
    return expanded ? items : items.slice(0, collapsedCount)
  }, [items, expanded, collapsedCount])

  const moreToShow = useMemo(() => {
    if (visibleItems.length === items.length) {
      return 0
    }
    return items.length - visibleItems.length
  }, [items, visibleItems])

  return (
    <div className="flex-grow flex flex-col gap-3">
      <div className="font-bold">{title}</div>
      {visibleItems.map((e) => (
        <FilterItem key={e.id} item={e} />
      ))}
      {items.length > collapsedCount && (
        <span
          onClick={() => setExpanded((prev) => !prev)}
          className="font-bold cursor-pointer"
        >
          {expanded
            ? `${t('show-label')} ${t('less-label')}`
            : `${t('show-label')} ${moreToShow} ${t('more-label')}`}
        </span>
      )}
    </div>
  )
}

export default FilterGroup
