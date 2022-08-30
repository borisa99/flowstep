import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { selectRegisterUser, setJWT } from '@/redux/slices/auth.slice'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Size, Type } from '@/components/types/textField.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import TextField from '@/components/elements/TextField/textField.component'
import { ContentProps } from '../content'

import styles from '@/styles/AuthPopup.module.css'

import { SignUpMutationVariables, useSignUpMutation } from '@/graphql/generated'
import useForm from '@/hooks/use-form-fields/use-form-fields'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'

import useAuth from '@/hooks/use-auth/use-auth'

const validationRules: ValidationRules<SignUpMutationVariables['user']> = {
  email: [FieldRules.email, FieldRules.required],
  first_name: [FieldRules.required],
  password: [FieldRules.required, FieldRules.password],
}

const SignUpContent: FC<ContentProps> = ({ switchContent }) => {
  const { currentEmail } = useAuth()
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['auth', 'common'])

  const user = useSelector(selectRegisterUser)

  const [buttonSuccess, setButtonSuccess] = useState(false)

  const callback = async () => {
    try {
      const { data } = await signUp()

      if (data?.register) {
        const { token, refresh_token } = data.register
        dispatch(setJWT({ token, refresh_token }))
      }
      setButtonSuccess(true)
      setTimeout(() => {
        switchContent('SubscriptionPlanContent')
        setButtonSuccess(false)
      }, 1000)
    } catch (error) {
      alert('error')
    }
  }

  const { values, handleChange, handleSubmit, reset, errors } = useForm<
    SignUpMutationVariables['user']
  >(
    {
      email: currentEmail,
      first_name: '',
      password: '',
    },
    validationRules,
    callback
  )

  const [signUp, { loading }] = useSignUpMutation({
    variables: { user: user ? user : values }, // TODO: Add role
  })

  return (
    <form onSubmit={handleSubmit} className={styles.contentInputs}>
      <TextField
        label={t('name-label', { ns: 'common' })}
        name="first_name"
        error={errors['first_name']}
        elementSize={Size.large}
        disabled={loading || buttonSuccess}
        onTextChange={handleChange}
        handleReset={() => reset('first_name')}
      />
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
        name="password"
        error={errors['password']}
        label={t('password-label')}
        elementSize={Size.large}
        onTextChange={handleChange}
        handleReset={() => reset('password')}
      />
      <Button
        label={t('create-account-label')}
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
export default SignUpContent
