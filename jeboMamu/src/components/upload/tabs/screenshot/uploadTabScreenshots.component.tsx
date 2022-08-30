import { FC, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Dropzone, {
  FileType,
} from '@/components/elements/Dropzone/dropzone.component'
import { filterNotUploaded } from '@/hooks/use-upload-multiple/formatFiles'
import useUploadMultiple from '@/hooks/use-upload-multiple/use-upload-multiple'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addScreenshot,
  selectFlowScreenshots,
} from '@/redux/slices/flow/flow.slice'
import { DisabledProps } from '@/types/DisabledProps'
import UploadTabScreenshotItem from './item/uploadTabScreenshotItem.component'

const UploadTabScreenshots: FC<DisabledProps> = ({ isDisabled }) => {
  const dispatch = useAppDispatch()
  const flowScreenshots = useAppSelector(selectFlowScreenshots)
  const { queue, droppedFiles, currentFile, percentage, uploadedFiles } =
    useUploadMultiple(false)

  useEffect(() => {
    const latestUplaoded = uploadedFiles[uploadedFiles.length - 1]
    if (latestUplaoded) {
      dispatch(
        addScreenshot({
          title: latestUplaoded.file.name,
          url: latestUplaoded.url,
        })
      )
    }
  }, [uploadedFiles, dispatch])

  return (
    <>
      <Dropzone
        handleChange={(file) => queue(file)}
        allowed={[FileType.jpg, FileType.jpeg, FileType.svg, FileType.png]}
        title="screenshots"
        disabled={isDisabled}
      />
      <div className="grid grid-cols-4 gap-6 mb-5">
        {
          // Uploaded file
          flowScreenshots?.map((screenshot, index) => (
            <UploadTabScreenshotItem
              key={uuidv4()}
              image={screenshot.url}
              isQueued={false}
              item={screenshot}
              index={index}
            />
          ))
        }
        {
          // Show only files that are not uploaded
          filterNotUploaded(droppedFiles, uploadedFiles).map((item) => (
            <UploadTabScreenshotItem
              key={uuidv4()}
              uploadPercentage={
                currentFile?.id === item.id ? percentage : undefined
              }
              isQueued={currentFile?.id === item.id}
              title={item.file.name}
            />
          ))
        }
      </div>
    </>
  )
}

export default UploadTabScreenshots
