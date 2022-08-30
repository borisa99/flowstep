import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { Flow_Screencast_Details_Insert_Input } from '@/graphql/generated'
import { RootState } from '@/redux/store'

type InitialState = {
  object: Flow_Screencast_Details_Insert_Input
}
const initialState: InitialState = {
  object: {
    id: undefined,
    app_version: '',
    platform_version: '',
    region: '',
  },
}

export const flowScreencastDetails = createSlice({
  name: 'flowScreencastDetails',
  initialState,
  reducers: {
    setObject: (
      state,
      action: PayloadAction<Flow_Screencast_Details_Insert_Input>
    ) => {
      state.object = action.payload
    },
    updateObjectFormInput: (
      state,
      action: PayloadAction<Flow_Screencast_Details_Insert_Input>
    ) => {
      const { app_version, platform_version, region } = action.payload
      state.object = { ...state.object, app_version, platform_version, region }
    },
    resetScreencastDetails: (state) => {
      state.object = initialState.object
    },
  },
})

export const { setObject, resetScreencastDetails, updateObjectFormInput } =
  flowScreencastDetails.actions

const selectScreencastDetails = (state: RootState) =>
  state.flowScreencastDetails

export const selectScreencastDetailsObject = createSelector(
  [selectScreencastDetails],
  (flowScreencastDetails) => flowScreencastDetails.object
)

export default flowScreencastDetails.reducer
