import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import {
  removeAttachment,
  updateAttachmentTitle,
} from '@/redux/slices/flow/flow.slice'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import UploadFlatInput from '@/components/upload/input/uploadFlatInput.component'

import { Flow_Attachments_Insert_Input, InputMaybe } from '@/graphql/generated'

type Props = {
  image?: string | InputMaybe<string>
  uploadPercentage?: number
  isQueued: boolean
  title?: string
  item?: Flow_Attachments_Insert_Input
  index?: number
}

const UploadTabAttachmentItem: FC<Props> = ({
  image,
  uploadPercentage,
  isQueued,
  title,
  item,
  index,
}) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('upload')

  const removeHandler = () => {
    if (index === 0 || index) dispatch(removeAttachment(index))
  }
  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`${'h-[537px] w-62 rounded-2xl'} group relative bg-gray-200 mb-2 overflow-hidden bg-cover ${
          image && 'cursor-pointer'
        }`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="h-full">
          {image ? (
            <div className="hidden group-hover:flex items-end absolute bg-black top-0 right-0 bottom-0 left-0 bg-opacity-40">
              <div className="flex flex-col p-4 w-full gap-4">
                <Button
                  color={Colors.red}
                  label={t('remove-action')}
                  size={Sizes.base}
                  style={ButtonStyle.solid}
                  onClick={removeHandler}
                />
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <span className="text-gray-700 text-sm mb-2">
                {isQueued ? t('uploading-label') : t('awaiting-upload-label')}
              </span>
              <div className="w-40 bg-gray-300 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-1 rounded-full"
                  style={{
                    width:
                      isQueued && uploadPercentage
                        ? `${uploadPercentage}%`
                        : '4px',
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <UploadFlatInput
        defaultValue={item ? item.title : title}
        handleBlur={(value) => {
          if (item && (index === 0 || index)) {
            dispatch(updateAttachmentTitle({ index, title: value }))
          }
        }}
        isBold={false}
        autofocus={false}
      />
    </div>
  )
}

export default UploadTabAttachmentItem
