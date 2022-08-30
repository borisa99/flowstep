import { FC, useEffect } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch } from '@/redux/hooks'
import { setActiveScreencast } from '@/redux/slices/flow/flowScreencast.slice'
import { setObject } from '@/redux/slices/flow/flowScreencastDetails.slice'

import { RoleValue } from '@/types/RoleValue'

import UploadFlatInput from '@/components/upload/input/uploadFlatInput.component'
import ScreencastComponentsInput from '../components/screencastComponentsInput.component'
import ScreencastDetailsForm from '../details/screencastDetailsForm.component'
import ScreencastEditFromDropdown from './dropdown/ScreencastEditFromDropdown.component'
import ScreencastFlowForm from './flowForm/screencastFlowForm.component'

import {
  Flow_Screencasts_Insert_Input,
  useDetailsByFlowScreencastIdQuery,
} from '@/graphql/generated'

type Props = {
  activeScreencast?: Flow_Screencasts_Insert_Input | null
}
const ScreencastEditForm: FC<Props> = ({ activeScreencast }) => {
  const dispatch = useAppDispatch()
  const { data, loading } = useDetailsByFlowScreencastIdQuery({
    variables: { flow_screencast_id: activeScreencast?.id },
    skip: !activeScreencast?.id,
    context: {
      headers: {
        'x-hasura-role': RoleValue.PREMIUM,
      },
    },
    fetchPolicy: 'network-only',
  })

  const { t } = useTranslation('upload')

  useEffect(() => {
    if (data) {
      dispatch(setObject(data.flow_screencast_details[0]))
    }
  }, [data, dispatch])

  return (
    <div className="flex flex-col gap-8 w-[480px] pt-4">
      <div className="text-2xl">
        <UploadFlatInput
          handleBlur={(value) => {
            dispatch(setActiveScreencast({ ...activeScreencast, title: value }))
          }}
          defaultValue={activeScreencast?.title}
          fullWidth
        />
      </div>
      {/* <ScreencastEditFromDropdown title="Badges">
        <TextField
          label="Add badge"
          elementSize={Size.large}
          onBlur={(e) => console.log(e.target.value)}
        />
      </ScreencastEditFromDropdown> */}
      <ScreencastEditFromDropdown title={t('flows-dropdown-title')}>
        <ScreencastFlowForm />
      </ScreencastEditFromDropdown>
      <ScreencastEditFromDropdown title={t('components-dropdown-title')}>
        <ScreencastComponentsInput />
      </ScreencastEditFromDropdown>
      <ScreencastEditFromDropdown
        title={t('screencast-details-dropdown-title')}
      >
        {!loading && (
          <ScreencastDetailsForm
            defaultValues={data?.flow_screencast_details[0]}
          />
        )}
      </ScreencastEditFromDropdown>
    </div>
  )
}
export default ScreencastEditForm
