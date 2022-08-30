import { FC, useRef } from 'react'

import { useTranslation } from 'next-i18next'

import useForm from '@/hooks/use-form-fields/use-form-fields'
import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'

import TextField from '@/components/elements/TextField/textField.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Size } from '@/components/types/textField.types'
import { Sizes } from '@/components/types/sizes.types'
import { Colors } from '@/components/types/colors.types'
import useAuth from '@/hooks/use-auth/use-auth'

const valdiatonRules: ValidationRules<{ email: string }> = {
  email: [FieldRules.required, FieldRules.email],
}

const HomeFeaturedEmailForm: FC<{ submit: (email: string) => void }> = ({
  submit,
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLButtonElement>
  const { currentEmail } = useAuth()
  const { t } = useTranslation('common')

  const callback = async () => {
    finishSubmit()
  }

  const { values, handleChange, errors, handleSubmit, reset, loading } =
    useForm<{
      email: string
    }>({ email: currentEmail }, valdiatonRules, callback)

  function finishSubmit() {
    submit(values.email)
  }

  return (
    <form onSubmit={handleSubmit} className="flex grow items-center w-108">
      <TextField
        elementSize={Size.normal}
        label={t('email-label')}
        name="email"
        defaultValue={''}
        error={errors['email']}
        onTextChange={handleChange}
        handleReset={() => reset('email')}
        className="w-108"
      >
        <Button
          size={Sizes.base}
          color={Colors.blue}
          style={loading ? ButtonStyle.loading : ButtonStyle.solid}
          label={t('continue-label')}
          className="ml-auto mr-1 my-1"
        />
      </TextField>
      <button type="submit" ref={ref} />
    </form>
  )
}
export default HomeFeaturedEmailForm
