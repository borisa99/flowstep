import axios, { CancelTokenSource } from 'axios'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface DroppedFile {
  id: string
  file: File
  image?: string
  cancleToken: CancelTokenSource
}

export interface UploadedFile extends DroppedFile {
  url: string
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_ENDPOINT,
})

const useUploadMultiple = (
  isVideo: boolean
): {
  droppedFiles: DroppedFile[]
  currentFile: DroppedFile | undefined
  percentage: number
  uploadedFiles: UploadedFile[]
  queue: (file: File) => void
  upload: (droppedFile: DroppedFile) => Promise<void>
  removeFile: (droppedFile: DroppedFile) => void
} => {
  const [droppedFiles, setDroppedFiles] = useState<DroppedFile[]>([])
  const [currentFile, setCurrentFile] = useState<DroppedFile>()
  const [percentage, setPercentage] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [cancledFiles, setCancledFiles] = useState<DroppedFile[]>([])

  useEffect(() => {
    // Check if there is file beeing uploadedFiles currently
    if (droppedFiles.length > 0 && !currentFile) {
      upload(droppedFiles[droppedFiles.length - 1])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [droppedFiles])

  useEffect(() => {
    if (percentage === 100) {
      // check if there is more files in queue
      const indexOfCurrnetFile = droppedFiles
        .map((item) => item.id)
        .indexOf(currentFile?.id as string)

      const nextFile = droppedFiles[indexOfCurrnetFile + 1]

      // if there is more upload them
      if (nextFile) {
        upload(nextFile)
      } else {
        setCurrentFile(undefined)
      }
      setPercentage(0)
      // else reset current file
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage])

  // Upload next when file is caceled
  useEffect(() => {
    const lastCanceled = cancledFiles[cancledFiles.length - 1]
    if (lastCanceled) {
      // Only if current file is canceled try upload next
      if (currentFile?.id === lastCanceled.id) {
        // Find all files that are not uplaoded yet and take first
        const notUploadedFiles = droppedFiles.filter(
          (file) =>
            uploadedFiles
              .map((uploadedFile) => uploadedFile.id)
              .indexOf(file.id) === -1 && file.id !== lastCanceled.id
        )
        const nextFile = notUploadedFiles[0]
        if (nextFile) {
          upload(nextFile)
        } else {
          setCurrentFile(undefined)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancledFiles])

  const queue = (file: File) => {
    const cancelTokenSource = axios.CancelToken.source()

    setDroppedFiles((previous) => [
      ...previous,
      { id: uuidv4(), file, cancleToken: cancelTokenSource, title: file.name },
    ])
  }
  const getThumbnailForVideo = async (videoUrl: string) => {
    const video = document.createElement('video')
    const canvas = document.createElement('canvas')
    video.style.display = 'none'
    canvas.style.display = 'none'

    // Trigger video load
    await new Promise((resolve) => {
      video.addEventListener('loadedmetadata', () => {
        video.width = 330
        video.height = 720
        canvas.width = 330
        canvas.height = 720
        // Seek the video to 0.1%
        video.currentTime = video.duration * 0.5
      })
      video.addEventListener('seeked', () => resolve(true))
      video.src = videoUrl
    })

    // Draw the thumbnailz
    if (canvas.getContext('2d')) {
      canvas.getContext('2d')?.drawImage(video, 0, 0, 330, 720)
    }
    const imageUrl = canvas.toDataURL('image/png')

    const blobResponse = await fetch(imageUrl).then((res) => res.blob())

    const file = new File([blobResponse], '.png', { type: 'image/png' })

    const token = getCookie('token')
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(
      process.env.NEXT_PUBLIC_REST_ENDPOINT + '/file/upload',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    )

    const data = await response.json()
    return data.value
  }
  const upload = async (droppedFile: DroppedFile) => {
    try {
      if (isVideo) {
        const fileUrl = URL.createObjectURL(droppedFile.file)
        const thumbUrl = await getThumbnailForVideo(fileUrl)

        droppedFile.image = thumbUrl
      }

      setCurrentFile(droppedFile)
      const token = getCookie('token')
      const formData = new FormData()
      formData.append('file', droppedFile.file)

      const response = await axiosInstance.post(
        `/file/${isVideo ? 'upload_optimize_video' : 'upload'}`,
        formData,
        {
          cancelToken: droppedFile.cancleToken.token,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )

            // This percentage means that upload is over but request did not recieve response yet
            // Set percentage to 99 if upload us 100 because of UI
            if (percentCompleted === 100) setPercentage(99)
            if (percentCompleted !== 100) setPercentage(percentCompleted)
          },
        }
      )

      // When response  is recieved set percentage to 100
      setPercentage(100)
      setUploadedFiles((prev) => [
        ...prev,
        { ...droppedFile, url: response.data.value as string },
      ])
    } catch (err) {}
  }

  const removeFile = (droppedFile: DroppedFile) => {
    // Cancle upload
    droppedFile.cancleToken.cancel()

    // Remove selected file
    setDroppedFiles((prev) => prev.filter((item) => item.id !== droppedFile.id))
    // Push to the canceled files array
    setCancledFiles((prev) => [...prev, droppedFile])
  }
  return {
    droppedFiles,
    currentFile,
    percentage,
    uploadedFiles,
    queue,
    upload,
    removeFile,
  }
}

export default useUploadMultiple
