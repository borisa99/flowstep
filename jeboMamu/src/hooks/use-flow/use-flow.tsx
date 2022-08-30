import {
  Flows_Insert_Input,
  useDeleteFlowUnusedMutation,
  useInsertUpdateFlowMutation,
} from '@/graphql/generated'
import { useAppSelector } from '@/redux/hooks'
import { selectObject } from '@/redux/slices/flow/flow.slice'
import { RoleValue } from '@/types/RoleValue'
import { useRouter } from 'next/router'

const useFlow = () => {
  const object = useAppSelector(selectObject)

  const router = useRouter()
  const [insertUpdateFlow, { loading: upsertLoading }] =
    useInsertUpdateFlowMutation({
      context: {
        headers: {
          'X-Hasura-Role': RoleValue.PREMIUM,
        },
      },
    })
  const [deleteFlowUnused, { loading: deleteLoading }] =
    useDeleteFlowUnusedMutation({
      context: {
        headers: {
          'X-Hasura-Role': RoleValue.PREMIUM,
        },
      },
    })

  const createEditFlow = async (
    isDraft = true,
    variables?: Flows_Insert_Input
  ) => {
    try {
      if (object.id) {
        await deleteFlowUnused({
          variables: {
            flow_id: object.id,
            screencast_ids: object.flow_screencasts?.data
              ?.map((screencast) => screencast.id)
              .filter((id) => id),
            screenshot_ids: object.flow_screenshots?.data
              ?.map((screenshot) => screenshot.id)
              .filter((id) => id),
            keyword_ids: object.flow_keywords?.data
              ?.map((keyword) => keyword.id)
              .filter((id) => id),
            attachment_ids: object.flow_attachments?.data
              ?.map((keyword) => keyword.id)
              .filter((id) => id),
          },
        })
      }
      const { data } = await insertUpdateFlow({
        variables: {
          object: variables ?? { ...object, is_draft: isDraft },
        },
      })
      if (!object.id) {
        const id = data?.insert_flows_one?.id
        router.push(`/upload/${id}`)
      }
      return data
    } catch (error) {
      alert(error)
    }
  }

  return {
    object,
    createEditFlow,
    createEditLoading: upsertLoading || deleteLoading,
  }
}

export default useFlow
