// const videoUrl = 'http://localhost:5500/Screencast.mp4'
const videoUrl = 'http://localhost:3000/Screencast.webm'

type timestamp = { title: string; timestamp: number }
type screencast = {
  id: number
  timestamps: timestamp[]
  title: string
  videoUrl: string
  likeCount: number
  liked: boolean
  saved: boolean
  tags: ('Trending' | 'StaffPick')[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details: any
}

const timestamps1: timestamp[] = [
  { title: 'App store download', timestamp: 0 },
  { title: 'Onboarding carousel', timestamp: 15 },
  { title: 'Signup flow', timestamp: 26 },
  { title: 'Notifications request', timestamp: 39 },
  { title: 'Success screen', timestamp: 48 },
  { title: 'App store download', timestamp: 62 },
  { title: 'Onboarding carousel', timestamp: 75 },
  { title: 'Signup flow', timestamp: 94 },
  { title: 'Notifications request', timestamp: 106 },
  { title: 'Success screen', timestamp: 120 },
]
const timestamps2: timestamp[] = [
  { title: 'Section 1', timestamp: 0 },
  { title: 'Section 2', timestamp: 19 },
  { title: 'Section 3', timestamp: 56 },
  { title: 'Section 4', timestamp: 89 },
  { title: 'Section 5', timestamp: 122 },
]
const timestamps3: timestamp[] = [
  { title: 'Section I', timestamp: 0 },
  { title: 'Section II', timestamp: 15 },
  { title: 'Section III', timestamp: 52 },
  { title: 'Section IV', timestamp: 69 },
  { title: 'Section V', timestamp: 90 },
  { title: 'Section VI', timestamp: 115 },
]

const details = {
  uploadDate: '1 May 2022',
  flows: ['App Store', 'Signup', 'Onboarding'],
  components: [
    'Button',
    'Carousel',
    'Bottom sheet',
    'Animation & Video',
    'Divider',
  ],
  appVersion: '1.2.11',
  platform: 'iOS, 15.1',
  region: 'Talin, Estonia',
}

const data: { collection: string; items: screencast[] } = {
  collection: 'Klarna',
  items: [
    {
      id: 1,
      videoUrl,
      title: 'First launch',
      timestamps: timestamps1,
      likeCount: 146,
      liked: false,
      saved: false,
      tags: ['Trending'],
      details,
    },
    {
      id: 2,
      videoUrl,
      title: 'Second Screencast',
      timestamps: timestamps2,
      likeCount: 250,
      liked: false,
      saved: false,
      tags: ['StaffPick'],
      details,
    },
    {
      id: 3,
      videoUrl,
      title: 'Third Screencast',
      timestamps: timestamps3,
      likeCount: 312,
      liked: false,
      saved: false,
      tags: ['Trending', 'StaffPick'],
      details,
    },
  ],
}

export default data
