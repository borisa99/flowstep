import { FC } from 'react'

import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { ContentProps } from '../../content'
import ContentImageHeader from '../contentImageHeader.component'

import { useAppSelector } from '@/redux/hooks'
import useAuth from '@/hooks/use-auth/use-auth'

import ResetSuccessSVG from '@/assets/images/svg/reset-succcess.svg'
const ImageComponent = ResetSuccessSVG as SvgrComponent

const ResetPasswordSuccessContent: FC<ContentProps> = ({ close }) => {
  const { jwt } = useAppSelector((state) => state.auth.resetPassword)
  const { handleLogin } = useAuth()

  const handleClose = async () => {
    close()
    if (jwt?.token && jwt.refresh_token) {
      const { token, refresh_token } = jwt
      await handleLogin(token, refresh_token)
    } else {
      alert('Error')
    }
  }
  return (
    <>
      <ContentImageHeader
        ImageComponent={ImageComponent}
        title="Password Changed"
      >
        You are also signed in now
      </ContentImageHeader>
      <Button
        label="Done"
        onClick={handleClose}
        style={ButtonStyle.solid}
        color={Colors.blue}
        size={Sizes.lg}
        full
        hover={false}
      />
    </>
  )
}

export default ResetPasswordSuccessContent
