import { useRouter } from 'next/router'

import Logo from '@/assets/images/svg/logo.svg'
import { FC } from 'react'

type Props = {
  userId: string
}
const HeaderNavigation: FC<Props> = ({ userId }) => {
  const router = useRouter()
  return (
    <div className="flex items-center gap-6">
      <Logo className="cursor-pointer" onClick={() => router.push('/')} />
      <span
        className="transition ease-out delay-75 duration-500 text-gray-900 font-bold hover:text-blue-600 cursor-pointer"
        onClick={() => router.push('/discover')}
      >
        Discover
      </span>

      <span
        className="transition ease-out delay-75 duration-500 text-gray-900 font-bold hover:text-blue-600 cursor-pointer"
        onClick={() => router.push(`/profile/${userId}?tab=collections`)}
      >
        Saved
      </span>
    </div>
  )
}

export default HeaderNavigation
