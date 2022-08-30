import { FC, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { Sizes } from '@/components/types/sizes.types'
import Avatar, {
  AvatarStyle,
} from '@/components/elements/Avatar/avatar.component'
import Icon from '@/components/elements/Icon/icon.component'
import {
  SaveCollectionFragment,
  useDeletCollectionFlowMutation,
  useInsertCollectionFlowMutation,
} from '@/graphql/generated'

interface Props {
  collection: SaveCollectionFragment
  screencastId: string
  toggleCollectionSaved: (collectionId: string) => void
}
type RowIcon = 'Check' | 'Trash-alt' | 'Heart' | ''
const CollectionRow: FC<Props> = ({
  collection,
  screencastId,
  toggleCollectionSaved,
}) => {
  const { t } = useTranslation('screencast-player')

  const [iconName, setIconName] = useState<RowIcon>(
    collection.is_screencast_in_collection ? 'Check' : ''
  )
  const [deleteCollection] = useDeletCollectionFlowMutation({
    variables: {
      collection_id: collection.id,
      flow_screencast_id: screencastId,
    },
  })

  const [insertCollectionFlow] = useInsertCollectionFlowMutation({
    variables: {
      object: {
        flow_screencast_id: screencastId,
        collection_id: collection.id,
      },
    },
  })
  const handleMouseOver = () => {
    if (collection.is_screencast_in_collection) {
      setIconName('Trash-alt')
    } else {
      setIconName('Heart')
    }
  }

  const handleMouseLeave = () => {
    if (collection.is_screencast_in_collection) {
      setIconName('Check')
    } else {
      setIconName('')
    }
  }

  const handleClick = () => {
    if (collection.is_screencast_in_collection) {
      setIconName('Check')
      deleteCollection()
    } else {
      setIconName('Trash-alt')
      insertCollectionFlow()
    }
    toggleCollectionSaved(collection.id)
  }

  return (
    <div
      key={`collection-${collection.id}`}
      className="flex justify-start items-center cursor-pointer mx-3 py-3 border-b-1 border-solid border-gray-200 last:border-0"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Avatar
        size={Sizes.base}
        style={AvatarStyle.square}
        styleCss={{
          backgroundColor: collection.avatar_backgorund_color,
        }}
        iconUrl={collection.avatar_url}
      />
      <div className="ml-4">
        <h6 className="text-base">{collection.title}</h6>
        <div className="text-xs text-gray-700 font-normal">
          <span>
            {collection.collection_flows_aggregate.aggregate?.count}{' '}
            {collection?.collection_flows_aggregate.aggregate?.count &&
            collection?.collection_flows_aggregate.aggregate?.count > 1
              ? t('flows-word')
              : t('flow-word')}
          </span>
        </div>
      </div>
      <div
        className={`flex items-center ml-auto ${
          iconName === 'Trash-alt' ? 'text-critical' : ''
        }`}
      >
        <Icon icon={iconName} className="text-2xl" />
      </div>
    </div>
  )
}

export default CollectionRow
