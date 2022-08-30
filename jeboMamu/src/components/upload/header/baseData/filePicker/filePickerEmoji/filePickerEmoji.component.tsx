import Image from 'next/image'
import { FC, useState } from 'react'
import { FilePickerContentProps } from '../filePickerContent'
import { emojis } from './emojies'

interface Props extends FilePickerContentProps {
  handleClick: (emoji: string) => void
}
const FilePickerEmoji: FC<Props> = ({ handleClick, backgroundColor }) => {
  const [activeIndex, setActiveIndex] = useState<number>()

  const clickHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    handleClick(e.currentTarget.src)
  }
  return (
    <div className="grid grid-cols-7 gap-2">
      {emojis.map((image, index) => {
        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="flex justify-center items-center h-11 w-11 rounded-lg cursor-pointer transition-colors"
            style={{
              backgroundColor:
                index === activeIndex ? (backgroundColor as string) : '',
            }}
          >
            <Image
              src={`/emojis/${image}.svg`}
              alt="Emoji"
              className="my-4"
              width={24}
              height={24}
              onClick={clickHandler}
            />
          </div>
        )
      })}
    </div>
  )
}
export default FilePickerEmoji
