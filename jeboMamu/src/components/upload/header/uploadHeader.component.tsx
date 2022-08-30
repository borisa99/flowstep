import { useAppSelector } from '@/redux/hooks'
import { isDisabled } from '@/redux/slices/flow/flow.slice'
import UploadHeaderActions from './actions/uploadHeaderActions.component'
import UploadBaseData from './baseData/uploadHeaderBaseData.component'

const UploadHeader = () => {
  const disabled = useAppSelector(isDisabled)

  return (
    <div className="flex justify-between py-16">
      <UploadBaseData isDisabled={disabled} />
      <UploadHeaderActions isDisabled={disabled} />
    </div>
  )
}
export default UploadHeader
