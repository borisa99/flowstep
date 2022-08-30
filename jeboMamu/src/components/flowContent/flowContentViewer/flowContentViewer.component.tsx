import { FC } from 'react'
import Popup from '@/components/elements/Popup/popup.component'
import { AnimatePresence } from 'framer-motion'
// import ContentNavigation from '@/components/elements/ContentNavigation/contentNavigation.component'
interface Props {
  show: boolean
  totalItems: number
  index: number
  modalClassName?: string
  setIndex: (nextIndex: number) => void
  onClose: () => void
}

const FlowContentViewer: FC<Props> = (props) => {
  const {
    show,
    // index,
    // totalItems,
    // setIndex,
    onClose,
    children,
    modalClassName,
  } = props

  return (
    <div className={`absolute ${show ? 'inset-0' : ''}`}>
      <AnimatePresence exitBeforeEnter={true}>
        {show && (
          <Popup
            onClose={onClose}
            containerClassNames="!items-start pt-14"
            modalClassNames={`h-[calc(100vh_-_4rem)] !bottom-1 w-[calc(100vw_-_1rem)] overflow-hidden relative ${modalClassName}`}
          >
            <div className="absolute inset-0 top-16">
              <div className="relative h-full justify-center flex">
                {children}
                {/* <div className="absolute bottom-2 w-full">
                  <ContentNavigation
                    index={index}
                    setIndex={setIndex}
                    totalItems={totalItems}
                    className="mx-auto"
                  />
                </div> */}
              </div>
            </div>
          </Popup>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FlowContentViewer
