import { ServiceResponse } from '@/models/ServiceResponse'
import { Service } from 'typedi'
import { IStripeService } from './IStripeService'

import stripe from '@/shared/stripe'
import db from '@/shared/db'
import { UserCheckoutSession } from '@/models/UserCheckoutSession'
import { AccountRole } from '@/models/AccountRole'
import { RoleValue } from '@/models/RoleValue'
import { Account } from '@/models/Account'
import { generateRefreshToken, generateToken } from '@/shared/jwt'
import { UserSubscription } from '@/models/UserSubscription'
import { SubscriptionPlans } from '@/models/SubscriptionPlans'

@Service()
export class StripeService implements IStripeService {
  async success(session_id: string): Promise<ServiceResponse<string>> {
    const response = new ServiceResponse<string>()
    try {
      // check if session exists
      const session = await db<UserCheckoutSession>('user_checkout_sessions')
        .where({
          stripe_session_id: session_id,
        })
        .first()

      if (!session) {
        response.error = 'Session not found'
        response.status = 404
        return response
      }
      // check if  successful
      const stripeSession = await stripe.checkout.sessions.retrieve(session_id)
      if (!stripeSession || stripeSession.payment_status !== 'paid') {
        response.error = 'Payment not successful'
        response.status = 400
        return response
      }
      const account = await db<Account>('accounts')
        .where({
          user_id: session.user_id,
        })
        .first()

      // insert premium role
      await db<AccountRole>('account_roles').insert({
        role: RoleValue.PREMIUM,
        account_id: account?.id,
      })

      // Insert user subscription
      await db<UserSubscription>('user_subscriptions').insert({
        user_id: account?.user_id,
        subscription_plan_id: session.subscription_plan_id,
      })
      // Delete session
      await db<UserCheckoutSession>('user_checkout_sessions')
        .where({
          user_id: session.user_id,
        })
        .del()

      // Generate user tokens
      const token = await generateToken(account?.id as string)
      const refreshToken = await generateRefreshToken(account?.id as string)
      response.status = 302
      response.payload = (process.env.FRONTEND_URL +
        `?token=${token}&refresh_token=${refreshToken}`) as string
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
  async createCheckoutSession(
    user_id: string,
    subscription_plan_id: string
  ): Promise<ServiceResponse<string>> {
    const response: ServiceResponse<string> = new ServiceResponse<string>()
    try {
      // Get price id from subscription plan
      const subscriptionPlan = await db<SubscriptionPlans>('subscription_plans')
        .where({
          id: subscription_plan_id,
        })
        .first()

      if (!subscriptionPlan) {
        response.error = 'Subscription plan not found'
        response.status = 404
        return response
      }

      // remove existing
      await db<UserCheckoutSession>('user_checkout_sessions')
        .where({
          user_id,
        })
        .del()

      // Get user account
      const account = await db<Account>('accounts')
        .where({
          user_id,
        })
        .first()

      // Generate user tokens
      const token = await generateToken(account?.id as string)
      const refreshToken = await generateRefreshToken(account?.id as string)

      // create new
      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [
          {
            price: subscriptionPlan.stripe_price_id,
            quantity: 1,
          },
        ],
        success_url: `${process.env.SERVER_ROOT_HOST}/api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/payment/error?token=${token}&refresh_token=${refreshToken}`,
      })

      // save to db
      await db<UserCheckoutSession>('user_checkout_sessions')
        .returning('id')
        .insert({
          user_id,
          stripe_session_id: session.id,
          subscription_plan_id: subscriptionPlan.id,
        })

      response.payload = session.url
    } catch (error: any) {
      response.status = 500
      response.error = error.message
    }
    return response
  }
}
