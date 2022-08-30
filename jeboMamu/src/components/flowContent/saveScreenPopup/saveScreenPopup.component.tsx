import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppSelector } from '@/redux/hooks'
import { selectUserId } from '@/redux/slices/auth.slice'

import { Alignments } from '@/components/types/aligment.types'
import { ContentType } from '@/components/types/content.types'
import { Size } from '@/components/types/textField.types'
import Popup from '@/components/elements/Popup/popup.component'
import TextField from '@/components/elements/TextField/textField.component'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'

import CollectionRow from './collectionRow.component'
import CreateCollectionButton from './createCollectionButton/createCollectionButton.component'
import NoCollectionsMessage from './createCollectionButton/noCollectionsMessage.component'

import {
  SaveCollectionFragment,
  useUserSaveCollectionsQuery,
} from '@/graphql/generated'

interface Props {
  id: string
  type: ContentType
  onClose: () => void
}

const SaveScreenPopup: FC<Props> = ({ onClose, type, id }) => {
  const [searchValue, setSearchValue] = useState('')
  const [collectionData, setCollectionData] = useState<
    SaveCollectionFragment[]
  >([])
  const userId = useAppSelector(selectUserId)

  const { t } = useTranslation('screencast-player')

  const { loading, data } = useUserSaveCollectionsQuery({
    variables: { user_id: userId, screencast_id: id },
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    if (data?.collections) {
      const collections = data?.collections.filter((collection) =>
        collection.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      setCollectionData(collections)
    }
  }, [data, searchValue])

  const toggleCollectionSaved = useCallback((collectionId: string) => {
    setCollectionData((prev) =>
      [...prev].map((collection) => {
        const isPreviouslySaved = collection.is_screencast_in_collection
        const previousCount =
          collection.collection_flows_aggregate.aggregate?.count

        if (collection.id === collectionId) {
          return {
            ...collection,
            is_screencast_in_collection:
              !collection.is_screencast_in_collection,
            collection_flows_aggregate: {
              aggregate: {
                count:
                  isPreviouslySaved && previousCount
                    ? previousCount - 1
                    : previousCount
                    ? previousCount + 1
                    : 1,
              },
            },
          }
        }
        return collection
      })
    )
  }, [])

  const content: React.ReactNode = useMemo(() => {
    let contentValue: React.ReactNode
    if (loading) {
      contentValue = (
        <div className="flex justify-center items-center">
          <Spinner size={Sizes.base} />
        </div>
      )
    }
    if (collectionData?.length === 0) {
      contentValue = <NoCollectionsMessage />
    }
    if (collectionData && collectionData?.length > 0) {
      contentValue = collectionData.map((collection, index) => (
        <CollectionRow
          key={index}
          collection={collection}
          screencastId={id}
          toggleCollectionSaved={toggleCollectionSaved}
        />
      ))
    }
    if (collectionData.length === 0 && searchValue) {
      contentValue = (
        <CreateCollectionButton searchValue={searchValue} screencastId={id} />
      )
    }
    return contentValue
  }, [loading, collectionData, id, toggleCollectionSaved, searchValue])

  const getTitle = (type: ContentType): string => {
    switch (type) {
      case ContentType.screencast:
        return t('save-this-screencast-title')
      case ContentType.screenshot:
        return t('save-this-screenshot-title')
      default:
        return ''
    }
  }

  return (
    <Popup
      title={getTitle(type)}
      modalClassNames="w-108 max-h-[398px]"
      headerAlignment={Alignments.center}
      onClose={onClose}
    >
      <TextField
        elementSize={Size.small}
        iconName="Search"
        label={t('search-or-create-collection-label')}
        className="bg-white"
        autoFocus
        onTextChange={(e) => setSearchValue(e.target.value)}
        handleReset={() => setSearchValue('')}
      />
      <div className="overflow-auto py-4">{content}</div>
    </Popup>
  )
}

export default SaveScreenPopup
