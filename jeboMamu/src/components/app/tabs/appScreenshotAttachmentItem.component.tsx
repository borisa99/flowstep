import { FC } from 'react'

type Props = {
  image: string
  title: string
}

const AppScreenshotAttachmentItem: FC<Props> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`${'h-[537px] w-62 rounded-2xl'} group relative bg-gray-200 mb-2 overflow-hidden bg-cover ${
          image && 'cursor-pointer'
        }`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className={`text-gray-700 text-center text-base`}>{title}</div>
    </div>
  )
}

export default AppScreenshotAttachmentItem
