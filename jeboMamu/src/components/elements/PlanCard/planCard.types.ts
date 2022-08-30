import { Subscription_Plan_Types_Enum } from '@/graphql/generated'

export interface Plan {
  id: string
  title: string
  price: number
  short_description: string
  description: string
  subscription_plan_type: Subscription_Plan_Types_Enum
}
