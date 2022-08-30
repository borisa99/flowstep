import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectActiveIndex } from '@/redux/slices/flow/flowScreencast.slice'
import { updateScreencastIdTitle } from '@/redux/slices/flow/flow.slice'
import { selectScreencastDetailsObject } from '@/redux/slices/flow/flowScreencastDetails.slice'

import useFlow from '@/hooks/use-flow/use-flow'
import { RoleValue } from '@/types/RoleValue'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

import {
  Flow_Screencasts_Insert_Input,
  useDeleteFlowScreencastUnusedMutation,
  useInsertUpdateFlowScreencastMutation,
  useUpsertFlowScreencastDetailsMutation,
} from '@/graphql/generated'

type Props = {
  handleClose: () => void
  activeScreeencast: Flow_Screencasts_Insert_Input | null
}
const ItemPopupHeaderButtons: FC<Props> = ({
  handleClose,
  activeScreeencast,
}) => {
  const dispatch = useAppDispatch()
  const [success, setSuccess] = useState(false)
  const activeIndex = useAppSelector(selectActiveIndex)
  const screencastDetails = useAppSelector(selectScreencastDetailsObject)
  const { query } = useRouter()

  const { t } = useTranslation(['upload', 'common'])

  const { createEditFlow } = useFlow()
  const [insetUpdateScreencast, { loading }] =
    useInsertUpdateFlowScreencastMutation({
      context: { headers: { 'x-hasura-role': RoleValue.PREMIUM } },
    })

  const [deleteScreencastComponents] = useDeleteFlowScreencastUnusedMutation({
    context: { headers: { 'x-hasura-role': RoleValue.PREMIUM } },
  })
  const [upsertScreencastDetails] = useUpsertFlowScreencastDetailsMutation({
    context: { headers: { 'x-hasura-role': RoleValue.PREMIUM } },
  })
  const handleSave = async () => {
    setSuccess(true)

    const variables = {
      object: {
        ...activeScreeencast,
        flow_screencast_timestamps: {
          ...activeScreeencast?.flow_screencast_timestamps,
          data: activeScreeencast?.flow_screencast_timestamps?.data.filter(
            (item) => item.title && item.timestamp
          ),
        },
      } as Flow_Screencasts_Insert_Input,
    }
    // If flow is not saved to the db go
    // ahead and save it, after that insert screencast
    if (query.flow_id) {
      variables.object.flow_id = query.flow_id[0]
    } else {
      // insert new screencast and set id from it
      const data = await createEditFlow()
      if (
        data?.insert_flows_one &&
        data.insert_flows_one.flow_screencasts.length > 0
      ) {
        variables.object.flow_id = data?.insert_flows_one.id
        variables.object.id =
          data.insert_flows_one.flow_screencasts[activeIndex as number].id
      }
    }
    // Delete possibly removed components and timestamps
    if (variables.object.id) {
      await deleteScreencastComponents({
        variables: {
          flow_screencast_id: variables.object.id,
          component_ids:
            variables.object.flow_screencast_components?.data
              .filter((component) => component.id)
              .map((component) => component.id) ?? [],
          timestamp_ids:
            variables.object.flow_screencast_timestamps?.data
              .filter((timestmap) => timestmap.id)
              .map((timestmap) => timestmap.id) ?? [],
        },
      })
    }

    // Update flow_screencasts in object model with newly inserted ids
    const { data: screencastData } = await insetUpdateScreencast({
      variables,
    })

    const screencastId = screencastData?.insert_flow_screencasts_one?.id
    /* Update flow_screencast_details with its own object
     flow_screencast_details are updated separatly from the main object
     beacuse they have one-to-one relatiosnhip and upsert does not work on Hasura yet*/

    await upsertScreencastDetails({
      variables: {
        object: {
          ...screencastDetails,
          flow_screencast_id: screencastId,
        },
      },
    })

    // Update flow screencast title in main upload page array
    await dispatch(
      updateScreencastIdTitle({
        index: activeIndex as number,
        title: variables.object.title,
        id: screencastId,
      })
    )
    setTimeout(() => {
      setSuccess(false)
      handleClose()
    }, 1000)
  }
  return (
    <div className="absolute right-6 top-3 flex gap-3">
      <Button
        color={Colors.grey}
        label={t('discard-changes-action')}
        size={Sizes.base}
        style={ButtonStyle.solid}
        onClick={handleClose}
      />
      <Button
        color={Colors.blue}
        label={t('save-label', { ns: 'common' })}
        size={Sizes.base}
        style={
          loading || success
            ? loading
              ? ButtonStyle.loading
              : ButtonStyle.success
            : ButtonStyle.solid
        }
        onClick={handleSave}
      />
    </div>
  )
}
export default ItemPopupHeaderButtons
