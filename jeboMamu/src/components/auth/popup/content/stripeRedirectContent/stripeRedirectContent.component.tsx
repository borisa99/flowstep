import { FC, useEffect } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppSelector } from '@/redux/hooks'
import { selectSubscriptionPlanId } from '@/redux/slices/stipe.slice'
import { selectJWT } from '@/redux/slices/auth.slice'

import { RoleValue } from '@/types/RoleValue'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { ContentProps } from '../content'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import Spinner from '@/components/elements/Spinner/spinner.component'

import { useStipeSessionQuery } from '@/graphql/generated'

const StripeRedirectContent: FC<ContentProps> = () => {
  const subscriptionPlanId = useAppSelector(selectSubscriptionPlanId)
  const jwt = useAppSelector(selectJWT)
  const { t } = useTranslation('auth')

  const { data, loading } = useStipeSessionQuery({
    variables: {
      subscription_plan_id: subscriptionPlanId as string,
    },
    context: {
      headers: {
        'x-hasura-role': RoleValue.FREE,
        Authorization: `Bearer ${jwt?.token}`,
      },
    },
  })
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (data?.stripe_session) {
      const link = document.createElement('a')
      link.href = data.stripe_session.value
      timeout = setTimeout(() => {
        link.click()
      }, 3000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [data])

  if (loading) {
    return (
      <div className="h-36 flex justify-center items-center">
        <Spinner size={Sizes.base} />
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      <div className="text-base text-gray-700 mb-8">
        {t('stripe-redirect-msg')}
      </div>
      <a href={data?.stripe_session?.value}>
        <Button
          style={ButtonStyle.solid}
          color={Colors.grey}
          label={t('go-to-stripe-action')}
          size={Sizes.m}
          full
        />
      </a>
    </div>
  )
}

export default StripeRedirectContent
