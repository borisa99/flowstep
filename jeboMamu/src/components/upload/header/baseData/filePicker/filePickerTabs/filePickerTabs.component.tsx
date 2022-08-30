import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectActiveContent,
  setActiveContent,
} from '@/redux/slices/upload/uploadAvatarPopup.slice'

const FilePickerTabs = () => {
  const dispatch = useAppDispatch()
  const activeContent = useAppSelector(selectActiveContent)

  const { t } = useTranslation('upload')

  return (
    <div className="mt-[-20px] mb-6">
      <div className="m-auto  flex justify-around  bg-gray-100 w-[209px] text-base p-1 rounded-lg">
        <div
          className={`upload-popup-tabs ${
            activeContent === 'FilePickerEmoji' && `bg-white`
          }`}
          onClick={() => dispatch(setActiveContent('FilePickerEmoji'))}
        >
          <span>{t('emoji-label')}</span>
        </div>
        <div>
          <div
            className={`upload-popup-tabs ${
              activeContent === 'FilePickerDropzone' && `bg-white`
            }`}
            onClick={() => dispatch(setActiveContent('FilePickerDropzone'))}
          >
            <span>{t('custom-image-label')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilePickerTabs
