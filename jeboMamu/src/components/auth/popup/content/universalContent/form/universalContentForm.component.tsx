import { FC, useState } from 'react'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import TextField from '@/components/elements/TextField/textField.component'
import { Colors } from '@/components/types/colors.types'
import { Size } from '@/components/types/textField.types'

import styles from '@/styles/AuthPopup.module.css'
import { Sizes } from '@/components/types/sizes.types'
import { ContentName } from '../../content'

import {
  useCheckEmailLazyQuery,
  CheckEmailQueryVariables,
} from '@/graphql/generated'
import useForm from '@/hooks/use-form-fields/use-form-fields'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'
import useAuth from '@/hooks/use-auth/use-auth'

type Props = {
  switchContent: (content: ContentName) => void
}

const rules: ValidationRules<CheckEmailQueryVariables> = {
  email: [FieldRules.required, FieldRules.email],
}

const UniversalContentForm: FC<Props> = ({ switchContent }) => {
  const { handleSetCurrentMail, currentEmail } = useAuth()
  const [buttonSuccess, setButtonSuccess] = useState(false)
  const { t } = useTranslation('auth')

  const callback = async () => {
    try {
      const { data } = await checkEmail()
      setButtonSuccess(true)

      setTimeout(() => {
        handleSetCurrentMail(email)
        setButtonSuccess(false)

        data?.checkEmail.value
          ? switchContent('LoginContent')
          : switchContent('SignUpContent')
      }, 1000)
    } catch (error) {
      alert(error)
    }
  }

  const {
    values: { email },
    handleChange,
    handleSubmit,
    reset,
    errors,
  } = useForm<CheckEmailQueryVariables>(
    {
      email: currentEmail,
    },
    rules,
    callback
  )

  const [checkEmail, { loading }] = useCheckEmailLazyQuery({
    variables: { email },
  })

  return (
    <form onSubmit={handleSubmit} className={styles.contentInputs}>
      <TextField
        label={t('email-address-label')}
        name="email"
        defaultValue={email}
        error={errors['email']}
        elementSize={Size.large}
        disabled={loading || buttonSuccess}
        onTextChange={handleChange}
        handleReset={() => reset('email')}
      />
      <Button
        label={t('continue-with-email-label')}
        style={
          false
            ? ButtonStyle.disabled
            : loading || buttonSuccess
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

export default UniversalContentForm
