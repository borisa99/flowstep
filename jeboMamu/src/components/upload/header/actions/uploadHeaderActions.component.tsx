import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import useFlow from '@/hooks/use-flow/use-flow'
import { DisabledProps } from '@/types/DisabledProps'
import UploadDeleteDropdown from './popup/deleteDropdown/uploadDeleteDropdown.component'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import UploadContinuePopup from './popup/uploadContinuePopup'

const UploadHeaderActions: FC<DisabledProps> = ({ isDisabled }) => {
  const router = useRouter()

  const { t } = useTranslation('upload')

  const [success, setSuccess] = useState(false)
  const { object, createEditFlow, createEditLoading } = useFlow()

  const handleCreateEdit = async () => {
    // Remove sceencasts on BE that do not exist locally
    // Has to be done here because in the list of them there can be existing ones and new ones

    await createEditFlow()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 1000)
  }
  return (
    <div className="flex items-center gap-3">
      {object.id && <UploadDeleteDropdown id={object.id} />}
      {!isDisabled ? (
        <Button
          label={t('save-as-draft-action')}
          color={Colors.grey}
          size={Sizes.base}
          style={
            createEditLoading || success
              ? createEditLoading
                ? ButtonStyle.loading
                : ButtonStyle.success
              : ButtonStyle.solid
          }
          onClick={handleCreateEdit}
        />
      ) : (
        <Button
          label={t('cancel-action')}
          color={Colors.grey}
          size={Sizes.base}
          style={ButtonStyle.solid}
          onClick={() => router.push('/')}
        />
      )}
      <UploadContinuePopup
        isDisabled={isDisabled || object.flow_screencasts?.data.length === 0}
      />
    </div>
  )
}

export default UploadHeaderActions
