import {
  createSlice,
  PayloadAction,
  // createSelector
} from '@reduxjs/toolkit'
import {} from '@/graphql/generated'
import { EnumType } from '@/types/EnumFragment'

type InitialState = {
  objects: EnumType[]
}
const initialState: InitialState = {
  objects: [],
}

export const flowComponents = createSlice({
  name: 'flowComponents',
  initialState,
  reducers: {
    setFlowComponents: (state, action: PayloadAction<EnumType[]>) => {
      state.objects = action.payload
    },
  },
})

export const { setFlowComponents } = flowComponents.actions

export default flowComponents.reducer
