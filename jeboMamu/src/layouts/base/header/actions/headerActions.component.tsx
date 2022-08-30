import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { useAppDispatch } from '@/redux/hooks'
import { setIsOpen } from '@/redux/slices/auth.slice'

import AuthPopup from './authPopup/authPopup.component'

const HeaderActions = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <AuthPopup />
      <Button
        label="Log In"
        style={ButtonStyle.solid}
        color={Colors.transparent}
        size={Sizes.base}
        onClick={() => dispatch(setIsOpen(true))}
      />
      <Button
        label="Sign Up"
        style={ButtonStyle.solid}
        color={Colors.blue}
        size={Sizes.base}
        onClick={() => dispatch(setIsOpen(true))}
      />
    </>
  )
}
export default HeaderActions
