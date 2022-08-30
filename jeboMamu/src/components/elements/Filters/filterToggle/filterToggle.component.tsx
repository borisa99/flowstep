import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import Icon from '@/components/elements/Icon/icon.component'

interface Props {
  count: number
  toggleVisible: () => void
}

const FilterToggle: FC<Props> = (props) => {
  const { count, toggleVisible } = props
  const { t } = useTranslation('discover')

  return (
    <div
      onClick={toggleVisible}
      className="cursor-pointer select-none h-full flex items-center text-gray-900 pl-5 pr-6"
    >
      <Icon icon="Settings-adjust" className="text-2xl" />
      <div className="pl-[0.7rem]">{t('filter-label')}</div>
      {count > 0 && <div>&nbsp;({count})</div>}
    </div>
  )
}

export default FilterToggle
