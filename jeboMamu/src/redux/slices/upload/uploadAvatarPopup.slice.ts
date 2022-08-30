import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'

import { FilePickerContentName } from '@/components/upload/header/baseData/filePicker/filePickerContent'
import { RootState } from '@/redux/store'
type InitialState = {
  activeContent: FilePickerContentName
}
const initialState: InitialState = {
  activeContent: 'FilePickerEmoji',
}

export const uploadAvatarPopup = createSlice({
  name: 'uploadAvatarPopup',
  initialState,
  reducers: {
    setActiveContent: (state, action: PayloadAction<FilePickerContentName>) => {
      state.activeContent = action.payload
    },
  },
})

export const { setActiveContent } = uploadAvatarPopup.actions

export const selectUploadAvatarPopup = (state: RootState) =>
  state.uploadAvatarPopup

export const selectActiveContent = createSelector(
  selectUploadAvatarPopup,
  (state) => state.activeContent
)

export default uploadAvatarPopup.reducer
