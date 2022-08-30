import { FC, useState } from 'react'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import TextField from '@/components/elements/TextField/textField.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Size, Type } from '@/components/types/textField.types'
import styles from '@/styles/AuthPopup.module.css'
import { ContentProps } from '../../content'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import useForm from '@/hooks/use-form-fields/use-form-fields'

import {
  useResetPasswordMutation,
  ResetPasswordMutationVariables,
} from '@/graphql/generated'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'
import { setJWT } from '@/redux/slices/auth.slice'

const valdiationRules: ValidationRules<ResetPasswordMutationVariables> = {
  password: [FieldRules.required, FieldRules.password],
}

const SetPasswordContent: FC<ContentProps> = ({ switchContent }) => {
  const dispatch = useAppDispatch()
  const [buttonSuccess, setButtonSuccess] = useState(false)

  const { t } = useTranslation('auth')
  const { email, ticket } = useAppSelector((state) => state.auth.resetPassword)
  const {
    values: { password },
    errors,
    handleChange,
    handleSubmit,
    reset,
  } = useForm<ResetPasswordMutationVariables>(
    { password: '', ticket: ticket },
    valdiationRules,
    async () => {
      try {
        const { data } = await resetPasword()
        setButtonSuccess(true)
        setTimeout(() => {
          if (data?.reset_password) {
            dispatch(setJWT(data.reset_password))
            setButtonSuccess(false)
            switchContent('ResetPasswordSuccessContent')
          }
        }, 1000)
      } catch (error) {
        alert(error)
      }
    }
  )
  const [resetPasword, { loading }] = useResetPasswordMutation({
    variables: {
      ticket,
      password,
    },
  })

  return (
    <form onSubmit={handleSubmit} className={styles.contentInputs}>
      <TextField
        disabled
        defaultValue={email}
        label={t('email-address-label')}
        elementSize={Size.large}
        onTextChange={() => null}
      />
      <TextField
        type={Type.password}
        label={t('password-label')}
        error={errors['password']}
        disabled={loading || buttonSuccess}
        name="password"
        elementSize={Size.large}
        onTextChange={handleChange}
        handleReset={() => reset('password')}
      />
      <Button
        label={t('set-password-label')}
        style={
          loading || buttonSuccess
            ? loading
              ? ButtonStyle.loading
              : ButtonStyle.success
            : ButtonStyle.solid
        }
        color={Colors.blue}
        size={Sizes.lg}
        full
        hover={false}
      />
    </form>
  )
}

export default SetPasswordContent
