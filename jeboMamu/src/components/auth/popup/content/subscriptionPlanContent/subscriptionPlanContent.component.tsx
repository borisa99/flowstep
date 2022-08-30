import { FC, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'

import Tag, { TagStyle } from '@/components/elements/Tag/tag.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

import {
  Subscription_Plan_Types_Enum,
  useAllSubscriptionPlansQuery,
} from '@/graphql/generated'
import OptionsSwitch from '@/components/elements/OptionsSwitch/optionsSwitch.component'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectJWT } from '@/redux/slices/auth.slice'
import useAuth from '@/hooks/use-auth/use-auth'
import { ContentProps } from '../content'
import { setSubscriptionPlanId } from '@/redux/slices/stipe.slice'

const SubscriptionPlanContent: FC<ContentProps> = ({ switchContent }) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('auth')

  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(0)

  const paymentOptions: {
    title: string
    interval: Subscription_Plan_Types_Enum
  }[] = [
    {
      title: t('paid-monthly'),
      interval: t(Subscription_Plan_Types_Enum.Monthly),
    },
    {
      title: t('paid-annually'),
      interval: t(Subscription_Plan_Types_Enum.Annually),
    },
  ]

  const [activePaymentOption, setActivePaymentOption] = useState(
    paymentOptions[0]
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const jwt = useAppSelector(selectJWT)
  const activeColor = 'border-warning'
  const inactiveColor = 'border-gray-300'

  const { data, loading } = useAllSubscriptionPlansQuery()

  const { handleLogin } = useAuth()
  const handleSubmitPlan = async () => {
    setIsLoading(true)
    // if paid plan -> redirect stripe
    if (selectedPlanIndex || selectedPlanIndex === 0) {
      const plan = data?.subscription_plans[selectedPlanIndex]

      plan && plan.id && dispatch(setSubscriptionPlanId(plan.id))

      setIsLoading(false)
      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
        switchContent('StripeRedirectContent')
      }, 1000)
      // if free plan register
    } else if (jwt) {
      setIsLoading(false)
      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
        handleLogin(jwt.token, jwt.refresh_token)
      }, 1000)
    }
  }

  const handleSwitch = (selectedOption: string) => {
    const paymentOption = paymentOptions.find(
      (option) => option.title === selectedOption
    )
    if (paymentOption) {
      setActivePaymentOption(paymentOption)
    }
  }

  function handleSelectPlan(index: number) {
    if (selectedPlanIndex !== index) {
      setSelectedPlanIndex(index)
    }
  }

  if (loading) {
    return (
      <div className="min-h-appCardImg">
        <Spinner size={Sizes.lg} />
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      <div className="mx-auto -mt-6  mb-8">
        <OptionsSwitch
          options={paymentOptions.map((option) => option.title)}
          activeOption={activePaymentOption.title}
          onSwitch={handleSwitch}
          light
          className="bg-gray-100"
        />
      </div>
      {data?.subscription_plans
        ?.filter(
          (plan) => plan.subscription_plan_type === activePaymentOption.interval
        )
        .map((subscription, index) => {
          const isActive = index === selectedPlanIndex
          return (
            <div
              key={subscription.title}
              className={`flex border-1 rounded-lg pt-3.5 pl-3.5 pb-3 pr-3 mb-2 last-of-type:mb-4 cursor-pointer ${
                isActive ? activeColor : inactiveColor
              }`}
              onClick={() => handleSelectPlan(index)}
            >
              <button
                type="button"
                className={`h-5 w-5 min-w-5 min-h-5 mr-3.5 rounded-full border-2 ${
                  isActive
                    ? 'border-blue-600 bg-blue-600 p-[3px] bg-clip-content'
                    : 'border-gray-300'
                }`}
              />
              <div>
                <div className="text-base text-gray-900 mb-1">
                  {subscription.title} · {subscription.price + ' €/mo'}
                </div>
                <div className="text-base text-gray-700 mb-1">
                  {subscription.description}
                </div>
                {subscription.title === 'Premium' && (
                  <Tag
                    key="tag-most-popular"
                    size={Sizes.base}
                    color={Colors.orange}
                    style={TagStyle.light}
                    iconName="Star"
                    label={t('most-popular-label')}
                  />
                )}
              </div>
            </div>
          )
        })}
      <div
        className={`flex border-1 rounded-lg pt-3.5 pl-3.5 pb-3 pr-3 mb-2 last-of-type:mb-4 cursor-pointer ${
          !selectedPlanIndex && selectedPlanIndex !== 0
            ? activeColor
            : inactiveColor
        }`}
        onClick={() => setSelectedPlanIndex(null)}
      >
        <button
          type="button"
          className={`h-5 w-5 min-w-5 min-h-5 mr-3.5 rounded-full border-2 ${
            !selectedPlanIndex &&
            selectedPlanIndex !== 0 &&
            'border-blue-600 bg-blue-600 p-[3px] bg-clip-content'
          }`}
        />
        <div>
          <div className="text-base text-gray-900 mb-1">
            {t('basic-plan-title')} · {t('free')}
          </div>
          <div className="text-base text-gray-700 mb-1">
            {t('basic-description')}
          </div>
        </div>
      </div>
      <Button
        style={
          isLoading || isSuccess
            ? isLoading
              ? ButtonStyle.loading
              : ButtonStyle.success
            : ButtonStyle.solid
        }
        color={Colors.blue}
        label={t('select-plan-label')}
        size={Sizes.m}
        full
        onClick={handleSubmitPlan}
      />
    </div>
  )
}

export default SubscriptionPlanContent
