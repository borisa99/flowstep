import { FC } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { ContentProps } from '../content'
import Avatar, {
  AvatarStyle,
} from '@/components/elements/Avatar/avatar.component'
import { useAppSelector } from '@/redux/hooks'
import { selectJWT } from '@/redux/slices/auth.slice'
import useAuth from '@/hooks/use-auth/use-auth'

const StripeErrorContent: FC<ContentProps> = () => {
  const router = useRouter()
  const jwt = useAppSelector(selectJWT)
  const { t } = useTranslation('auth')

  const { handleLogin } = useAuth()

  const tryAgain = async () => {
    await login()
    router.push('/pricing')
  }

  const login = async () => {
    if (jwt) await handleLogin(jwt.token, jwt.refresh_token)
  }
  return (
    <div className="flex flex-col justify-center items-center text-gray-900">
      <div className="pt-8 pb-4">
        <Avatar
          size={Sizes.base}
          style={AvatarStyle.circle}
          iconUrl="/emojis/finger.svg"
          className="bg-warningBg"
        />
      </div>
      <h6 className="text-bold mb-2">{t('oops')}</h6>
      <div className="text-base font-light text-center mb-8">
        {t('stripe-payment-issue-msg')}
      </div>
      <Button
        style={ButtonStyle.solid}
        color={Colors.blue}
        label={t('try-again-label')}
        size={Sizes.m}
        full
        className="mb-2"
        onClick={tryAgain}
      />
      <Button
        style={ButtonStyle.solid}
        color={Colors.white}
        label={t('maybe-later-label')}
        size={Sizes.m}
        full
        onClick={login}
      />
    </div>
  )
}

export default StripeErrorContent
