import { FC, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { deleteScreencastTimestamp } from '@/redux/slices/flow/flowScreencast.slice'

import useForm from '@/hooks/use-form-fields/use-form-fields'
import { FieldRules } from '@/hooks/use-form-fields/fieldRules'
import { Size, Variant } from '@/components/types/textField.types'
import Icon from '@/components/elements/Icon/icon.component'
import TextField from '@/components/elements/TextField/textField.component'
import DragAndDrop from '@/assets/images/svg/drag_and_drop.svg'

export type FlowInputValue = {
  id: string
  title: string
  timestamp: string
}
type Props = {
  defaultValue: FlowInputValue
  handleBlur: (item: FlowInputValue) => void
  index: number
}
const FlowInput: FC<Props> = ({ defaultValue, handleBlur, index }) => {
  const dispatch = useAppDispatch()
  const [focus, setFocus] = useState(false)

  const { t } = useTranslation('upload')

  const {
    values: { id, timestamp, title },
    handleChange,
    validateAll,
    reset,
    errors,
  } = useForm<FlowInputValue>(
    {
      id: defaultValue.id,
      title: defaultValue.title,
      timestamp:
        defaultValue.timestamp === ''
          ? ''
          : defaultValue.timestamp.split(':')[0] +
            ':' +
            defaultValue.timestamp.split(':')[1],
    },
    {
      title: [FieldRules.required],
      timestamp: [FieldRules.required, FieldRules.screencastTime],
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
  )
  const onBlur = async () => {
    setFocus(false)
    const isValid = await validateAll()
    if (isValid) {
      handleBlur({ id, title, timestamp: timestamp.trim().replace('.', '') })
    }

    // if form is valid update state
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between items-center relative">
        <div className="cursor-pointer">
          <DragAndDrop />
        </div>
        <TextField
          label={t('timestamp-label')}
          elementSize={Size.large}
          variant={Variant.minimalistic}
          defaultValue={timestamp}
          className="w-36"
          name="timestamp"
          onTextChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={onBlur}
          handleReset={() => reset('timestamp')}
        />
        <TextField
          label={t('flow-title-label')}
          elementSize={Size.large}
          variant={Variant.minimalistic}
          className="w-64"
          name="title"
          defaultValue={title}
          onFocus={() => setFocus(true)}
          onBlur={onBlur}
          onTextChange={handleChange}
          handleReset={() => reset('title')}
        />
        <div onClick={() => dispatch(deleteScreencastTimestamp(index))}>
          <Icon
            icon="Trash-alt"
            className={`${
              focus ? 'text-red-600' : 'text-gray-700'
            }  text-2xl cursor-pointer`}
          />
        </div>
      </div>
      {(errors['title'] || errors['timestamp']) && (
        <div className="flex overflow-x-auto mb-1">
          <div className="w-1/3 ml-8 ">
            <div className="text-critical  font-semibold text-sm m-0">
              {errors['timestamp']}
            </div>
          </div>
          <div className="w-2/3 ml-8">
            <div className="text-critical  font-semibold text-sm m-0">
              {errors['title']}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlowInput
