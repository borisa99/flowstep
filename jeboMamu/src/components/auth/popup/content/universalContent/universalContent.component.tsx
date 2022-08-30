import { FC, useRef, useState } from 'react'
import styles from '@/styles/AuthPopup.module.css'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Separator from '@/components/elements/Separator/separator.component'
import UniversalContentForm from './form/universalContentForm.component'

import GoogleSvg from '@/assets/images/svg/google.svg'
const GoogleSVGR = GoogleSvg as SvgrComponent

import { ContentProps } from '../content'
import { useGoogleUrlLazyQuery } from '@/graphql/generated'

const UniversalContent: FC<ContentProps> = ({ switchContent }) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [googleUrl, setGoogleUrl] = useState('')
  const { t } = useTranslation(['auth', 'common'])

  const [getGoogleUrl, { loading }] = useGoogleUrlLazyQuery()

  return (
    <>
      <Button
        label={t('continue-with-google-label')}
        IconComponent={GoogleSVGR}
        iconName="User"
        style={loading ? ButtonStyle.loading : ButtonStyle.solid}
        color={Colors.grey}
        size={Sizes.lg}
        full
        outline
        onClick={async () => {
          const { data } = await getGoogleUrl()
          if (data?.google_url) {
            setGoogleUrl(data.google_url.value)
          }
          linkRef.current?.click()
        }}
      />
      <a ref={linkRef} href={googleUrl} className="hidden"></a>
      <Separator size={Sizes.xs} label={t('OR-label')} />
      <UniversalContentForm switchContent={switchContent} />
      <span className={styles.contentFooter}>
        {t('UniversalContent-footer')}
        <span className="font-semibold">
          {' '}
          {t('terms-&-conditions-label')}
        </span>{' '}
        {t('and-label', { ns: 'common' })}
        <span className="font-semibold">
          {' '}
          {t('privacy-policy-label', { ns: 'common' })}
        </span>
        .
      </span>
    </>
  )
}
export default UniversalContent
