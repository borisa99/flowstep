import {
  useState,
  FC,
  // useRef
} from 'react'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
// import { ContentType } from '@/components/types/content.types'
import FlowContentViewer from '@/components/flowContent/flowContentViewer/flowContentViewer.component'
import Tag, { TagStyle } from '@/components/elements/Tag/tag.component'
// import DetailsPopup from '../detailsPopup/detailsPopup.component'

interface Props {
  show: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attachment: any
  onClose: () => void
}

const AttachmentViewer: FC<Props> = (props) => {
  const { show, onClose, attachment } = props
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  // const lazyRoot = useRef(null)

  function handleDetailsClick() {
    setShowDetails(true)
  }

  function handleTagClick() {
    // TODO: Redirect to search with tag as query param
  }

  function handleCollectionClick() {
    // TODO: Redirect to Collection
  }

  return (
    <FlowContentViewer
      show={show}
      onClose={onClose}
      index={index}
      setIndex={setIndex}
      totalItems={3}
    >
      <div className="flex relative h-full">
        <div className="grow basis-16 w-full h-full -mt-16 pt-16 -mr-6 pr-6 box-content overflow-y-scroll no-scrollbar">
          <img
            className="max-w-[375px] w-full h-auto shadow-default rounded-double ml-auto z-10 mb-6"
            src={attachment.url}
            alt="Attachment Image"
          />
        </div>
        <div className="grow basis-0 w-full p-8">
          <h5 className="mb-2 text-gray-900">
            Purchase receipt on{' '}
            <span
              className="hover:text-blue-600 hover:underline hover:cursor-pointer"
              onClick={handleCollectionClick}
            >
              {attachment.collectionName}
            </span>
          </h5>

          <div className="flex mb-8">
            {attachment.tags.map((tag: string) => (
              <div key={tag}>
                <Tag
                  color={Colors.red}
                  label={tag}
                  size={Sizes.base}
                  iconUrl={'/images/fire.svg'}
                  style={TagStyle.light}
                  onClick={handleTagClick}
                />
              </div>
            ))}
            <div className="w-1 mx-2 text-gray-700">·</div>
            <div
              className="text-gray-700 text-base cursor-pointer hover:text-blue-600 hover:underline"
              onClick={handleDetailsClick}
            >
              Details
            </div>
          </div>
          <div className="flex justify-between w-xl py-4 border-solid border-b-[1px] border-gray-200">
            <div className="text-base text-gray-700">From</div>
            <div className="text-base text-gray-900">{attachment.from}</div>
          </div>
          <div className="flex justify-between w-xl py-4 border-solid border-b-[1px] border-gray-200">
            <div className="text-base text-gray-700">Subject</div>
            <div className="text-base text-gray-900">{attachment.subject}</div>
          </div>
        </div>
      </div>
      {showDetails && (
        <></>
        // <DetailsPopup
        //   onClose={() => setShowDetails(false)}
        //   type={ContentType.attachment}
        //   details={attachment}
        // />
      )}
    </FlowContentViewer>
  )
}

export default AttachmentViewer
