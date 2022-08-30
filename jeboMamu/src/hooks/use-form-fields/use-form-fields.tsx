import React, { useState } from 'react'

import { useTranslation } from 'next-i18next'

import { InputMaybe } from '@/graphql/generated'
import { FieldRules, RegEX, ValidationRules } from './fieldRules'

const useForm = <T extends Record<string, string | InputMaybe<string>>>(
  initalValues: T,
  validationRules: ValidationRules<T>,
  callback: () => void | Promise<void>,
  resetAfterSubmit?: boolean
): {
  values: T
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  reset: (key: string) => void
  resetAll: () => void
  errors: Record<string, string>
  loading: boolean
  submitted: boolean
  validateAll: () => boolean
} => {
  const [values, setValues] = useState<T>(initalValues)
  const [loading, isLoading] = useState(false)
  const [submitted, isSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const { t } = useTranslation('common')

  const validateRegex = (email: string | InputMaybe<string>, regex: RegExp) => {
    return String(email).toLowerCase().match(regex)
  }
  const validateTime = (value: InputMaybe<string>) => {
    try {
      const splittedValue = value?.split(':')
      const minutes = splittedValue && splittedValue[0]

      const seconds = splittedValue && splittedValue[1]

      // Check if value is in mm:ss format
      if (
        (splittedValue && splittedValue?.length > 2) ||
        !minutes ||
        !seconds
      ) {
        return false
      } else {
        const minutesNumber = Number(minutes)
        const secondsNumber = Number(seconds)

        // Check if value is a integer number
        if (
          (!minutesNumber && !(minutesNumber === 0)) ||
          !Number.isInteger(secondsNumber) ||
          (!secondsNumber && !(secondsNumber === 0)) ||
          !Number.isInteger(secondsNumber)
        ) {
          return false
        }
        // Check if value is valid minute/second
        else if (
          !(minutesNumber <= 59) ||
          !(minutesNumber >= 0) ||
          !(secondsNumber <= 59) ||
          !(secondsNumber >= 0)
        ) {
          return false
        }
      }

      return true
    } catch (error) {
      return false
    }
  }

  const validate = (
    key: string,
    value: string | InputMaybe<string>
  ): boolean => {
    const rules = validationRules[key]
    if (rules?.includes(FieldRules.required) && !value) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('cant-be-empty-msg'),
        }
      })

      return false
    } else if (
      rules?.includes(FieldRules.email) &&
      !validateRegex(value, RegEX.email)
    ) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('must-be-email-msg'),
        }
      })

      return false
    } else if (
      rules?.includes(FieldRules.password) &&
      value &&
      value.length < 8
    ) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('must-be-8-characters-or-more-msg'),
        }
      })

      return false
    } else if (
      rules?.includes(FieldRules.hex) &&
      !validateRegex(value, RegEX.hex)
    ) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('must-be-a-HEX-value'),
        }
      })
      return false
    } else if (
      rules?.includes(FieldRules.doublePrecision) &&
      !validateRegex(value, RegEX.doublePrecision)
    ) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('must-be-a-double-precision-value'),
        }
      })
      return false
    } else if (
      rules?.includes(FieldRules.integer) &&
      !validateRegex(value, RegEX.integer)
    ) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('must-be-a-integer'),
        }
      })
      return false
    } else if (
      rules?.includes(FieldRules.screencastTime) &&
      !validateTime(value)
    ) {
      setErrors((previousErrors) => {
        return {
          ...previousErrors,
          [key]: t('must-be-a-time-mm:ss'),
        }
      })
      return false
    } else {
      delete errors[key]
    }

    return true
  }

  const validateAll = () => {
    const valuesKeys = Object.keys(values)
    let success = true

    valuesKeys.forEach((key) => {
      const validation = validate(key, values[key])
      if (success && !validation) {
        success = false
      }
    })

    return success
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    const value = e.target.value
    setValues({
      ...values,
      [key]: value,
    })

    validate(key, value)
  }

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    isLoading(true)
    const validation = validateAll()

    if (validation) {
      await callback()
      isLoading(false)
      isSubmitted(true)

      if (resetAfterSubmit) {
        setErrors({})
        setValues(initalValues)
        isLoading(false)
      }
    } else {
      isLoading(false)
      return
    }
  }

  const reset = (key: string) => {
    setValues({
      ...values,
      [key]: initalValues[key],
    })

    delete errors[key]
  }

  const resetAll = () => {
    setValues(initalValues)
    isLoading(false)
    isSubmitted(false)
    setErrors({})
  }

  return {
    values,
    handleChange,
    handleSubmit,
    reset,
    resetAll,
    errors,
    loading,
    submitted,
    validateAll,
  }
}

export default useForm
