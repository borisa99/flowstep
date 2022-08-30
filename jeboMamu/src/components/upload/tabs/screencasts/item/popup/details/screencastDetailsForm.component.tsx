import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { updateObjectFormInput } from '@/redux/slices/flow/flowScreencastDetails.slice'

import useForm from '@/hooks/use-form-fields/use-form-fields'
import { Size } from '@/components/types/textField.types'
import TextField from '@/components/elements/TextField/textField.component'

import { Flow_Screencast_Details_Insert_Input } from '@/graphql/generated'

type Props = {
  defaultValues: Flow_Screencast_Details_Insert_Input | undefined
}
const ScreencastDetailsForm: FC<Props> = ({ defaultValues }) => {
  const dispatch = useAppDispatch()

  const { t } = useTranslation('upload')

  const { values, handleChange, reset } = useForm(
    {
      app_version: defaultValues?.app_version ?? '',
      platform_version: defaultValues?.platform_version ?? '',
      region: defaultValues?.region ?? '',
    },
    {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
  )
  const handleBlur = () => {
    dispatch(updateObjectFormInput({ ...values }))
  }
  return (
    <div className="flex flex-col gap-1" onBlur={handleBlur}>
      <form>
        <TextField
          label={t('app-version-label')}
          elementSize={Size.large}
          onTextChange={handleChange}
          defaultValue={defaultValues?.app_version}
          name="app_version"
          handleReset={() => reset('app_version')}
        />
        <TextField
          label={t('platform-version-label')}
          elementSize={Size.large}
          onTextChange={handleChange}
          defaultValue={defaultValues?.platform_version}
          name="platform_version"
          handleReset={() => reset('platform_version')}
        />
        <TextField
          label={t('region-label')}
          elementSize={Size.large}
          onTextChange={handleChange}
          defaultValue={defaultValues?.region}
          name="region"
          handleReset={() => reset('region')}
        />
      </form>
      {/* <TextField label={t("upload-date-label")} elementSize={Size.large} /> */}
    </div>
  )
}

export default ScreencastDetailsForm
