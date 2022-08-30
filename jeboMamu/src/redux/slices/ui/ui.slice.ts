import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UiState {
  showSettingsPopup: boolean
}

const initialState: UiState = {
  showSettingsPopup: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowSettingsPopup: (state, action: PayloadAction<boolean>) => {
      state.showSettingsPopup = action.payload
    },
  },
})

export const { setShowSettingsPopup } = uiSlice.actions

export default uiSlice.reducer
