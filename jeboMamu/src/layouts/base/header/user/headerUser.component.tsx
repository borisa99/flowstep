import { FC } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import HeaderDropdown from '../dropdown/headerDropdown.component'
import { UserResponse } from '@/graphql/generated'
import { RoleValue } from '@/types/RoleValue'
import { RootState } from '@/redux/store'
import ProfileSettingsPopup from '@/components/profile/settings/profileSettingsPopup.component'

type Props = {
  user: UserResponse
}
const HeaderUser: FC<Props> = ({ user }) => {
  const router = useRouter()
  const showSettingsPopup = useSelector(
    (state: RootState) => state.ui.showSettingsPopup
  )

  return (
    <div className="flex items-center">
      <ProfileSettingsPopup show={showSettingsPopup} user={user} />
      <HeaderDropdown user={user} />
      {user.roles.includes(RoleValue.PREMIUM) && (
        <Button
          label="Upload"
          color={Colors.blue}
          size={Sizes.base}
          style={ButtonStyle.solid}
          onClick={() => router.push('/upload')}
          className="ml-5"
        />
      )}
    </div>
  )
}

export default HeaderUser
