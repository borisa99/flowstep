import { FC, useState } from 'react'
import styles from '@/styles/AuthPopup.module.css'
import useAuth from '@/hooks/use-auth/use-auth'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import TextField from '@/components/elements/TextField/textField.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Size, Type } from '@/components/types/textField.types'

import { ContentProps } from '../content'

import { useLogInMutation, LogInMutationVariables } from '@/graphql/generated'
import useForm from '@/hooks/use-form-fields/use-form-fields'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'

const valdiatonRules: ValidationRules<LogInMutationVariables> = {
  email: [FieldRules.required, FieldRules.email],
  password: [FieldRules.required, FieldRules.password],
}

const LoginContent: FC<ContentProps> = ({ switchContent }) => {
  const { currentEmail, handleLogin } = useAuth()
  const [buttonSuccess, setButtonSuccess] = useState(false)

  const { t } = useTranslation('auth')

  const callback = async () => {
    try {
      const { data } = await logIn()
      setButtonSuccess(true)
      setTimeout(() => {
        if (data?.login) {
          const { token, refresh_token } = data.login
          setButtonSuccess(false)

          handleLogin(token, refresh_token)
        }
      }, 1000)
    } catch (error) {
      alert('error')
    }
  }

  const { values, handleChange, errors, handleSubmit, reset } =
    useForm<LogInMutationVariables>(
      { email: currentEmail, password: '' },
      valdiatonRules,
      callback
    )
  const [logIn, { loading }] = useLogInMutation({
    variables: values,
  })
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contentInputs}>
        <TextField
          label={t('email-address-label')}
          name="email"
          defaultValue={values.email}
          error={errors['email']}
          elementSize={Size.large}
          disabled={loading || buttonSuccess}
          onTextChange={handleChange}
          handleReset={() => reset('email')}
        />
        <TextField
          type={Type.password}
          label={t('password-label')}
          name="password"
          error={errors['password']}
          elementSize={Size.large}
          disabled={loading || buttonSuccess}
          onTextChange={handleChange}
          handleReset={() => reset('password')}
        />
        <Button
          label={t('LoginContent-action')}
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
      <span className={styles.contentFooter}>
        {t('forgot-your-password-label')}?{' '}
        <span
          onClick={() => switchContent('ResetPasswordContent')}
          className="font-semibold cursor-pointer"
        >
          {t('LoginContent-reset-password-action')}
        </span>
      </span>
    </>
  )
}
export default LoginContent
