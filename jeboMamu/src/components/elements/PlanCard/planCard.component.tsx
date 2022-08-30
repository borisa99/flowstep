import { useTranslation } from 'next-i18next'
import React, { FunctionComponent, useMemo } from 'react'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Plan } from './planCard.types'
import Button, { ButtonStyle } from '../Button/button.component'
import Icon from '../Icon/icon.component'

type Props = {
  plan: Plan
  className?: string
  isCurrentPlan?: boolean
  isLoading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const PlanCard: FunctionComponent<Props> = ({
  className,
  plan,
  isCurrentPlan,
  isLoading,
  onClick,
}) => {
  const { t } = useTranslation('pricing')

  // General info for basic & premium plans
  const basicPlan = useMemo(() => {
    return {
      paymentPlan: t('basic-payment-plan'),
      availableOptions: t('basic-available-options', {
        returnObjects: true,
      }) as string[],
      unavailableOptions: t('basic-unavailable-options', {
        returnObjects: true,
      }) as string[],
      action: t('basic-action'),
      shortDescription: t('basic-short-description'),
    }
  }, [t])

  const premiumPlan = useMemo(() => {
    return {
      paymentPlan: t('premium-payment-plan'),
      availableOptions: t('premium-available-options', {
        returnObjects: true,
      }) as string[],
      unavailableOptions: t('premium-unavailable-options', {
        returnObjects: true,
      }) as string[],
      action: t('premium-action'),
      shortDescription: t('premium-short-description'),
    }
  }, [t])

  const premium = plan.price > 0
  const fullPlan = premium
    ? { ...plan, ...premiumPlan }
    : { ...plan, ...basicPlan }

  return (
    <div
      className={`shadow-custom text-left text-gray-900 bg-white rounded-3xl w-84 ${className}`}
    >
      <div className="flex items-start justify-center flex-col p-6 border-b-1 border-gray-200">
        <div className="text-base font-bold mb-4">{fullPlan.title}</div>
        <div>
          <span>
            <h1 className="inline font-extrabold">
              {fullPlan.price || t('free')}
            </h1>
            <span className="text-base">{fullPlan.paymentPlan}</span>
          </span>
        </div>
        <div className="text-base text-gray-700 mt-1">
          {fullPlan.shortDescription}
        </div>
        {isCurrentPlan ? (
          <Button
            style={ButtonStyle.disabled}
            size={Sizes.base}
            color={Colors.grey}
            label="Current plan"
            full
            className="mt-4 cursor-not-allowed"
          />
        ) : (
          <Button
            style={isLoading ? ButtonStyle.loading : ButtonStyle.solid}
            size={Sizes.base}
            color={premium ? Colors.orange : Colors.grey}
            label={fullPlan.action}
            full
            className="mt-4"
            onClick={onClick}
          />
        )}
      </div>
      <div className="w-full p-6">
        {fullPlan.availableOptions.map((option, index) => (
          <div key={index} className="text-base mb-4 last:mb-0">
            <Icon
              icon="Checked-box"
              className="mr-3 text-gray-700 text-xl align-middle"
            />
            {option}
          </div>
        ))}
        {fullPlan.unavailableOptions.map((option, index) => (
          <div key={index} className="text-gray-500 mb-4 last:mb-0">
            <Icon icon="Cross" className="mr-3 text-xl  align-middle" />
            <span className="text-base  line-through">{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanCard
