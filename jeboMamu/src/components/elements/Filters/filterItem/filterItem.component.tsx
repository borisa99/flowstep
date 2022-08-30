import { FC } from 'react'
import { IFilterItem } from '@/components/types/filter.types'
import Icon from '../../Icon/icon.component'
import classnames from 'classnames'

interface Props {
  item: IFilterItem
}

const FilterItem: FC<Props> = (props) => {
  const {
    item: { name, selected },
  } = props

  const filterItemClasses = classnames(
    'text-gray-800 cursor-pointer flex items-center',
    {
      'text-blue-600': selected,
      'font-bold': selected,
      'hover:text-gray-900': !selected,
    }
  )

  const itemClickHandler = () => {
    // TODO: Implement
  }

  return (
    <div className={filterItemClasses} onClick={itemClickHandler}>
      {name}
      {selected && <Icon icon="Cancel" className="text-2xl ml-[0.4rem]" />}
    </div>
  )
}

export default FilterItem
