import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { motion, Variants } from 'framer-motion'
import { IFilter } from '@/components/types/filter.types'
import FilterGroup from '../filterGroup/filterGroup.component'
import Icon from '@/components/elements/Icon/icon.component'

interface Props {
  onChange?: () => void // TODO: Make mandatory
  filters: IFilter[]
}

const FilterContainer: FC<Props> = (props) => {
  const { filters } = props
  const { t } = useTranslation('discover')

  const variants: Variants = {
    hidden: {
      maxHeight: 0,
    },
    visible: {
      maxHeight: '100vh',
      transition: {
        duration: 0.25,
        bounce: 0,
      },
    },
    exit: {
      maxHeight: 0,
      transition: {
        duration: 0.25,
        bounce: 0,
      },
    },
  }

  return (
    <motion.div
      key="filter-container"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-gray-100 px-8 rounded-2xl overflow-hidden"
    >
      <div className="flex py-8">
        {filters.map((e, i) => (
          <FilterGroup key={i} title={e.filterName} items={e.items} />
        ))}
      </div>
      <div className="border-t-[1px] border-gray-200 cursor-pointer h-14 flex items-center justify-center gap-3">
        <Icon icon="Cancel" className="text-gray-900 text-2xl" />
        <span className="font-bold">{t('reset-filters-label')}</span>
      </div>
    </motion.div>
  )
}

export default FilterContainer
