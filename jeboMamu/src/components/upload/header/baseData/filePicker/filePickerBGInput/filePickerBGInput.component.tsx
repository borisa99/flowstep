import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { FieldRules, ValidationRules } from '@/hooks/use-form-fields/fieldRules'
import useForm from '@/hooks/use-form-fields/use-form-fields'
import { Size } from '@/components/types/textField.types'
import TextField from '@/components/elements/TextField/textField.component'
import { FilePickerContentProps } from '../filePickerContent'

const rules: ValidationRules<{ background_color: string }> = {
  background_color: [FieldRules.required, FieldRules.hex],
}

interface Props extends FilePickerContentProps {
  setBackgroundColor: (value: string) => void
}
const FilePickerBGInput: FC<Props> = ({
  setBackgroundColor,
  backgroundColor,
}) => {
  const { t } = useTranslation('upload')

  const { values, handleChange, errors, reset } = useForm<{
    background_color: string
  }>(
    {
      background_color: backgroundColor,
    },
    rules,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
  )

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value && !errors['background_color']) {
      setBackgroundColor(e.target.value)
    }
  }
  return (
    <div className="flex">
      <div
        className="w-12 h-12 rounded-lg mr-3"
        style={{
          backgroundColor: values.background_color,
        }}
      ></div>
      <div className="flex-1 mb-8">
        <TextField
          label={t('background-colour-(HEX)-label')}
          name="background_color"
          error={errors['background_color']}
          defaultValue={backgroundColor as string}
          elementSize={Size.normal}
          handleReset={() => reset('background_color')}
          onTextChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export default FilePickerBGInput
