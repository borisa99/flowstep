import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import {
  Flows_Insert_Input,
  Flow_Attachments_Constraint,
  Flow_Attachments_Insert_Input,
  Flow_Keywords_Constraint,
  Flow_Keywords_Insert_Input,
  Flow_Screencasts_Constraint,
  Flow_Screencasts_Insert_Input,
  Flow_Screencasts_Update_Column,
  Flow_Screenshots_Constraint,
  Flow_Screenshots_Insert_Input,
  Flow_Screenshots_Update_Column,
  InputMaybe,
} from '@/graphql/generated'
import { RootState } from '../../store'

type InitialState = {
  object: Flows_Insert_Input
}
const initialState: InitialState = {
  object: {
    id: undefined,
    title: '',
    avatar_url: '',
    avatar_background_color: '#EFF2F6',
    is_draft: true,
    flow_screencasts: {
      data: [],
      on_conflict: {
        constraint: Flow_Screencasts_Constraint.FlowScreencastsPkey,
        update_columns: [Flow_Screencasts_Update_Column.Title],
      },
    },
    flow_screenshots: {
      data: [],
      on_conflict: {
        constraint: Flow_Screenshots_Constraint.FlowScreenshotsPkey,
        update_columns: [Flow_Screenshots_Update_Column.Title],
      },
    },
    flow_keywords: {
      data: [],
      on_conflict: {
        constraint: Flow_Keywords_Constraint.FlowKeywordsPkey,
        update_columns: [],
      },
    },
    flow_attachments: {
      data: [],
      on_conflict: {
        constraint: Flow_Attachments_Constraint.FlowAttachmentsPkey,
        update_columns: [],
      },
    },
  },
}

export const flowSlice = createSlice({
  name: 'flowSlice',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.object.title = action.payload
    },
    setId: (state, action: PayloadAction<string>) => {
      state.object.id = action.payload
    },
    setAvatarBackgroundColor: (state, action: PayloadAction<string>) => {
      state.object.avatar_background_color = action.payload
    },
    setObject: (state, action: PayloadAction<Flows_Insert_Input>) => {
      state.object = action.payload
    },
    setAvatarUrl: (state, action: PayloadAction<string>) => {
      state.object.avatar_url = action.payload
    },
    addScreencast: (
      state,
      action: PayloadAction<Flow_Screencasts_Insert_Input>
    ) => {
      state.object.flow_screencasts?.data.push(action.payload)
    },
    addScreenshot: (
      state,
      action: PayloadAction<Flow_Screenshots_Insert_Input>
    ) => {
      state.object.flow_screenshots?.data.push(action.payload)
    },
    addKeyword: (state, action: PayloadAction<Flow_Keywords_Insert_Input>) => {
      state.object.flow_keywords?.data.push(action.payload)
    },
    addAttachment: (
      state,
      action: PayloadAction<Flow_Attachments_Insert_Input>
    ) => {
      state.object.flow_attachments?.data.push(action.payload)
    },
    updateScreencastIdTitle: (
      state,
      action: PayloadAction<{
        index: number
        title: InputMaybe<string> | undefined
        id: string
      }>
    ) => {
      const { index, title, id } = action.payload

      const updatedScreencast = state.object.flow_screencasts?.data[index]
      if (updatedScreencast) {
        updatedScreencast.title = title
        updatedScreencast.id = id
      }
    },
    updateScreencast: (
      state,
      action: PayloadAction<Flow_Screencasts_Insert_Input | null>
    ) => {
      const index = state.object.flow_screencasts?.data.findIndex(
        (screencast) => screencast.id === action.payload?.id
      )

      if (state.object.flow_screencasts && (index || index === 0)) {
        state.object.flow_screencasts.data[index] =
          action.payload as Flow_Screencasts_Insert_Input
      }
    },
    updateScreenshotTitle(
      state,
      action: PayloadAction<{ index: number; title: string }>
    ) {
      const { index, title } = action.payload
      const updatedScreenshots = state.object.flow_screenshots?.data[index]
      if (updatedScreenshots) {
        updatedScreenshots.title = title
      }
    },
    updateAttachmentTitle(
      state,
      action: PayloadAction<{ index: number; title: string }>
    ) {
      const { index, title } = action.payload
      const updatedAttachments = state.object.flow_attachments?.data[index]
      if (updatedAttachments) {
        updatedAttachments.title = title
      }
    },
    removeScreencast: (state, action: PayloadAction<number>) => {
      state.object.flow_screencasts?.data.splice(action.payload, 1)
    },
    removeScreenshot: (state, action: PayloadAction<number>) => {
      state.object.flow_screenshots?.data.splice(action.payload, 1)
    },
    removeKeyword: (state, action: PayloadAction<number>) => {
      state.object.flow_keywords?.data.splice(action.payload, 1)
    },
    removeAttachment: (state, action: PayloadAction<number>) => {
      state.object.flow_attachments?.data.splice(action.payload, 1)
    },
    resetObject: (state) => {
      state.object = initialState.object
    },
  },
})

export const {
  setTitle,
  setId,
  setObject,
  resetObject,
  setAvatarBackgroundColor,
  setAvatarUrl,
  addScreencast,
  addScreenshot,
  addKeyword,
  addAttachment,
  removeScreencast,
  removeKeyword,
  removeAttachment,
  updateScreencast,
  updateScreencastIdTitle,
  updateScreenshotTitle,
  updateAttachmentTitle,
  removeScreenshot,
} = flowSlice.actions

const selectFlow = (state: RootState) => state.flow

export const selectObject = createSelector(selectFlow, (state) => state.object)
export const selectAvatarBackgroundColor = createSelector(
  selectFlow,
  (state) => state.object.avatar_background_color
)
export const selectAvatarUrl = createSelector(
  selectFlow,
  (state) => state.object.avatar_url
)
export const selectFlowScreencasts = createSelector(
  selectFlow,
  (state) => state.object.flow_screencasts?.data
)
export const selectFlowScreenshots = createSelector(
  selectFlow,
  (state) => state.object.flow_screenshots?.data
)
export const selectFlowKeywords = createSelector(
  selectFlow,
  (state) => state.object.flow_keywords?.data
)
export const selectFlowAttachments = createSelector(
  selectFlow,
  (state) => state.object.flow_attachments?.data
)

export const isDisabled = createSelector(
  selectFlow,
  (state) => state.object.id === null || state.object.title === ''
)

export default flowSlice.reducer
