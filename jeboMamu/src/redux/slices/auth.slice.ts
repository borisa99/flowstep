import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { content, ContentName } from '@/components/auth/popup/content/content'
import { UserResponse, RegisterUser } from '@/graphql/generated'
import { RootState } from '../store'

type JWT = {
  token: string
  refresh_token: string
}
type ResetPassword = {
  email: string
  ticket: string
  jwt?: JWT
}

export interface AuthState {
  activeContent: ContentName
  currentEmail: string
  registerUser?: RegisterUser | null
  user?: UserResponse | null
  loading: boolean
  resetPassword: ResetPassword
  isOpen: boolean
}

const initialContent: ContentName = content[0]
const initialState: AuthState = {
  activeContent: initialContent,
  currentEmail: '',
  registerUser: null,
  user: null,
  loading: true,
  resetPassword: {
    email: '',
    ticket: '',
  },
  isOpen: false,
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    switchContent: (state, action: PayloadAction<ContentName>) => {
      const { payload } = action
      state.activeContent =
        content.find((item) => item === payload) || content[0]
    },
    resetContent: (state) => {
      state.activeContent = initialContent
      state.registerUser = null
    },
    setContent: (state, action: PayloadAction<ContentName>) => {
      state.activeContent = action.payload
    },
    setCurrentEmail(state, action: PayloadAction<string>) {
      state.currentEmail = action.payload
    },
    setUser(state, action: PayloadAction<UserResponse | null>) {
      state.user = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setRegisterUser(state, action: PayloadAction<RegisterUser | null>) {
      state.registerUser = action.payload
    },
    setResetPassword(state, action: PayloadAction<ResetPassword>) {
      state.resetPassword = action.payload
    },
    setJWT(state, action: PayloadAction<JWT>) {
      if (state.resetPassword) {
        state.resetPassword.jwt = action.payload
      }
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    logoutUser(state) {
      state.isOpen = false
      state.currentEmail = ''
      state.user = null
      state.registerUser = null
      state.resetPassword = {
        email: '',
        ticket: '',
        jwt: {
          token: '',
          refresh_token: '',
        },
      }
      state.loading = false
      state.activeContent = initialContent
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  switchContent,
  resetContent,
  setContent,
  setCurrentEmail,
  setLoading,
  setResetPassword,
  setRegisterUser,
  setUser,
  setJWT,
  setIsOpen,
  logoutUser,
} = authSlice.actions

//Selectors are used to get the state of the store - Reselect is used to memoize the selectors
export const selectAuth = (state: RootState) => state.auth

export const selectCurrentEmail = createSelector(
  selectAuth,
  (state) => state.currentEmail
)
export const selectActiveContent = createSelector(
  selectAuth,
  (state) => state.activeContent
)

export const selectRegisterUser = createSelector(
  selectAuth,
  (state) => state.registerUser
)

export const selectUser = createSelector(selectAuth, (state) => state.user)

export const selectLoading = createSelector(
  selectAuth,
  (state) => state.loading
)

export const selectIsOpen = createSelector(selectAuth, (state) => state.isOpen)
export const selectJWT = createSelector(
  selectAuth,
  (state) => state.resetPassword.jwt
)
export const selectUserId = createSelector(selectUser, (user) => user?.id)

export default authSlice.reducer
