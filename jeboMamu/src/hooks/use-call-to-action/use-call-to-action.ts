import { useState } from 'react'

export const useCallToAction = (
  action: () => Promise<unknown>,
  callbacks?: {
    onSuccessCallback?: (arg?: unknown) => void
    onAfterSuccessCallback?: (arg?: unknown) => void
    onErrorCallback?: (arg?: unknown) => void
  }
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [result, setResult] = useState<unknown | undefined>()
  const [error, setError] = useState<Error | undefined>()

  const { onAfterSuccessCallback, onErrorCallback, onSuccessCallback } =
    callbacks ?? {}

  const execute = async () => {
    setIsLoading(true)

    action()
      .then((result) => {
        setSuccess(true)
        setResult(result)

        if (onSuccessCallback) onSuccessCallback()

        setTimeout(() => {
          setSuccess(false)
          if (onAfterSuccessCallback) onAfterSuccessCallback()
        }, 1000)
      })
      .catch((error: Error) => {
        setError(error)
        if (onErrorCallback) onErrorCallback()
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { execute, isLoading, success, result, error }
}
