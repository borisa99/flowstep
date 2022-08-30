import { FC } from 'react'

import ClearIcon from '@/assets/images/svg/clear.svg'

type Props = {
  values: string[]
  handleClose: (index: number) => void
}

const Tags: FC<Props> = ({ values, handleClose }) => {
  return (
    <div className="w-full flex mt-2 flex-wrap">
      {values &&
        values.map((value, index) => (
          <div
            className="flex justify-center items-center bg-gray-100 py-[2px] px-2 rounded-md w-[max-content] mr-2 mb-1"
            key={index}
          >
            <span className="mr-2 font-semibold">{value}</span>
            <ClearIcon
              className="cursor-pointer"
              onClick={() => handleClose(index)}
            />
          </div>
        ))}
    </div>
  )
}

export default Tags
