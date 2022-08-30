import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectUser, setIsOpen } from '@/redux/slices/auth.slice'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { RoleValue } from '@/types/RoleValue'
import { Plan } from '@/components/elements/PlanCard/planCard.types'

import PlanCard from '@/components/elements/PlanCard/planCard.component'
import OptionsSwitch from '@/components/elements/OptionsSwitch/optionsSwitch.component'
import { Features } from '@/components/features/features.component'
import BackToTopButton from '@/components/elements/BackToTopButton/backToTopButton.component'
import FeedbackButton from '@/components/elements/FeedbackButton/feedbackButton.component'

import {
  SubscriptionPlanFragment,
  Subscription_Plan_Types_Enum,
  useAllSubscriptionPlansQuery,
  useStipeSessionLazyQuery,
} from '@/graphql/generated'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['pricing', 'common', 'auth']
      )),
    },
  }
}

const Pricing: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { t } = useTranslation('pricing')

  const basicPlans: Plan[] = [
    {
      id: '1',
      title: t('basic-plan-title'),
      description: t('basic-description'),
      short_description: t('basic-short-description'),
      price: 0,
      subscription_plan_type: t(Subscription_Plan_Types_Enum.Monthly),
    },
    {
      id: '2',
      title: t('basic-plan-title'),
      description: t('basic-description'),
      short_description: t('basic-short-description'),
      price: 0,
      subscription_plan_type: t(Subscription_Plan_Types_Enum.Annually),
    },
  ]
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

  const user = useAppSelector(selectUser)
  const { data } = useAllSubscriptionPlansQuery()

  // generate checkout session url
  const [generateStripeSesion, { loading }] = useStipeSessionLazyQuery({
    context: {
      headers: {
        'x-hasura-role': RoleValue.FREE,
      },
    },
  })
  useEffect(() => {
    if (user?.id) {
      if (user.roles.includes(RoleValue.PREMIUM)) {
        router.push('/')
      }
    }
  }, [router, user])

  const handleSwitch = (selectedOption: string) => {
    const paymentOption = paymentOptions.find(
      (option) => option.title === selectedOption
    )
    if (paymentOption) {
      setActivePaymentOption(paymentOption)
    }
  }

  const handlePlanClick = async (plan: SubscriptionPlanFragment) => {
    if (!user) {
      dispatch(setIsOpen(true))
    } else {
      const response = await generateStripeSesion({
        variables: { subscription_plan_id: plan.id },
      })
      if (response.data?.stripe_session?.value) {
        const link = document.createElement('a')
        link.href = response.data?.stripe_session?.value
        link.click()
      } else {
        alert(t('stripe-payment-error-msg'))
      }
    }
  }

  return (
    <>
      <Head>
        {/* <title>Flowstep - Go Premium</title> */}
        <title>{t('page-title')}</title>
      </Head>
      <div>
        <div className="flex flex-col justify-center items-center pt-16 pb-7 text-white bg-warning">
          <h3>{t('title')}</h3>
          <div className="text-base mt-2 mb-5">{t('subtitle')}</div>
          <div className="text-white text-xs bg-black px-2 py-1 rounded-100 w-max z-10 -mb-3 rotate-9.71 ml-60">
            {t('discount-20')}
          </div>
          <OptionsSwitch
            options={paymentOptions.map((option) => option.title)}
            activeOption={activePaymentOption.title}
            onSwitch={handleSwitch}
            className="bg-black/20"
          />
        </div>
        <div className="flex justify-center items-center mb-16 pt-1 bg-gray-25 text-gray-900 half-bg">
          {basicPlans
            .filter(
              (plan) =>
                plan.subscription_plan_type === activePaymentOption.interval
            )
            .map((plan) => (
              <PlanCard
                key={plan.id}
                className="mr-4 last-of-type:mr-0"
                plan={plan}
                isCurrentPlan={false}
                onClick={() => dispatch(setIsOpen(true))}
              />
            ))}
          {data?.subscription_plans
            .filter(
              (plan) =>
                plan.subscription_plan_type === activePaymentOption.interval
            )
            .map((plan) => (
              <PlanCard
                key={plan.id}
                className="mr-4 last-of-type:mr-0"
                plan={plan}
                isCurrentPlan={false}
                isLoading={loading}
                onClick={() => handlePlanClick(plan)}
              />
            ))}
        </div>
        <Features />
        <div className="flex justify-between items-center h-10 my-3">
          <BackToTopButton className="ml-3" />
          <FeedbackButton />
        </div>
      </div>
    </>
  )
}

Pricing.activeLayout = 'Blank'
export default Pricing
