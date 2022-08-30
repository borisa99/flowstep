import { ServiceResponse } from '@/models/ServiceResponse'
export interface IStripeService {
  createCheckoutSession(
    user_id: string,
    subscription_plan_id: string
  ): Promise<ServiceResponse<string>>
  success(session_id: string): Promise<ServiceResponse<string>>
}
