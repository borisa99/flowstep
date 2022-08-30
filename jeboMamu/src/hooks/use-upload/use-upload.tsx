import { getCookie } from 'cookies-next'
import { useState } from 'react'

const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const upload = async (file: File) => {
    try {
      setIsLoading(true)
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
      const responseData = await response.json()
      setUrl(responseData.value)
      return responseData.value
    } catch {
      setError('Error while uploading')
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    url,
    error,
    upload,
  }
}

export default useUpload
