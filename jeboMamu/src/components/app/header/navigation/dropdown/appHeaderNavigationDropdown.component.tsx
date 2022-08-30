import { FC, SetStateAction, useState, Dispatch, useRef } from 'react'

import { useTranslation } from 'next-i18next'

import useClickOutside from '@/hooks/use-click-outside/use-click-outside'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import Dropdown from '@/components/elements/Dropdown/dropdown.component'
import DropdownItem from '@/components/elements/Dropdown/item/dropdownItem.component'

type Props = {
  handleRedirect: () => void
  handleSave: () => void
  handleShare: Dispatch<SetStateAction<boolean>>
}
const AppHeaderNavigationDropdown: FC<Props> = ({
  handleRedirect,
  handleSave,
  handleShare,
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation(['common', 'app'])

  useClickOutside(containerRef, () => setIsMoreOpen(false))

  return (
    <div className="relative" ref={containerRef}>
      <Button
        label="..."
        color={Colors.grey}
        size={Sizes.base}
        style={ButtonStyle.solid}
        onClick={() => setIsMoreOpen(!isMoreOpen)}
      />
      <Dropdown isOpen={isMoreOpen} styles={'w-[240px]'}>
        <DropdownItem
          title={t('app-store-label', { ns: 'app' })}
          icon="App-store"
          onClick={() => handleRedirect()}
          small
        />
        <DropdownItem
          title={t('save-label')}
          icon="Bookmark"
          onClick={handleSave}
          small
        />
        <DropdownItem
          title={t('share-label')}
          icon="Share-box"
          onClick={() => handleShare(true)}
          small
        />
      </Dropdown>
    </div>
  )
}

export default AppHeaderNavigationDropdown
