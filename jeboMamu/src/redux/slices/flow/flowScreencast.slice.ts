import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import {
  Flow_Screencasts_Insert_Input,
  Flow_Screencast_Components_Constraint,
  Flow_Screencast_Components_Insert_Input,
  Flow_Screencast_Timestamps_Constraint,
  Flow_Screencast_Timestamps_Insert_Input,
  Flow_Screencast_Timestamps_Update_Column,
} from '@/graphql/generated'

type InitialState = {
  screencast_id: string
  activeScreencast: Flow_Screencasts_Insert_Input | null
  active_index: number | null
}
const initialState: InitialState = {
  screencast_id: '',
  activeScreencast: null,
  active_index: null,
}

export const uploadScreencast = createSlice({
  name: 'uploadScreencast',
  initialState,
  reducers: {
    setScreencastId: (state, action: PayloadAction<string>) => {
      state.screencast_id = action.payload ?? ''
    },
    setActiveScreencast: (
      state,
      action: PayloadAction<Flow_Screencasts_Insert_Input | null>
    ) => {
      state.activeScreencast = action.payload
    },
    setScreencastTimesamp: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
    },

    setActiveIndex: (state, action: PayloadAction<number | null>) => {
      state.active_index = action.payload
    },
    addScreencastComponent: (
      state,
      action: PayloadAction<Flow_Screencast_Components_Insert_Input>
    ) => {
      if (state.activeScreencast) {
        if (!state.activeScreencast.flow_screencast_components) {
          state.activeScreencast.flow_screencast_components = {
            data: [action.payload],
            on_conflict: {
              constraint:
                Flow_Screencast_Components_Constraint.FlowScreencastComponentsPkey1,
              update_columns: [],
            },
          }
        } else {
          state.activeScreencast.flow_screencast_components?.data.push(
            action.payload
          )
        }
      }
    },
    addScreencastTimestamp: (
      state,
      action: PayloadAction<Flow_Screencast_Timestamps_Insert_Input>
    ) => {
      if (state.activeScreencast) {
        if (!state.activeScreencast.flow_screencast_timestamps) {
          state.activeScreencast.flow_screencast_timestamps = {
            data: [action.payload],
            on_conflict: {
              constraint:
                Flow_Screencast_Timestamps_Constraint.FlowScreencastTimestampsPkey,
              update_columns: [
                Flow_Screencast_Timestamps_Update_Column.Title,
                Flow_Screencast_Timestamps_Update_Column.Timestamp,
              ],
            },
          }
        } else {
          state.activeScreencast.flow_screencast_timestamps?.data.push(
            action.payload
          )
        }
      }
    },
    updateScreencastTimestamp: (
      state,
      action: PayloadAction<{
        timestamp: Flow_Screencast_Timestamps_Insert_Input
        index: number
      }>
    ) => {
      if (state.activeScreencast?.flow_screencast_timestamps) {
        state.activeScreencast.flow_screencast_timestamps.data[
          action.payload.index
        ] = action.payload.timestamp
      }
    },
    deleteScreencastTimestamp: (state, action: PayloadAction<number>) => {
      state.activeScreencast?.flow_screencast_timestamps?.data.splice(
        action.payload,
        1
      )
    },
    deleteScreencastComponent: (state, action: PayloadAction<number>) => {
      state.activeScreencast?.flow_screencast_components?.data.splice(
        action.payload,
        1
      )
    },
  },
})

export const {
  setScreencastId,
  setActiveScreencast,
  setActiveIndex,
  addScreencastComponent,
  deleteScreencastComponent,
  addScreencastTimestamp,
  updateScreencastTimestamp,
  deleteScreencastTimestamp,
} = uploadScreencast.actions

export const selectUploadScreencast = (state: RootState) =>
  state.uploadScreencast

export const selectActiveScreencast = createSelector(
  selectUploadScreencast,
  (state) => state.activeScreencast
)

export const selectScreencastId = createSelector(
  selectUploadScreencast,
  (state) => state.screencast_id
)
export const selectActiveIndex = createSelector(
  selectUploadScreencast,
  (state) => state.active_index
)
export const selectScreencastComponents = createSelector(
  selectActiveScreencast,
  (state) => state?.flow_screencast_components?.data
)
export const selectScreencastTimestamps = createSelector(
  selectActiveScreencast,
  (state) => state?.flow_screencast_timestamps?.data
)

export default uploadScreencast.reducer
