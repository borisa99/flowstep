import { Alignments } from '@/components/types/aligment.types'
import { Sizes } from '@/components/types/sizes.types'
import { FC } from 'react'
import CloseButton, {
  CloseButtonStyle,
} from '../../CloseButton/closeButton.component'
import Separator from '../../Separator/separator.component'
import { motion } from 'framer-motion'

type Props = {
  title?: string
  subtitle?: string
  alignment?: Alignments
  separator?: boolean
  hideClose?: boolean
  className?: string
  onClose: (event: React.MouseEvent<HTMLElement>) => void
}

const PopupHeader: FC<Props> = ({
  title,
  subtitle,
  alignment,
  separator,
  hideClose = false,
  className,
  onClose,
}) => {
  const alignmentStyle: { [key in Alignments]: string } = {
    left: 'text-left items-start',
    right: 'text-right items-end',
    center: 'text-center items-center',
  }

  const alignmentClasses = alignmentStyle[alignment || Alignments.left]
  const variants = {
    hidden: {
      transform: 'translateY(30px)',
    },
    visible: {
      transform: 'translateY(0px)',
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <>
      <motion.div id="popup-header" className="flex relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className={`flex grow flex-col justify-center  text-right p-8 ${alignmentClasses} ${className}`}
        >
          {title && (
            <div
              id="popup-header__title"
              className="text-2xl font-bold text-gray-900"
            >
              {title}
            </div>
          )}
          {subtitle && (
            <div
              id="popup-header__subtitle"
              className="text-base text-center text-gray-700 mt-2"
            >
              {subtitle}
            </div>
          )}
        </motion.div>
        {!hideClose && (
          <CloseButton
            size={Sizes.lg}
            style={CloseButtonStyle.default}
            className="absolute right-4 top-4"
            onClick={(e) => onClose(e)}
          />
        )}
      </motion.div>
      {separator && <Separator label="" size={Sizes.base} className="px-8" />}
    </>
  )
}

export default PopupHeader
