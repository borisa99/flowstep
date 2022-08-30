import UploadContinueGeneralInfo from './generalInfo/uploadContinueGeneralInfo.component'
import UploadContinueAppInfo from './appInfo/uploadContinueAppInfo.component'

export const components = {
  UploadContinueGeneralInfo,
  UploadContinueAppInfo,
}

export type UploadContinueContentName = keyof typeof components

export type UploadContinueContentProps = {
  switchUploadContinueContent: (name: UploadContinueContentName) => void
  close: () => void
}

export const uploadContinueContent: UploadContinueContentName[] = [
  'UploadContinueGeneralInfo',
  'UploadContinueAppInfo',
]
