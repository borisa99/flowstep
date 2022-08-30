import React, {
  useMemo,
  useState,
  forwardRef,
  FunctionComponent,
  InputHTMLAttributes,
  ChangeEvent,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { Size, Type, Variant } from '@/components/types/textField.types'
import Icon from '@/components/elements/Icon/icon.component'
import { InputMaybe } from '@/graphql/generated'

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  defaultValue?: string | null | InputMaybe<string>
  label?: string
  name?: string
  variant?: Variant
  elementSize?: Size
  type?: Type
  iconName?: string
  error?: string
  children?: ReactNode
  handleReset?: () => void
  onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void
  handleEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TextField: FunctionComponent<Props> = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const {
      label = '',
      variant = Variant.default,
      elementSize = Size.normal,
      type = Type.text,
      className,
      disabled,
      iconName,
      error,
      name,
      readOnly,
      defaultValue,
      children,
      onTextChange,
      handleReset,
      handleEnter,
      handleKeyDown,
      value: controlledValue,
      ...rest
    } = props

    const [internalValue, setInternalValue] = useState<string>(
      defaultValue ?? ''
    )
    const value = (controlledValue ?? internalValue).toString()
    const [fieldType, setFieldType] = useState<Type>(type)

    const togglePeekPassword = () => {
      fieldType === Type.text
        ? setFieldType(Type.password)
        : setFieldType(Type.text)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value)
      if (onTextChange) {
        onTextChange(event)
      }
    }

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleEnter && handleEnter(event)
      } else {
        handleKeyDown && handleKeyDown(event)
      }
    }
    const onReset = () => {
      setInternalValue('')
      if (handleReset) {
        handleReset()
      }
    }

    const containerClasses = useMemo(() => {
      return classNames(
        className,
        'group inline-block w-full rounded-lg relative bg-gray-100 min-w-[5rem]',
        {
          'h-14': elementSize === Size.large,
          'h-12': elementSize === Size.normal,
          'h-10': elementSize === Size.small,
        }
      )
    }, [elementSize, className])

    const borderClasses = useMemo(() => {
      return classNames(
        'absolute w-full h-full pointer-events-none border-2 rounded-lg',
        {
          'border-critical': !!error && !disabled,
          'border-transparent': !error || disabled,
          'group-hover:border-gray-300': !error && !disabled,
          'group-focus-within:border-blue-600': !error,
          'group-focus-within:group-hover:border-blue-600': !error,
        }
      )
    }, [error, disabled])

    const labelClasses = useMemo(() => {
      return classNames(
        `absolute w-full overflow-hidden text-ellipsis whitespace-nowrap
          pointer-events-none text-gray-700 text-base transition-all duration-300`,
        {
          'text-gray-500': disabled,
          'pt-4': elementSize === Size.large && value.length === 0,
          'pt-3': elementSize === Size.normal,
          'pt-2':
            elementSize === Size.small ||
            (elementSize === Size.large && value.length > 0),
          'pt-1': elementSize === Size.normal && value.length > 0,
          'pl-10': !!iconName,
          'pl-4': !iconName && elementSize === Size.large,
          'pl-3': !iconName && elementSize === Size.normal,
          'pl-2': !iconName && elementSize === Size.small,
          'text-xs': value.length > 0,
          hidden:
            (variant === Variant.minimalistic || elementSize === Size.small) &&
            value.length > 0,
          'group-focus-within:hidden':
            variant === Variant.minimalistic || elementSize === Size.small,
          'group-focus-within:text-xs': true,
          'group-focus-within:pt-2': elementSize === Size.large,
          'group-focus-within:pt-1': elementSize === Size.normal,
        }
      )
    }, [variant, elementSize, iconName, value, disabled])

    const inputClasses = useMemo(() => {
      return classNames(
        `absolute w-full h-full bg-transparent text-base rounded-lg outline-none caret-blue-600`,
        {
          'text-gray-900': !disabled,
          'text-gray-500': disabled,
          'pt-4':
            elementSize === Size.large &&
            variant !== Variant.minimalistic &&
            label.length > 0,
          'pt-3':
            elementSize === Size.normal &&
            variant !== Variant.minimalistic &&
            label.length > 0,
          'pl-10': !!iconName,
          'pl-4': !iconName && elementSize === Size.large,
          'pl-3': !iconName && elementSize === Size.normal,
          'pl-2': !iconName && elementSize === Size.small,
          'caret-critical': !!error,
        }
      )
    }, [elementSize, variant, iconName, label.length, error, disabled])

    const iconClasses = useMemo(() => {
      return classNames('flex items-center justify-center text-2xl', {
        'text-gray-500': !error,
        'group-hover:text-gray-700': !error && !disabled,
        'text-critical': !!error,
        'group-focus-within:text-blue-600': !error,
        'group-focus-within:group-hover:text-blue-600': !error,
      })
    }, [error, disabled])

    return (
      <div className="font-regular">
        <div className={containerClasses}>
          <div className={borderClasses} />
          {iconName && (
            <div className="absolute flex items-center justify-center h-full w-10">
              <Icon icon={iconName} className={iconClasses} />
            </div>
          )}
          <label htmlFor={name} className={labelClasses}>
            {label}
          </label>
          <input
            ref={ref}
            className={inputClasses}
            name={name}
            type={fieldType}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
            autoComplete="off"
            {...rest}
          />
          <div className=" absolute top-0 bottom-0 right-0 flex flex-row-reverse items-center">
            {children}
            {error && (
              <div className="mr-2 flex h-full items-center">
                <Icon
                  icon="Alert-triangle"
                  className="text-critical text-2xl"
                />
              </div>
            )}
            {type === Type.password && !disabled && (
              <div
                className={`${
                  !error ? 'mr-2' : 'mr-3'
                } flex h-full items-center cursor-pointer`}
                onClick={togglePeekPassword}
              >
                <Icon
                  icon={fieldType === Type.password ? 'Eye' : 'Eye-closed'}
                  className="text-gray-700 text-2xl"
                />
              </div>
            )}
            {type === Type.text && value.length > 0 && !disabled && !readOnly && (
              <div
                className={`${
                  !error ? 'mr-2' : 'mr-3'
                } flex h-full items-center cursor-pointer`}
                onClick={onReset}
              >
                <Icon icon="Cancel" className="text-gray-700 text-2xl" />
              </div>
            )}
          </div>
        </div>
        {error && !disabled && (
          <div className="text-critical  font-semibold text-sm m-0">
            {error}
          </div>
        )}
      </div>
    )
  }
)
TextField.displayName = 'TextField'

export default TextField
