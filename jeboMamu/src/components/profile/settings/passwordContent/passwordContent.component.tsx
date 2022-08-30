import { FC, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { Sizes } from '@/components/types/sizes.types'
import { Colors } from '@/components/types/colors.types'
import { Size, Type } from '@/components/types/textField.types'
import TextField from '@/components/elements/TextField/textField.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { ToastStyle } from '@/components/elements/Toasts/toast/toast.component'
import useForm from '@/hooks/use-form-fields/use-form-fields'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'
import { useToast } from '@/hooks/use-toast/use-toast'

import {
  ChangePasswordMutationVariables,
  useChangePasswordMutation,
  UserResponse,
} from '@/graphql/generated'

interface Props {
  user?: UserResponse
}

const validationRules: ValidationRules<ChangePasswordMutationVariables> = {
  oldPassword: [FieldRules.required, FieldRules.password],
  newPassword: [FieldRules.required, FieldRules.password],
}

const PasswordContent: FC<Props> = () => {
  const { t } = useTranslation('common')

  const [buttonSuccess, setButtonSuccess] = useState<boolean>(false)
  const { addToast } = useToast()

  const {
    errors,
    handleChange,
    values,
    reset,
    resetAll,
    handleSubmit,
    loading,
  } = useForm<ChangePasswordMutationVariables>(
    { oldPassword: '', newPassword: '' },
    validationRules,
    submitHandler
  )

  const [changePassword] = useChangePasswordMutation()

  async function submitHandler() {
    try {
      await changePassword({
        variables: {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        },
      })
      setButtonSuccess(true)
      setTimeout(() => {
        setButtonSuccess(false)
      }, 1000)
      resetAll()
      addToast({
        style: ToastStyle.success,
        title: t('password-successfully-changed-msg'),
        className: 'text-center',
      })
    } catch (error) {
      addToast({
        style: ToastStyle.error,
        title: (error as Error).message,
        className: 'text-center',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
      <div className="text-center">
        {t('password-shold-be-8-charachters-msg')}
      </div>
      <div className="mt-4">
        <TextField
          name="oldPassword"
          elementSize={Size.large}
          label={t('old-password-label')}
          onTextChange={handleChange}
          value={values.oldPassword}
          error={errors['oldPassword']}
          handleReset={() => reset('oldPassword')}
          disabled={loading || buttonSuccess}
          type={Type.password}
        />
      </div>
      <div className="mt-4">
        <TextField
          name="newPassword"
          elementSize={Size.large}
          label={t('new-password-label')}
          onTextChange={handleChange}
          value={values.newPassword}
          error={errors['newPassword']}
          handleReset={() => reset('newPassword')}
          disabled={loading || buttonSuccess}
          type={Type.password}
        />
      </div>
      <div className="mt-8">
        <Button
          label={t('change-password-action')}
          size={Sizes.m}
          color={Colors.blue}
          style={
            loading
              ? ButtonStyle.loading
              : buttonSuccess
              ? ButtonStyle.success
              : ButtonStyle.solid
          }
          full
          type="submit"
        />
      </div>
    </form>
  )
}

export default PasswordContent
