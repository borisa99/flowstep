import UniversalContent from './universalContent/universalContent.component'
import LoginContent from './loginContent/loginContent.component'
import ResetPasswordContent from './resetPasswordContent/resetPasswordContent.component'
import ResetPasswordSentContent from './resetPasswordContent/sent/resetPasswordSentContent.component'
import SignUpContent from './signUpContent/signUpContent.component'
import SetPasswordContent from './resetPasswordContent/set/setPasswordContent.component'
import ResetPasswordSuccessContent from './resetPasswordContent/success/successPasswordContent.component'
import SubscriptionPlanContent from './subscriptionPlanContent/subscriptionPlanContent.component'
import StripeRedirectContent from './stripeRedirectContent/stripeRedirectContent.component'
import StripeErrorContent from './stripeErrorContent/stripeErrorContent.component'

import { RegisterUser } from '@/graphql/generated'

export const components = {
  UniversalContent,
  LoginContent,
  ResetPasswordContent,
  SignUpContent,
  ResetPasswordSentContent,
  SetPasswordContent,
  ResetPasswordSuccessContent,
  SubscriptionPlanContent,
  StripeRedirectContent,
  StripeErrorContent,
}

export type ContentName = keyof typeof components

export type ContentProps = {
  switchContent: (name: ContentName, user?: RegisterUser) => void
  close: () => void
}

export const content: ContentName[] = [
  'UniversalContent',
  'LoginContent',
  'ResetPasswordContent',
  'SignUpContent',
  'ResetPasswordSentContent',
  'SetPasswordContent',
  'ResetPasswordSuccessContent',
  'SubscriptionPlanContent',
  'StripeRedirectContent',
  'StripeErrorContent',
]
