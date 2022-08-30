import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selecfFlowAppInfoObject,
  setObject,
} from '@/redux/slices/flow/flowAppInfo.slice'

import useForm from '@/hooks/use-form-fields/use-form-fields'
import useFlow from '@/hooks/use-flow/use-flow'
import { FieldRules } from '@/hooks/use-form-fields/fieldRules'
import { RoleValue } from '@/types/RoleValue'
import { UploadContinueContentProps } from '../uploadContinuePopupContent'
import { Size } from '@/components/types/textField.types'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import TextField from '@/components/elements/TextField/textField.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

import { useUpsertFlowAppInfoMutation } from '@/graphql/generated'

const UploadContinueAppInfo: FC<UploadContinueContentProps> = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const flowAppInfoObject = useAppSelector(selecfFlowAppInfoObject)
  const { createEditFlow } = useFlow()

  const { t } = useTranslation('upload')

  const [upsertFlowAppInfo] = useUpsertFlowAppInfoMutation({
    context: { headers: { 'x-hasura-role': RoleValue.PREMIUM } },
  })

  const { values, handleChange, handleSubmit, errors, reset } = useForm(
    {
      category: flowAppInfoObject?.category ?? '',
      number_of_downloads: flowAppInfoObject?.number_of_downloads ?? '',
      average_rating: flowAppInfoObject?.average_rating ?? '',
      developer: flowAppInfoObject?.developer ?? '',
      website: flowAppInfoObject?.website ?? '',
      app_store_link: flowAppInfoObject?.app_store_link ?? '',
    },
    {
      category: [FieldRules.required],
      number_of_downloads: [FieldRules.integer],
      average_rating: [FieldRules.doublePrecision],
    },
    async () => {
      setLoading(true)

      const newAppInfo = { ...flowAppInfoObject, ...values }

      const response = await createEditFlow(false)

      newAppInfo.flow_id = response?.insert_flows_one?.id
      newAppInfo.number_of_downloads = parseInt(newAppInfo.number_of_downloads)
      newAppInfo.average_rating = parseFloat(newAppInfo.average_rating)

      dispatch(setObject(newAppInfo))
      await upsertFlowAppInfo({
        variables: {
          object: newAppInfo,
        },
      })
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        router.push('/')
      }, 1000)
    }
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextField
          label={t('category-label')}
          name="category"
          defaultValue={flowAppInfoObject?.category ?? ''}
          error={errors['category']}
          elementSize={Size.large}
          onTextChange={handleChange}
          handleReset={() => reset('category')}
        />
        <TextField
          label={t('num-of-downloads-label')}
          name="number_of_downloads"
          defaultValue={
            flowAppInfoObject?.number_of_downloads
              ? JSON.stringify(flowAppInfoObject?.number_of_downloads)
              : ''
          }
          error={errors['number_of_downloads']}
          elementSize={Size.large}
          onTextChange={handleChange}
          handleReset={() => reset('number_of_downloads')}
        />
        <TextField
          label={t('avg-rating-label')}
          name="average_rating"
          defaultValue={
            flowAppInfoObject?.average_rating
              ? JSON.stringify(flowAppInfoObject?.average_rating)
              : ''
          }
          error={errors['average_rating']}
          elementSize={Size.large}
          onTextChange={handleChange}
          handleReset={() => reset('average_rating')}
        />
        <TextField
          label={t('developer-label')}
          name="developer"
          defaultValue={flowAppInfoObject?.developer ?? ''}
          error={errors['developer']}
          elementSize={Size.large}
          onTextChange={handleChange}
          handleReset={() => reset('developer')}
        />
        <TextField
          label={t('website-label')}
          name="website"
          defaultValue={flowAppInfoObject?.website ?? ''}
          error={errors['website']}
          elementSize={Size.large}
          onTextChange={handleChange}
          handleReset={() => reset('website')}
        />
        <TextField
          label={t('app-store-link-label')}
          name="app_store_link"
          defaultValue={flowAppInfoObject?.app_store_link ?? ''}
          error={errors['app_store_link']}
          elementSize={Size.large}
          onTextChange={handleChange}
          handleReset={() => reset('app_store_link')}
        />
        <Button
          label={t('publish-action')}
          color={Colors.blue}
          size={Sizes.lg}
          style={
            loading || success
              ? loading
                ? ButtonStyle.loading
                : ButtonStyle.success
              : ButtonStyle.solid
          }
          full
        />
      </form>
    </>
  )
}

export default UploadContinueAppInfo
