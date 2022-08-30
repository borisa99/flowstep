import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import {
  uploadContinueContent,
  UploadContinueContentName,
} from '@/components/upload/header/actions/popup/uploadContinuePopupContent'
import { RootState } from '../../store'

export interface UploadContinueState {
  activeContent: UploadContinueContentName
}

const initalContent: UploadContinueContentName = uploadContinueContent[0]

const initialState: UploadContinueState = {
  activeContent: initalContent,
}

export const uploadContinueSlice = createSlice({
  name: 'uploadContinue',
  initialState,
  reducers: {
    switchContent: (
      state,
      action: PayloadAction<UploadContinueContentName>
    ) => {
      const { payload } = action
      state.activeContent = uploadContinueContent.find(
        (item) => item === payload
      ) as UploadContinueContentName
    },
    resetContent: (state) => {
      state.activeContent = initalContent
    },
    setContent: (state, action: PayloadAction<UploadContinueContentName>) => {
      state.activeContent = action.payload
    },
  },
})

export const { switchContent, resetContent, setContent } =
  uploadContinueSlice.actions

export const selectUploadContinue = (state: RootState) =>
  state.uploadContinuePopup

export const selectActiveContent = createSelector(
  selectUploadContinue,
  (state) => state.activeContent
)

export default uploadContinueSlice.reducer
