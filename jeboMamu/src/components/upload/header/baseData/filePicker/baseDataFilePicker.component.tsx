import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'

import {
  selectAvatarBackgroundColor,
  setObject,
} from '@/redux/slices/flow/flow.slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectActiveContent } from '@/redux/slices/upload/uploadAvatarPopup.slice'

import useUpload from '@/hooks/use-upload/use-upload'
import useFlow from '@/hooks/use-flow/use-flow'
import { DisabledProps } from '@/types/DisabledProps'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Alignments } from '@/components/types/aligment.types'
import { FileType } from '@/components/elements/Dropzone/dropzone.component'
import Icon from '@/components/elements/Icon/icon.component'
import Popup from '@/components/elements/Popup/popup.component'
import { filePickerComponents } from './filePickerContent'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import Separator from '@/components/elements/Separator/separator.component'
import FilePickerTabs from './filePickerTabs/filePickerTabs.component'
import FilePickerBGInput from './filePickerBGInput/filePickerBGInput.component'

import { Flows_Insert_Input } from '@/graphql/generated'

const BaseDataFilePicker: FC<DisabledProps> = ({ isDisabled }) => {
  const dispatch = useAppDispatch()
  const initialBackgroundColor = useAppSelector(selectAvatarBackgroundColor)
  const { createEditFlow, object } = useFlow()

  const [isOpen, setIsOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [file, setFile] = useState<File>()
  const [emoji, setEmoji] = useState<string>('')
  const [backgroundColor, setBackgroundColor] = useState<string>('')
  const { upload } = useUpload()
  const activeContent = useAppSelector(selectActiveContent)
  const ActiveContent = filePickerComponents[activeContent]

  const { t } = useTranslation(['upload', 'common'])

  useEffect(() => {
    setBackgroundColor(initialBackgroundColor as string)
  }, [initialBackgroundColor])

  const save = async () => {
    setIsUploading(true)
    const newObject: Flows_Insert_Input = { ...object }
    newObject.avatar_background_color = backgroundColor
    if (file) {
      const url = await upload(file)
      newObject.avatar_url = url
    } else if (emoji) {
      newObject.avatar_url = emoji
    }
    dispatch(setObject(newObject))

    await createEditFlow(newObject.is_draft as boolean, newObject)
    setIsUploading(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setIsOpen(false)
    }, 1000)
  }
  return (
    <>
      {isOpen && (
        <Popup
          onClose={() => setIsOpen(false)}
          title={t('icon-settings-popup-title')}
          headerAlignment={Alignments.center}
          modalClassNames="!w-[424px]"
        >
          <FilePickerTabs />
          <ActiveContent
            handleChange={(file) => {
              setEmoji('')
              setFile(file)
            }}
            handleClick={(emoji) => {
              setFile(undefined)
              setEmoji(emoji)
            }}
            backgroundColor={backgroundColor}
            single
            allowed={[FileType.jpg, FileType.svg, FileType.jpeg, FileType.png]}
            title="image"
          />
          <Separator size={Sizes.base} className="my-5" />
          <FilePickerBGInput
            setBackgroundColor={setBackgroundColor}
            backgroundColor={backgroundColor}
          />
          <Button
            label={t('save-label', { ns: 'common' })}
            color={Colors.blue}
            size={Sizes.lg}
            style={
              isUploading || isSuccess
                ? isUploading
                  ? ButtonStyle.loading
                  : ButtonStyle.success
                : ButtonStyle.solid
            }
            className="text-base"
            onClick={save}
            full
          />
        </Popup>
      )}
      <div
        onClick={() => !isDisabled && setIsOpen(true)}
        className={`flex items-center justify-center h-16 w-16 cursor-pointer rounded-2xl mr-4  ${
          isDisabled && 'cursor-not-allowed opacity-50'
        }`}
        style={{ backgroundColor: object.avatar_background_color as string }}
      >
        {object.avatar_url ? (
          <Image src={object.avatar_url} height="32px" width="32px" alt="IMG" />
        ) : (
          <Icon icon="Upload" />
        )}
      </div>
    </>
  )
}

export default BaseDataFilePicker
