import { FC } from 'react'

type Props = {
  ImageComponent: FC
  title: string
}
const ContentImageHeader: FC<Props> = ({ children, ImageComponent, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex items-center justify-center mt-[-30px]">
        <ImageComponent />
      </div>
      <span className="text-center text-xl font-semibold">{title}</span>
      <span className="text-center">{children}</span>
    </div>
  )
}

export default ContentImageHeader
