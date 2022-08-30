import { FunctionComponent } from 'react'
import SpinnerSVG from '@/assets/images/svg/spinner.svg'
import { Size, Sizes } from '@/components/types/sizes.types'

type Props = {
  size: Sizes
}

const sizes: Size = {
  [Sizes.sm]: 'w-sm',
  [Sizes.base]: 'h-4.5 w-4.5',
  [Sizes.m]: 'h-5 w-5',
  [Sizes.lg]: 'h-6 w-6',
}

const Spinner: FunctionComponent<Props> = ({ size }) => {
  const sizeClasses = sizes[size]

  return <SpinnerSVG className={`animate-spin m-auto ${sizeClasses}`} />
}

export default Spinner
