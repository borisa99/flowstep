export interface UserCheckoutSession {
  id: string
  user_id: string
  stripe_session_id: string
  subscription_plan_id: string
}
