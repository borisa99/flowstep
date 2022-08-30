import FilePickerEmoji from './filePickerEmoji/filePickerEmoji.component'
import Dropzone from '@/components/elements/Dropzone/dropzone.component'

export const filePickerComponents = {
  FilePickerEmoji,
  FilePickerDropzone: Dropzone,
}

export type FilePickerContentName = keyof typeof filePickerComponents

export type FilePickerContentInfo = {
  name: FilePickerContentName
  title: string
}

export interface FilePickerContentProps {
  backgroundColor: string
}

export const filePickercontent: FilePickerContentInfo[] = []
