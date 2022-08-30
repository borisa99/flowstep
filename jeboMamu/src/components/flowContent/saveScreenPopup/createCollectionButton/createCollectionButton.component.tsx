import { FC } from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { colors } from '@/utils/colors'
import {
  Collection_Visibility_Enum,
  useInsertCollectionFlowMutation,
} from '@/graphql/generated'

type Props = {
  searchValue: string
  screencastId: string
}
const CreateCollectionButton: FC<Props> = ({ searchValue, screencastId }) => {
  const { t } = useTranslation('screencast-player')
  const router = useRouter()

  const [insertCollectionFlow] = useInsertCollectionFlowMutation({})

  const handleClick = async () => {
    // Check if the screencast is already added to collection
    const res = await insertCollectionFlow({
      variables: {
        object: {
          flow_screencast_id: screencastId,
          collection: {
            data: {
              title: searchValue,
              avatar_backgorund_color: colors.lightblue,
              avatar_url: `/emojis/rocket.svg`,
              collection_visibility_value: Collection_Visibility_Enum.Private,
            },
          },
        },
      },
    })
    router.push(
      `/collection/${res.data?.insert_collection_flows_one?.collection_id}`
    )
  }
  return (
    <div
      className="flex items-center pl-3 rounded-md pt-2 pb-2 cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center w-11 h-11 bg-primary rounded-lg mr-3">
        <div className="flex justify-center items-center w-4 h-4 bg-white rounded-sm">
          <span className="text-primary">+</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-900 text-base whitespace-nowrap text-ellipsis">
          {searchValue}
        </span>
        <span className="text-gray-700 text-sm whitespace-nowrap text-ellipsis">
          {t('create-or-save-to')} {searchValue}
        </span>
      </div>
    </div>
  )
}

export default CreateCollectionButton
