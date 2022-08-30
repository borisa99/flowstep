const day = 60 * 60 * 24

export const tokenExpiration = day
export const refreshTokenExpiration = day * 24

export const wordsPerSecond = 3
export const avgWordLenght = 6
export const defaultDelay = 3000

export const timeout = (charactersNumber: number) => {
  return (
    (charactersNumber / avgWordLenght / wordsPerSecond) * 1000 + defaultDelay
  )
}
