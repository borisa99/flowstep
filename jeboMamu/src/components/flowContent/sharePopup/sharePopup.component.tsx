import { FC, useMemo } from 'react'

import { useTranslation } from 'next-i18next'

import { Sizes } from '@/components/types/sizes.types'
import { Alignments } from '@/components/types/aligment.types'
import { Colors } from '@/components/types/colors.types'
import { ContentType } from '@/components/types/content.types'
import { Size } from '@/components/types/textField.types'

import Popup from '@/components/elements/Popup/popup.component'
import TextField from '@/components/elements/TextField/textField.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

interface Props {
  type: ContentType
  onClose: () => void
  slug?: string
  slugTitle?: string
}

const SharePopup: FC<Props> = (props) => {
  const { onClose, type, slug, slugTitle } = props

  const { t } = useTranslation('screencast-player')

  const link = useMemo(() => {
    let windowLocation = window.location.href.replace('/', '')
    if (slug) {
      windowLocation += `?${slugTitle}=${slug}`
    }
    return windowLocation
  }, [slug, slugTitle])

  const encodedLink = encodeURIComponent(link)

  const getTitle = (type: ContentType): string => {
    switch (type) {
      case ContentType.screencast:
        return t('share-this-screencast-title')
      case ContentType.screenshot:
        return t('share-this-screenshot-title')
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
      <TextField
        elementSize={Size.normal}
        value={link}
        className="bg-gray-100"
        readOnly
        onTextChange={() => null}
        handleReset={() => null}
      />
      <div className="pt-4 pb-0">
        <Button
          style={ButtonStyle.solid}
          color={Colors.blue}
          label={t('copy-link-action')}
          size={Sizes.base}
          iconName="Copy"
          className="mb-4"
          full
          onClick={() => navigator.clipboard.writeText(link)}
        />
        <Button
          style={ButtonStyle.solid}
          color={Colors.grey}
          outline
          label="WhatsApp"
          size={Sizes.base}
          iconUrl="/brands/WA.svg"
          className="mb-4"
          full
          onClick={() =>
            window.open(`https://api.whatsapp.com/send?text=${encodedLink}`)
          }
        />
        <Button
          style={ButtonStyle.solid}
          color={Colors.grey}
          outline
          label="Facebook"
          size={Sizes.base}
          iconUrl="/brands/FB.svg"
          className="mb-4"
          full
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`
            )
          }
        />
        <Button
          style={ButtonStyle.solid}
          color={Colors.grey}
          outline
          label="Twitter"
          size={Sizes.base}
          iconUrl="/brands/TW.svg"
          className="mb-4"
          full
          onClick={() =>
            window.open(`https://twitter.com/intent/tweet?text=${encodedLink}`)
          }
        />
        <Button
          style={ButtonStyle.solid}
          color={Colors.grey}
          outline
          label="LinkedIn"
          size={Sizes.base}
          iconUrl="/brands/LN.svg"
          full
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodedLink}`
            )
          }
        />
      </div>
    </Popup>
  )
}

export default SharePopup
