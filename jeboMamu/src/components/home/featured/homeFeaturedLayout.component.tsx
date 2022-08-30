import { FC } from 'react'
import Image from 'next/image'

import HomeFeaturedSignUp from './signup/homeFeaturedSignUp.component'
import HomeFeaturedLatest from './latest/homeFeaturedLatest.component'
import { useAppSelector } from '@/redux/hooks'
import { selectLoading } from '@/redux/slices/auth.slice'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'

type Props = {
  isAuthenticated?: boolean
  latestCount?: number
  signup?: (email: string) => void
}

export const HomeFeatureLayout: FC<Props> = ({
  isAuthenticated,
  latestCount,
  signup,
}) => {
  const loading = useAppSelector(selectLoading)

  function handleSignUp(email: string) {
    if (signup) {
      signup(email)
    }
  }

  return (
    <div className="flex justify-between items-center h-featured bg-gray-25 text-gray-900 py-16 px-[calc((100vw_-_1040px)/2)] -mx-[calc((100vw_-_1040px)/2)]">
      <div className="w-128 text-left">
        {loading ? (
          <Spinner size={Sizes.lg} />
        ) : isAuthenticated ? (
          <HomeFeaturedLatest latestCount={latestCount} />
        ) : (
          <HomeFeaturedSignUp signup={handleSignUp} />
        )}
      </div>
      <div className="pt-16 pointer-events-none">
        <Image src="/phones.svg" height={400} width={400} alt="Phones" />
      </div>
    </div>
  )
}

export default HomeFeatureLayout
