export interface UserSubscription {
  id?: string
  billing_date?: Date
  user_id: string
  subscription_plan_id: string
  created_at?: Date
  updated_at?: Date
}
