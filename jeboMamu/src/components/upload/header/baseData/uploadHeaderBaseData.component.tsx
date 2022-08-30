import { FC } from 'react'

import useFlow from '@/hooks/use-flow/use-flow'
import { useAppDispatch } from '@/redux/hooks'
import { setTitle } from '@/redux/slices/flow/flow.slice'
import { DisabledProps } from '@/types/DisabledProps'
import BaseDataFilePicker from './filePicker/baseDataFilePicker.component'
import UploadFlatInput from '../../input/uploadFlatInput.component'

const UploadHeaderBaseData: FC<DisabledProps> = ({ isDisabled }) => {
  const dispatch = useAppDispatch()
  const { object } = useFlow()
  const handleDispatch = (value: string) => {
    dispatch(setTitle(value))
  }
  return (
    <div className="flex items-center text-2xl font-semibold">
      <BaseDataFilePicker isDisabled={isDisabled} />
      <UploadFlatInput
        handleBlur={handleDispatch}
        defaultValue={object.title}
      />
    </div>
  )
}

export default UploadHeaderBaseData
