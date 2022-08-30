import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface StripeState {
  subscription_plan_id: string | null
}

const initialState: StripeState = {
  subscription_plan_id: null,
}

export const stripeSlice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    setSubscriptionPlanId: (state, action: PayloadAction<string>) => {
      state.subscription_plan_id = action.payload
    },
  },
})

export const { setSubscriptionPlanId } = stripeSlice.actions

export const selectStripe = (state: RootState) => state.stripe
export const selectSubscriptionPlanId = createSelector(
  selectStripe,
  (stripe) => stripe.subscription_plan_id
)

export default stripeSlice.reducer
