import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Size, Sizes } from '@/components/types/sizes.types'
import { Color, Colors } from '@/components/types/colors.types'

import Spinner from '../Spinner/spinner.component'
import Icon from '@/components/elements/Icon/icon.component'

export enum ButtonStyle {
  solid = 'solid',
  disabled = 'disabled',
  loading = 'loading',
  skeleton = 'skeleton',
  success = 'success',
}

type Props = {
  label: string
  style: ButtonStyle
  color: Colors
  size: Sizes
  IconComponent?: FunctionComponent
  iconName?: string
  iconUrl?: string
  outline?: boolean
  hover?: boolean
  full?: boolean
  persistColor?: boolean
  link?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: FunctionComponent<Props> = ({
  label,
  iconName,
  IconComponent,
  iconUrl,
  style,
  color,
  size,
  outline,
  hover = true,
  full = false,
  persistColor = false,
  link,
  onClick,
  className,
  type,
}) => {
  const sizes: Size = {
    [Sizes.base]: `${full && 'w-full'} h-10 py-2`,
    [Sizes.m]: `${full && 'w-full'} h-14 py-4`,
    [Sizes.lg]: `${full && 'w-full'} h-16 py-4`,
  }

  const imgHeight: Size = {
    [Sizes.base]: 20,
    [Sizes.lg]: 22,
  }

  const imgWidth: Size = {
    [Sizes.base]: 40,
    [Sizes.lg]: 44,
  }

  const buttonColors: { [key in ButtonStyle]: Color } = {
    solid: {
      red: outline
        ? `border-critical ${hover && 'hover:bg-critical'} text-critical`
        : `bg-critical text-white`,
      green: outline
        ? `border-success ${hover && 'hover:bg-success'} text-success`
        : `bg-success text-white`,
      orange: outline
        ? `border-warning ${hover && 'hover:bg-warning'} text-warning`
        : `bg-warning text-white`,
      blue: outline
        ? `border-blue-200 ${
            hover && 'hover:bg-blue-200'
          } active:bg-blue-300 active:border-blue-300 text-blue-900`
        : `bg-blue-600 text-white ${hover && 'hover:bg-blue-700'} ${
            !persistColor && 'active:bg-blue-800'
          }`,
      grey: outline
        ? `border-gray-300 ${
            hover && 'hover:bg-gray-200'
          } active:bg-gray-300 active:border-gray-300 text-gray-900`
        : `bg-gray-100 ${hover && 'hover:bg-gray-200'} ${
            !persistColor &&
            'active:bg-gray-300 focus:bg-blue-100 focus:text-blue-900'
          } text-gray-900`,
      lightBlue: `bg-blue-100 text-blue-900`,
      white: `bg-white ${hover && 'hover:bg-gray-200'} ${
        !persistColor && 'active:bg-gray-300 active:border-gray-300'
      } text-gray-900`,
      transparent: `bg-transparent ${hover && 'hover:bg-gray-200'} ${
        !persistColor && 'active:bg-gray-300 active:border-gray-300'
      } text-gray-900`,
    },
    disabled: {
      red: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      green: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      orange: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      blue: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      grey: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      white: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      transparent: 'bg-gray-100 text-gray-500 cursor-not-allowed',
    },
    loading: {
      red: 'bg-criticalBg text-white cursor-wait',
      green: 'bg-successBg text-white cursor-wait',
      orange: 'bg-warningBg text-white cursor-wait',
      blue: 'bg-blue-100 text-white cursor-wait',
      grey: '!bg-gray-100 text-gray-500 cursor-wait',
      white: '!bg-gray-100 text-gray-500 cursor-wait',
      transparent: 'bg-gray-100 text-gray-500 cursor-wait',
    },
    success: {
      red: 'bg-criticalBg text-white cursor-wait',
      green: 'bg-successBg text-white cursor-wait',
      orange: 'bg-warningBg text-white cursor-wait',
      blue: 'bg-blue-100 text-white cursor-wait',
      grey: '!bg-gray-100 text-gray-500 cursor-wait',
      white: '!bg-gray-100 text-gray-500 cursor-wait',
      transparent: 'bg-gray-100 text-gray-500 cursor-wait',
    },
    skeleton: {
      grey: '',
    },
  }

  function getIcon() {
    if (IconComponent) {
      return <IconComponent />
    }
    if (iconName) {
      return <Icon icon={iconName} className="text-current text-2xl" />
    }
    if (iconUrl) {
      const height = imgHeight[size]
      const width = imgWidth[size]

      return (
        <Image
          height={height}
          width={width}
          src={iconUrl}
          alt="Icon"
          objectFit="contain"
        />
      )
    }
  }

  const sizeClasses = sizes[size]
  const colorClasses = buttonColors[style][color]
  const loadingClasses = buttonColors[ButtonStyle.loading][color]
  const outlineClasses = outline ? 'bg-white border' : 'border-none'
  const transitionClasses = hover && 'transition-colors duration-200'
  const IconClasses = iconName || IconComponent ? 'mr-2.5' : ''

  return (
    <button
      className={`flex justify-center items-center relative !cursor-pointer font-bold rounded-lg px-4 ${sizeClasses} ${outlineClasses} ${transitionClasses} ${className}
      ${
        style === ButtonStyle.loading || style === ButtonStyle.success
          ? loadingClasses
          : colorClasses
      }`}
      onClick={(e) => style !== ButtonStyle.disabled && onClick && onClick(e)}
      disabled={style === ButtonStyle.loading || style === ButtonStyle.success}
      type={type}
    >
      <div
        className={`flex transition ease-out delay-75 duration-300 
        ${
          style === ButtonStyle.loading || style === ButtonStyle.success
            ? 'opacity-0'
            : 'opacity-100'
        }`}
      >
        <div className={`flex justify-center items-center ${IconClasses}`}>
          {getIcon()}
        </div>
        <span>{link ? <Link href={link}>{label}</Link> : label}</span>
      </div>
      <div
        className={`absolute transition ease-out delay-75 duration-300
         ${
           style === ButtonStyle.loading || style === ButtonStyle.success
             ? 'opacity-100'
             : 'opacity-0'
         }`}
      >
        {style === ButtonStyle.loading && <Spinner size={size} />}
        {style === ButtonStyle.success && (
          <div className="flex justify-center items-center bg-primary w-6 h-6 rounded-full">
            <Icon icon="Check" className="text-current text-2xl !text-white" />
          </div>
        )}
      </div>
    </button>
  )
}

export default Button
