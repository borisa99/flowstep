import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useTranslation } from 'next-i18next'

import {
  setActiveIndex,
  setActiveScreencast,
  setScreencastId,
} from '@/redux/slices/flow/flowScreencast.slice'
import { removeScreencast } from '@/redux/slices/flow/flow.slice'
import { resetScreencastDetails } from '@/redux/slices/flow/flowScreencastDetails.slice'

import { DroppedFile } from '@/hooks/use-upload-multiple/use-upload-multiple'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import ScreencastItemPopup from './popup/screencastItemPopup.component'

import { Flow_Screencasts_Insert_Input, InputMaybe } from '@/graphql/generated'

type Props = {
  image?: string | InputMaybe<string>
  uploadPercentage?: number
  isQueued: boolean
  withoutTitle?: boolean
  large?: boolean
  editable?: boolean
  title?: string
  item?: Flow_Screencasts_Insert_Input | null
  index?: number
  removeFile?: (droppedFile: DroppedFile) => void
}
const UploadTabScreencastItem: FC<Props> = ({
  image,
  isQueued,
  uploadPercentage,
  withoutTitle,
  large,
  editable = true,
  title,
  item,
  index,
  removeFile,
}) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const { t } = useTranslation(['upload', 'common'])

  const handleClose = () => {
    dispatch(setScreencastId(''))
    dispatch(setActiveScreencast(null))
    dispatch(resetScreencastDetails())
    setIsOpen(false)
  }

  const onClickHandler = () => {
    if (item) {
      if (item.id) {
        dispatch(setScreencastId(item.id))
      } else {
        dispatch(setActiveScreencast(item))
      }
      if (index || index === 0) dispatch(setActiveIndex(index))
    }
    setIsOpen(true)
  }
  const removeHandler = () => {
    if (index === 0 || index) dispatch(removeScreencast(index))
  }
  return (
    <div className="flex flex-col items-center relative mb-3">
      <div
        className={`${
          large ? 'h-[812px] w-92 rounded-4xl' : 'h-[537px] w-62 rounded-2xl'
        } group relative bg-gray-200 mb-2 overflow-hidden bg-cover ${
          image && 'cursor-pointer'
        }`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="h-full">
          {editable && (
            <div className="hidden group-hover:flex items-end absolute bg-black top-0 right-0 bottom-0 left-0 bg-opacity-40">
              <div className="flex flex-col p-4 w-full gap-4">
                {image ? (
                  <>
                    <Button
                      color={Colors.red}
                      label={t('remove-action')}
                      size={Sizes.base}
                      style={ButtonStyle.solid}
                      onClick={removeHandler}
                    />
                    <Button
                      color={Colors.grey}
                      label={t('edit-label', { ns: 'common' })}
                      size={Sizes.base}
                      style={ButtonStyle.solid}
                      onClick={onClickHandler}
                    />
                  </>
                ) : (
                  <Button
                    color={Colors.red}
                    label={t('cancle-upload-action')}
                    size={Sizes.base}
                    style={ButtonStyle.solid}
                    onClick={() =>
                      removeFile && removeFile(item as DroppedFile)
                    }
                  />
                )}
              </div>
            </div>
          )}
          {!image && (
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
      {!withoutTitle && (
        <span className="absolute uppercase bottom-[-25px] w-62 whitespace-nowrap overflow-scroll scroll">
          {item ? item.title : title}
        </span>
      )}
      <ScreencastItemPopup isOpen={isOpen} handleClose={handleClose} />
    </div>
  )
}

export default UploadTabScreencastItem
