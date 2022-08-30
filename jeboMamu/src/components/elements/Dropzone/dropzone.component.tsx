import { FC, useState } from 'react'
import Image from 'next/image'

import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Icon from '@/components/elements/Icon/icon.component'
import Button, { ButtonStyle } from '../Button/button.component'

export enum FileType {
  mp4 = 'mp4',
  mov = 'mov',
  png = 'png',
  svg = 'svg',
  jpeg = 'jpeg',
  jpg = 'jpg',
}

type Props = {
  handleChange: (file: File) => void
  single?: boolean
  allowed?: FileType[] | '*'
  title?: string
  disabled?: boolean
}

const Dropzone: FC<Props> = ({
  handleChange,
  single,
  allowed = '*',
  title = 'files',
  disabled = false,
}) => {
  const { t } = useTranslation('upload')

  const [currentFile, setCurrentFile] = useState<string>()

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const fileExtension = file.name.split('.').pop()?.toLowerCase()
      if (
        allowed === '*' ||
        allowed.indexOf(fileExtension as unknown as FileType) !== -1
      ) {
        setCurrentFile(URL.createObjectURL(e.target.files[0]))
        handleChange(file)
      } else {
        alert(t('file-type-not–allowed-msg'))
      }
    }
  }
  return (
    <>
      {single && currentFile ? (
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={currentFile as string}
            alt="A"
            width={60}
            height={60}
            className="mb-2"
          />
          <Button
            color={Colors.red}
            label={t('clear-action')}
            size={Sizes.sm}
            style={ButtonStyle.solid}
            onClick={() => setCurrentFile(undefined)}
          />
        </div>
      ) : (
        <div
          className={`flex relative group flex-col items-center justify-center gap-3 h-44  my-8  cursor-not-allowed border-blue-600 rounded-lg transition-all ease-in-out duration-100 ${
            !disabled &&
            '!cursor-pointer hover:border  hover:!bg-blue-100 hover:!bg-none '
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23AFB9C6' stroke-width='1' stroke-dasharray='5%2c5' stroke-dashoffset='19' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          <input
            name="file"
            type="file"
            className={`absolute left-0 right-0 top-0 bottom-0 cursor-not-allowed opacity-0 z-10 ${
              !disabled && '!cursor-pointer'
            }`}
            onChange={changeHandler}
            disabled={disabled}
          />

          <Icon
            icon="File-upload"
            className={`text-6xl ${
              disabled ? 'text-gray-600' : 'text-primary'
            }`}
          />
          <div className="flex flex-col items-center">
            <span className="mb-1 text-base font-normal">
              {t('drag-and-drop-label')} {title}, {t('or-text')}{' '}
              <span
                className={`font-bold cursor-pointer  ${
                  !disabled && 'group-hover:underline group-hover:text-primary'
                }`}
              >
                {t('browse-text')}
              </span>
            </span>
            <span className="text-sm text-gray-700 font-normal">
              {t('max-100mb-each-msg')}
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default Dropzone
