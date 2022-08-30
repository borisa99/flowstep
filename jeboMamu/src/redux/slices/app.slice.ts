import { AppFragment } from '@/graphql/generated'
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AppState {
  app: AppFragment | null
}

export type AppHeaderInfo = {
  title?: string
  category?: string | null
  avatar_url?: string | null
  avatar_background_color?: string | null
}
const initialState: AppState = {
  app: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApp(state, action: PayloadAction<AppFragment>) {
      state.app = action.payload
    },
  },
})

export const { setApp } = appSlice.actions

export const selectApp = (state: RootState) => state.app

export const selectAppInfo = createSelector(
  selectApp,
  (state) => state.app?.flow_app_info
)

export const selectAppHeaderInfo = createSelector(selectApp, (state) => {
  const { app } = state
  const info: AppHeaderInfo = {
    title: app?.title,
    avatar_url: app?.avatar_url,
    avatar_background_color: app?.avatar_background_color,
    category: app?.flow_app_info?.category,
  }
  return info
})
export const selectAppStoreLink = createSelector(
  selectApp,
  (state) => state.app?.flow_app_info?.app_store_link
)
export const selectAppUserId = createSelector(
  selectApp,
  (state) => state.app?.user_id
)
export const selectAppTitle = createSelector(
  selectApp,
  (state) => state.app?.title
)
export const selectAppScreencasts = createSelector(
  selectApp,
  (state) => state.app?.flow_screencasts
)
export const selectAppScreenshots = createSelector(
  selectApp,
  (state) => state.app?.flow_screenshots
)

export const selectAppAttachemnts = createSelector(
  selectApp,
  (state) => state.app?.flow_attachments
)

// TODO: Use values from aggregate count
export const selectAppScreencastsCount = createSelector(
  selectApp,
  (state) => state.app?.flow_screencasts.length
)
export const selectAppScreenshotsCount = createSelector(
  selectApp,
  (state) => state.app?.flow_screenshots.length
)

export const selectAppAttachemntsCount = createSelector(
  selectApp,
  (state) => state.app?.flow_attachments.length
)

export const selectAppContentCounts = createSelector(selectApp, (state) => [
  state.app?.flow_screencasts.length || 0,
  state.app?.flow_screenshots.length || 0,
  state.app?.flow_attachments.length || 0,
])

export default appSlice.reducer
