import { DroppedFile, UploadedFile } from './use-upload-multiple'

export const filterNotUploaded = (
  droppedFiles: DroppedFile[],
  uploadedFiles: UploadedFile[]
) => {
  return droppedFiles.filter(
    (droppedFile) =>
      !uploadedFiles
        .map((uploadedFile) => uploadedFile.id)
        .includes(droppedFile.id)
  )
}
