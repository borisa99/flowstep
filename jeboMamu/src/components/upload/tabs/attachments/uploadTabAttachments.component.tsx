import { FC, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Dropzone, {
  FileType,
} from '@/components/elements/Dropzone/dropzone.component'
import { filterNotUploaded } from '@/hooks/use-upload-multiple/formatFiles'
import useUploadMultiple from '@/hooks/use-upload-multiple/use-upload-multiple'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addAttachment,
  selectFlowAttachments,
} from '@/redux/slices/flow/flow.slice'
import { DisabledProps } from '@/types/DisabledProps'
import UploadTabAttachmentItem from './item/uploadTabAttachmentItem.component'

const UploadTabAttachments: FC<DisabledProps> = ({ isDisabled }) => {
  const dispatch = useAppDispatch()
  const flowAttachments = useAppSelector(selectFlowAttachments)
  const { queue, currentFile, droppedFiles, percentage, uploadedFiles } =
    useUploadMultiple(false)

  useEffect(() => {
    const latestUplaoded = uploadedFiles[uploadedFiles.length - 1]
    if (latestUplaoded) {
      dispatch(
        addAttachment({
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
        allowed={[FileType.png, FileType.jpeg, FileType.jpg, FileType.svg]}
        title="attachments"
        disabled={isDisabled}
      />
      <div className="grid grid-cols-4 gap-4 mb-5">
        {
          // Uploaded file
          flowAttachments?.map((screencast, index) => (
            <UploadTabAttachmentItem
              key={uuidv4()}
              image={screencast.url}
              isQueued={false}
              item={screencast}
              index={index}
            />
          ))
        }
        {
          // Show only files that are not uploaded
          filterNotUploaded(droppedFiles, uploadedFiles).map((item, index) => (
            <UploadTabAttachmentItem
              key={uuidv4()}
              index={index}
              uploadPercentage={
                currentFile?.id === item.id ? percentage : undefined
              }
              isQueued={currentFile?.id === item.id}
              item={item}
            />
          ))
        }
      </div>
    </>
  )
}

export default UploadTabAttachments
