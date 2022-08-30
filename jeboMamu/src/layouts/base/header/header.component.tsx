import { FC } from 'react'

import HeaderNavigation from './navigation/headerNavigation.component'
import HeaderSearch from './search/headerSerach.component'

import HeaderActions from './actions/headerActions.component'
import { useAppSelector } from '@/redux/hooks'
import { selectLoading, selectUser } from '@/redux/slices/auth.slice'

import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'

import HeaderUser from './user/headerUser.component'
import { UserResponse } from '@/graphql/generated'

const Header: FC = () => {
  const user = useAppSelector(selectUser)
  const loading = useAppSelector(selectLoading)
  return (
    <div className="grid grid-cols-3 h-header px-5 !py-2 border-b  border-b-gray-100">
      <HeaderNavigation userId={user?.id} />
      <HeaderSearch />
      <div className="flex gap-5 justify-end items-center pb-2">
        {loading ? (
          <div>
            <Spinner size={Sizes.base} />
          </div>
        ) : user ? (
          <HeaderUser user={user as UserResponse} />
        ) : (
          <HeaderActions />
        )}
      </div>
    </div>
  )
}

export default Header
