import Dropzone, {
  FileType,
} from '@/components/elements/Dropzone/dropzone.component'
import {
  Flow_Screencast_Timestamps_Constraint,
  Flow_Screencast_Timestamps_Update_Column,
} from '@/graphql/generated'
import { filterNotUploaded } from '@/hooks/use-upload-multiple/formatFiles'
import useUploadMultiple from '@/hooks/use-upload-multiple/use-upload-multiple'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addScreencast,
  selectFlowScreencasts,
} from '@/redux/slices/flow/flow.slice'
import { DisabledProps } from '@/types/DisabledProps'
import { FC, useEffect } from 'react'
import UploadTabScreencastItem from './item/uploadTabScreencastItem.component'

const UploadtabScreencasts: FC<DisabledProps> = ({ isDisabled }) => {
  const dispatch = useAppDispatch()
  const flowScreencasts = useAppSelector(selectFlowScreencasts)
  const {
    queue,
    currentFile,
    droppedFiles,
    percentage,
    uploadedFiles,
    removeFile,
  } = useUploadMultiple(true)

  useEffect(() => {
    const latestUplaoded = uploadedFiles[uploadedFiles.length - 1]
    if (latestUplaoded) {
      dispatch(
        addScreencast({
          title: latestUplaoded.file.name,
          screencast_url: latestUplaoded.url,
          banner_url: latestUplaoded.image,
          flow_screencast_timestamps: {
            data: [],
            on_conflict: {
              constraint:
                Flow_Screencast_Timestamps_Constraint.FlowScreencastTimestampsPkey,
              update_columns: [
                Flow_Screencast_Timestamps_Update_Column.Title,
                Flow_Screencast_Timestamps_Update_Column.Timestamp,
              ],
            },
          },
        })
      )
    }
  }, [uploadedFiles, dispatch])

  return (
    <>
      <Dropzone
        handleChange={(file) => queue(file)}
        allowed={[FileType.mp4, FileType.mov]}
        title="screencasts"
        disabled={isDisabled}
      />
      <div className="grid grid-cols-4 gap-4 mb-5">
        {
          // Uploaded file
          flowScreencasts?.map((screencast, index) => (
            <UploadTabScreencastItem
              key={index}
              image={screencast.banner_url}
              isQueued={false}
              item={screencast}
              index={index}
            />
          ))
        }
        {
          // Show only files that are not uploaded
          filterNotUploaded(droppedFiles, uploadedFiles).map((item, index) => (
            <UploadTabScreencastItem
              key={index}
              index={index}
              uploadPercentage={
                currentFile?.id === item.id ? percentage : undefined
              }
              isQueued={currentFile?.id === item.id}
              item={item}
              removeFile={removeFile}
            />
          ))
        }
      </div>
    </>
  )
}

export default UploadtabScreencasts
