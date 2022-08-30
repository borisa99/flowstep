import {
  createSlice,
  // PayloadAction,
  createSelector,
} from '@reduxjs/toolkit'
import { Flow_App_Info_Insert_Input } from '@/graphql/generated'
import { RootState } from '@/redux/store'

type InitialState = {
  object?: Flow_App_Info_Insert_Input
}
const initialState: InitialState = {
  object: {
    id: undefined,
    category: '',
    number_of_downloads: '',
    average_rating: '',
    developer: '',
    website: '',
    app_store_link: '',
  },
}

export const flowAppInfo = createSlice({
  name: 'flowAppInfo',
  initialState,
  reducers: {
    setObject: (state, action: { payload: Flow_App_Info_Insert_Input }) => {
      state.object = action.payload
    },
    resetAppInfoObject: (state) => {
      state.object = initialState.object
    },
  },
})

export const { setObject, resetAppInfoObject } = flowAppInfo.actions

const selectflowAppInfo = (state: RootState) => state.flowAppInfo

export const selecfFlowAppInfoObject = createSelector(
  [selectflowAppInfo],
  (flowAppInfo) => flowAppInfo.object
)

export default flowAppInfo.reducer
