import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { ContentProps } from '../../content'

import ResetSentSVG from '@/assets/images/svg/reset-sent.svg'
const ImageComponent = ResetSentSVG as SvgrComponent

import ContentImageHeader from '../contentImageHeader.component'
import useAuth from '@/hooks/use-auth/use-auth'

const ResetPasswordSentContent: FC<ContentProps> = ({ switchContent }) => {
  const { currentEmail } = useAuth()
  const { t } = useTranslation('auth')

  return (
    <>
      <ContentImageHeader
        ImageComponent={ImageComponent}
        title={t('ResetPasswordSentContent-password-reset-link-sent-label')}
      >
        {t('ResetPasswordSentContent-info-before-email')}{' '}
        <span className="font-semibold">{currentEmail}</span>{' '}
        {t('ResetPasswordSentContent-info-after-email')}
      </ContentImageHeader>
      <Button
        label={t('ResetPasswordSentContent-edit-email-address-label')}
        onClick={() => switchContent('ResetPasswordContent')}
        style={ButtonStyle.solid}
        color={Colors.grey}
        size={Sizes.lg}
        full
        hover={false}
      />
    </>
  )
}

export default ResetPasswordSentContent
