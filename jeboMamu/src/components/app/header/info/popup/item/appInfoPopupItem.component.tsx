import { FC } from 'react'
import StarSVG from '@/assets/images/svg/star.svg'

type Props = {
  label: string
  value?: string | null
  hideBorder?: boolean
  showStar?: boolean
}
const AppInfoPopupItem: FC<Props> = ({
  label,
  value,
  hideBorder,
  showStar,
}) => {
  return (
    <div
      className={`flex justify-between items-center py-4 text-lg ${
        !hideBorder && ' border-b-1 border-gray-200'
      }`}
    >
      <span className="text-gray-700">{label}</span>
      <div className="flex justify-center items-center">
        <span className={`${showStar && 'mt-1 mr-1'}`}>{value}</span>
        {showStar && <StarSVG />}
      </div>
    </div>
  )
}

export default AppInfoPopupItem
