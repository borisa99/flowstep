import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useRouter } from 'next/router'

import HeaderDropdownItem from '../item/headerDropdownItem.component'
import Separator from '@/components/elements/Separator/separator.component'
import { Sizes } from '@/components/types/sizes.types'

import { clearCookies } from '@/apollo-client'
import { logoutUser } from '@/redux/slices/auth.slice'
import { setShowSettingsPopup } from '@/redux/slices/ui/ui.slice'
import { useAppDispatch } from '@/redux/hooks'
import { UserResponse } from '@/graphql/generated'
import { RoleValue } from '@/types/RoleValue'

type Props = {
  isOpen: boolean
  user: UserResponse
  onClose: () => void
}

const HeaderDropdownCard: FC<Props> = ({ isOpen, onClose, user }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const cardClassNames = useMemo(() => {
    return classNames(
      'absolute right-0 flex flex-col py-2 transition-all duration-300 ease-out bg-white shadow-default rounded-lg  w-[280px] z-10 mt-1',
      {
        'opacity-0 pointer-events-none': !isOpen,
        'opacity-1': isOpen,
      }
    )
  }, [isOpen])

  const openSettingsPopup = () => {
    dispatch(setShowSettingsPopup(true))
    onClose()
  }

  const navigateToProfile = () => {
    router.push(`/profile/${user.id}?user=${encodeURI(user.first_name)}`)
    onClose()
  }

  const logout = () => {
    clearCookies()
    dispatch(logoutUser())
    router.push('/')
  }
  return (
    <div className={cardClassNames}>
      <div className="flex flex-col px-4 py-2 dur">
        <span className="text-base font-bold text-gray-900">
          {user.first_name}
        </span>
        <span className="text-xs text-gray-700 ">{user.email}</span>
      </div>
      <div>
        <div onClick={navigateToProfile}>
          <HeaderDropdownItem icon="User" title="Profile" />
        </div>
        <div onClick={openSettingsPopup}>
          <HeaderDropdownItem icon="Settings-alt" title="Settings" />
        </div>
      </div>
      <Separator size={Sizes.base} className="my-2" />
      <div>
        {user.roles.includes(RoleValue.PREMIUM) ? (
          <>
            <HeaderDropdownItem icon="Diamond" title="Manage Plan" />
            <HeaderDropdownItem icon="User-plus" title="Manage Team" />
          </>
        ) : (
          <>
            <HeaderDropdownItem
              icon="Diamond"
              iconColor="text-warning"
              title="Go Premium"
              onClick={() => router.push('/pricing')}
            />
          </>
        )}

        <HeaderDropdownItem icon="Comment" title="Help" />
      </div>
      <Separator size={Sizes.base} className="my-2" />
      <div onClick={logout}>
        <HeaderDropdownItem icon="Logout" title="Log out" />
      </div>
    </div>
  )
}
export default HeaderDropdownCard
