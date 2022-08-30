import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setObject } from '@/redux/slices/flow/flowAppInfo.slice'
import {
  resetContent,
  selectActiveContent,
  switchContent,
} from '@/redux/slices/upload/uploadContinuePopup.slice'

import {
  components,
  UploadContinueContentName,
} from './uploadContinuePopupContent'
import { DisabledProps } from '@/types/DisabledProps'
import { RoleValue } from '@/types/RoleValue'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import { Alignments } from '@/components/types/aligment.types'
import Popup from '@/components/elements/Popup/popup.component'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

import { useFlowAppInfoByFlowIdQuery } from '@/graphql/generated'

const UploadContinuePopup: FC<DisabledProps> = ({ isDisabled }) => {
  const dispatch = useAppDispatch()
  const { query } = useRouter()

  const [isContinueOpen, setIsContinueOpen] = useState(false)
  const activeContent = useAppSelector(selectActiveContent)

  const { t } = useTranslation('upload')

  const { data } = useFlowAppInfoByFlowIdQuery({
    variables: {
      flow_id: query.flow_id && (query.flow_id[0] as string),
    },
    context: {
      headers: { 'x-hasura-role': RoleValue.PREMIUM },
    },
  })

  useEffect(() => {
    if (data && data.flow_app_info && data.flow_app_info[0]) {
      const appInfo = data.flow_app_info[0]
      dispatch(
        setObject({
          ...appInfo,
        })
      )
    }
  }, [data, dispatch])

  const Active = components[activeContent]

  const handleSwitch = (contentName: UploadContinueContentName) => {
    dispatch(switchContent(contentName))
  }
  const handleClose = () => {
    dispatch(resetContent())
    setIsContinueOpen(false)
  }

  return (
    <>
      <Button
        label={t('continue-action')}
        color={Colors.blue}
        size={Sizes.base}
        style={isDisabled ? ButtonStyle.disabled : ButtonStyle.solid}
        onClick={() => setIsContinueOpen(true)}
      />
      {isContinueOpen && (
        <Popup
          title={t(`${activeContent}-title`)}
          subtitle={t(`${activeContent}-subtitle`)}
          headerAlignment={Alignments.center}
          onClose={handleClose}
          modalClassNames="w-108 max-h-screen max-h-[calc(100vh_-_56px)]"
        >
          <Active
            switchUploadContinueContent={handleSwitch}
            close={handleClose}
          />
        </Popup>
      )}
    </>
  )
}

export default UploadContinuePopup
