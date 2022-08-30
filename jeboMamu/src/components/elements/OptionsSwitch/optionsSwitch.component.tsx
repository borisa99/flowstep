import { FC } from 'react'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, { ButtonStyle } from '../Button/button.component'

interface Props {
  options: string[]
  optionIcons?: string[]
  activeOption: string
  light?: boolean
  className?: string
  onSwitch: (option: string) => void
}

const OptionsSwitch: FC<Props> = (props) => {
  const { options, optionIcons, activeOption, className, light, onSwitch } =
    props
  if (options.length === 2) {
    return (
      <div
        className={`flex font-bold text-gray-white rounded-lg h-10 p-1 ${className}`}
      >
        {options.map((option, index) => {
          const isActiveOption = activeOption === option
          const textColor = isActiveOption
            ? 'text-gray-900'
            : light
            ? 'text-gray-900'
            : 'text-white'

          return (
            <Button
              key={option}
              size={Sizes.sm}
              color={isActiveOption ? Colors.white : Colors.transparent}
              style={ButtonStyle.solid}
              label={option}
              hover={false}
              className={`!px-3 rounded mr-1 last:mr-0 ${textColor}`}
              full
              iconName={optionIcons ? optionIcons[index] : undefined}
              onClick={() => {
                if (!isActiveOption) {
                  onSwitch(option)
                }
              }}
            />
          )
        })}
      </div>
    )
  }

  return null
}

export default OptionsSwitch
