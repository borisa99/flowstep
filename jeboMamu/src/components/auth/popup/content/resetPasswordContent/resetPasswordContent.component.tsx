import { FC, useState } from 'react'
import { ContentProps } from '../content'

import styles from '@/styles/AuthPopup.module.css'
import TextField from '@/components/elements/TextField/textField.component'
import { Size } from '@/components/types/textField.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import useForm from '@/hooks/use-form-fields/use-form-fields'

import {
  useRequestResetPasswordMutation,
  RequestResetPasswordMutationVariables,
} from '@/graphql/generated'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'
import useAuth from '@/hooks/use-auth/use-auth'

const validationRules: ValidationRules<RequestResetPasswordMutationVariables> =
  {
    email: [FieldRules.required],
  }
const ResetPasswordContent: FC<ContentProps> = ({ switchContent }) => {
  const [buttonSuccess, setButtonSuccess] = useState(false)
  const callback = async () => {
    try {
      await requestResetPassword()
      setButtonSuccess(true)
      setTimeout(() => {
        handleSetCurrentMail(email)
        switchContent('ResetPasswordSentContent')
        setButtonSuccess(false)
      }, 1000)
    } catch (error) {
      alert(error)
    }
  }

  const { currentEmail, handleSetCurrentMail } = useAuth()

  const {
    values: { email },
    handleChange,
    handleSubmit,
    reset,
  } = useForm({ email: currentEmail }, validationRules, callback)

  const [requestResetPassword, { loading }] = useRequestResetPasswordMutation({
    variables: { email },
  })

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contentInputs}>
        <TextField
          label="Email Adress"
          name="email"
          defaultValue={email}
          elementSize={Size.large}
          disabled={loading || buttonSuccess}
          onTextChange={handleChange}
          handleReset={() => reset('email')}
        />
        <Button
          label="Reset Password"
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
        Back to{' '}
        <span
          onClick={() => switchContent('LoginContent')}
          className="font-semibold cursor-pointer"
        >
          log In
        </span>
      </span>
    </>
  )
}

export default ResetPasswordContent
