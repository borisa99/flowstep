import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth.slice'
import flow from './slices/flow/flow.slice'
import uploadAvatarPopup from './slices/upload/uploadAvatarPopup.slice'
import uploadContinuePopup from './slices/upload/uploadContinuePopup.slice'
import uploadScreencast from './slices/flow/flowScreencast.slice'
import flowAppInfo from './slices/flow/flowAppInfo.slice'
import flowScreencastDetails from './slices/flow/flowScreencastDetails.slice'
import ui from './slices/ui/ui.slice'
import stripe from './slices/stipe.slice'
import app from './slices/app.slice'

export const store = configureStore({
  reducer: {
    auth,
    flow,
    uploadAvatarPopup,
    uploadContinuePopup,
    uploadScreencast,
    flowAppInfo,
    flowScreencastDetails,
    ui,
    stripe,
    app,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
