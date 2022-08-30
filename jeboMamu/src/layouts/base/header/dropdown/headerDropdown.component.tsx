import { useState, useRef, FC } from 'react'

import HeaderDropdownCard from './card/headerDropdownCard.component'
import Avatar, {
  AvatarStyle,
} from '@/components/elements/Avatar/avatar.component'
import { Sizes } from '@/components/types/sizes.types'
import useClickOutside from '@/hooks/use-click-outside/use-click-outside'
import { UserResponse } from '@/graphql/generated'

type Props = {
  user: UserResponse
}

const HeaderDropdown: FC<Props> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const headerDropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside(headerDropdownRef, () => setIsOpen(false))

  return (
    <div ref={headerDropdownRef} className="relative">
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Avatar
          iconName="User"
          size={Sizes.sm}
          style={AvatarStyle.circle}
          className="bg-gray-100 text-grey-700"
        />
      </div>
      <HeaderDropdownCard
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        user={user}
      />
    </div>
  )
}
export default HeaderDropdown
