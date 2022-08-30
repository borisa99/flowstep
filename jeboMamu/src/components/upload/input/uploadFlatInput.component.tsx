import { FC, useEffect, useMemo, useState } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

import { InputMaybe } from '@/graphql/generated'
import { useRouter } from 'next/router'

type Props = {
  defaultValue?: InputMaybe<string> | undefined
  handleBlur?: (value: string) => void
  handleEnter?: () => void
  fullWidth?: boolean
  isBold?: boolean
  autofocus?: boolean
}
const UploadFlatInput: FC<Props> = ({
  defaultValue,
  handleBlur,
  handleEnter,
  fullWidth,
  isBold = true,
  autofocus = true,
}) => {
  const router = useRouter()
  const [isInputActive, setIsInputActive] = useState(false)
  const [value, setValue] = useState('')

  const { t } = useTranslation('upload')

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])
  useEffect(() => {
    if (!router.query.flow_id && !defaultValue) {
      setValue('')
    }
  }, [router.query, defaultValue])

  const inputClassNames = useMemo(() => {
    return classNames(`outline-none caret-primary`, {
      'font-semibold': isBold,
      'w-full': fullWidth,
    })
  }, [fullWidth, isBold])

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsInputActive(false)
    handleBlur && handleBlur(e.target.value)
  }
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsInputActive(false)
      handleEnter && handleEnter()
    }
  }
  return (
    <>
      {isInputActive || value ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={inputClassNames}
          onBlur={blurHandler}
          onKeyDown={keyDownHandler}
          autoFocus={autofocus}
        />
      ) : (
        <span
          className="text-gray-500"
          onClick={() => {
            setIsInputActive(true)
          }}
        >
          {t('give-it-a-name-msg')}
        </span>
      )}
    </>
  )
}

export default UploadFlatInput
