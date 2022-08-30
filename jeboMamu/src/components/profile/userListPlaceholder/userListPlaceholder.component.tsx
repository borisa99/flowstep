import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import Icon from '@/components/elements/Icon/icon.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { FC } from 'react'

interface Props {
  title: string
  description: string
  iconName: string
  btnLabel?: string
  btnCallback?: () => void
}

const UserListPlaceholder: FC<Props> = (props) => {
  const { title, description, iconName, btnLabel, btnCallback } = props

  return (
    <div className="flex flex-col items-center justify-center h-[20.25rem]">
      <Icon icon={iconName} className="text-5xl" />
      <div className="text-xl font-bold mt-3">{title}</div>
      <div className="text-gray-700 mb-8">{description}</div>
      {btnLabel && (
        <Button
          label={btnLabel}
          color={Colors.blue}
          size={Sizes.base}
          style={ButtonStyle.solid}
          onClick={btnCallback}
        />
      )}
    </div>
  )
}

export default UserListPlaceholder
