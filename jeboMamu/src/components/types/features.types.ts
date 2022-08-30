export interface Feature {
  id: number
  title: string
  description: string
  imageUrl?: string
  imagePosition?: 'up' | 'down'
  premium?: boolean
  recommended?: boolean
}
