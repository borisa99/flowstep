export interface SubscriptionPlans {
  id: string
  title: string
  description: string
  short_description: string
  price: number
  subscription_plan_type: string
  stripe_price_id?: string
  created_at: Date
  updated_at: Date
}
