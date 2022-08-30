import { Size, Sizes } from '@/components/types/sizes.types'
import React, { FunctionComponent } from 'react'

type Props = {
  size: Sizes
  label?: string
  className?: string
}

const sizes: Size = {
  [Sizes.xs]: 'text-xs',
  [Sizes.sm]: 'text-sm',
  [Sizes.base]: 'text-base',
  [Sizes.lg]: 'text-lg',
}

const Separator: FunctionComponent<Props> = ({ size, label, className }) => {
  const sizeClasses = sizes[size]
  let beforeClasses =
    'before:bg-gray-200 before:my-auto before:h-px before:grow'
  let afterClasses = 'after:bg-gray-200 after:my-auto after:h-px after:grow'
  if (label) {
    beforeClasses += ' before:mr-3'
    afterClasses += ' after:ml-3'
  }
  return (
    <div
      className={`flex items-center justify-center w-full bg-transparent text-grey-700 cursor-pointer ${sizeClasses} ${beforeClasses} ${afterClasses} ${className}`}
    >
      {label}
    </div>
  )
}

export default Separator
