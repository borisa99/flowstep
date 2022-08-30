import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Alignments } from '@/components/types/aligment.types'
import { ContentType } from '@/components/types/content.types'
import Tag, { TagStyle } from '@/components/elements/Tag/tag.component'
import Popup from '@/components/elements/Popup/popup.component'
import {
  FlowScreencastComponentFragment,
  FlowScreencastDetailsFragment,
  FlowScreencastTimestampFragment,
} from '@/graphql/generated'
import { format } from 'date-fns'

interface Props {
  type: ContentType
  details: FlowScreencastDetailsFragment | null | undefined
  components: FlowScreencastComponentFragment[] | undefined
  timestamps: FlowScreencastTimestampFragment[] | undefined
  upload_date: string
  onClose: () => void
}

const DetailsPopup: FC<Props> = (props) => {
  const { onClose, type, details, components, timestamps, upload_date } = props

  const { t } = useTranslation('screencast-player')

  function getTitle(type: ContentType): string {
    switch (type) {
      case ContentType.screencast:
        return t('screencast-details-title')
      case ContentType.screenshot:
        return t('screenshot-details-title')
      case ContentType.attachment:
        return t('attachment-details-title')
      default:
        return ''
    }
  }
  return (
    <Popup
      title={getTitle(type)}
      modalClassNames="w-108"
      headerAlignment={Alignments.center}
      onClose={onClose}
    >
      {type === ContentType.screencast && (
        <div className="py-4 border-solid border-b-[1px] border-gray-200">
          <div className="inline text-gray-700 text-base">
            {t('upload-date-label')}
          </div>
          <div className="inline float-right">
            {format(new Date(upload_date), 'yyyy-MM-dd')}
          </div>
        </div>
      )}
      <div className="py-4 border-solid border-b-[1px] border-gray-200">
        <div className="inline text-gray-700 text-base">
          {t('app-version-label')}
        </div>
        <div className="inline float-right">{details?.app_version}</div>
      </div>
      <div className="py-4 border-solid border-b-[1px] border-gray-200">
        <div className="inline text-gray-700 text-base">
          {t('platform-label')}
        </div>
        <div className="inline float-right">{details?.platform_version}</div>
      </div>
      {/* {(type === ContentType.screenshot || type === ContentType.attachment) && (
        <>
          <div className="py-4 border-solid border-b-[1px] border-gray-200">
            <div className="inline text-gray-700 text-base">Category</div>
            <div className="inline float-right">details.category</div>
          </div>
          <div className="py-4 border-solid border-b-[1px] border-gray-200">
            <div className="inline text-gray-700 text-base">Upload date</div>
            <div className="inline float-right">details.uploadDate</div>
          </div>
        </>
      )} */}
      <div className="py-4 border-solid border-b-[1px] border-gray-200">
        <div className="inline text-gray-700 text-base">
          {t('region-label')}
        </div>
        <div className="inline float-right">{details?.region}</div>
      </div>
      <div className="pt-4 pb-2 border-solid border-b-[1px] border-gray-200">
        <div className="text-gray-700 text-base">{t('flows-label')}</div>
        <div className="pt-3">
          {timestamps?.map((timestamp) => (
            <Tag
              key={timestamp.id}
              size={Sizes.base}
              color={Colors.grey}
              style={TagStyle.light}
              label={timestamp.title}
              classNames="mb-2 mr-2"
            />
          ))}
        </div>
      </div>
      <div className="pt-4 -mb-2">
        <div className="text-gray-700 text-base">{t('components-label')}</div>
        <div className="pt-3">
          {components?.map((component) => (
            <Tag
              key={component.id}
              size={Sizes.base}
              color={Colors.grey}
              style={TagStyle.light}
              label={component.flow_component_value}
              classNames="mb-2 mr-2"
            />
          ))}
        </div>
      </div>
    </Popup>
  )
}

export default DetailsPopup
