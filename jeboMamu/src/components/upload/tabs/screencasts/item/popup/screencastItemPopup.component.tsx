import { FC, useEffect } from 'react'
import Popup from '@/components/elements/Popup/popup.component'
import UploadTabScreencastItem from '../uploadTabScreencastItem.component'

import ItemPopupHeaderButtons from './headerButtons/itemPopupHeaderButtons.component'
import ScreencastEditForm from './form/screencastEditForm.component'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  selectActiveScreencast,
  selectScreencastId,
  setActiveScreencast,
} from '@/redux/slices/flow/flowScreencast.slice'
import {
  Flow_Screencasts_Insert_Input,
  Flow_Screencast_Components_Constraint,
  Flow_Screencast_Timestamps_Constraint,
  Flow_Screencast_Timestamps_Update_Column,
  useFlowScreencastByIdLazyQuery,
} from '@/graphql/generated'
import { RoleValue } from '@/types/RoleValue'
import Spinner from '@/components/elements/Spinner/spinner.component'
import { Sizes } from '@/components/types/sizes.types'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const ScreencastItemPopup: FC<Props> = ({ isOpen, handleClose }) => {
  const dispatch = useAppDispatch()
  const activeScreeencast = useAppSelector(selectActiveScreencast)
  const screencast_id = useAppSelector(selectScreencastId)
  const [getScreencastById] = useFlowScreencastByIdLazyQuery({
    variables: { id: screencast_id },
    context: {
      headers: {
        'x-hasura-role': RoleValue.PREMIUM,
      },
    },
  })

  useEffect(() => {
    if (screencast_id) {
      const getScreencast = async () => {
        const response = await getScreencastById()
        if (response.data && response.data.flow_screencasts_by_pk) {
          const newActive: Flow_Screencasts_Insert_Input = {
            id: response.data.flow_screencasts_by_pk.id,
            title: response.data.flow_screencasts_by_pk.title,
            banner_url: response.data.flow_screencasts_by_pk.banner_url,
            screencast_url: response.data.flow_screencasts_by_pk.screencast_url,
            created_at: response.data.flow_screencasts_by_pk.created_at,
            updated_at: response.data.flow_screencasts_by_pk.updated_at,
            flow_screencast_timestamps: {
              data: response.data.flow_screencasts_by_pk
                .flow_screencast_timestamps,
              on_conflict: {
                constraint:
                  Flow_Screencast_Timestamps_Constraint.FlowScreencastTimestampsPkey,
                update_columns: [
                  Flow_Screencast_Timestamps_Update_Column.Timestamp,
                  Flow_Screencast_Timestamps_Update_Column.Title,
                ],
              },
            },
            flow_screencast_components: {
              data: response.data.flow_screencasts_by_pk
                .flow_screencast_components,
              on_conflict: {
                constraint:
                  Flow_Screencast_Components_Constraint.FlowScreencastComponentsPkey1,
                update_columns: [],
              },
            },
          }

          dispatch(setActiveScreencast(newActive))
        }
      }
      getScreencast()
    }
  }, [dispatch, getScreencastById, screencast_id])

  return (
    <>
      {isOpen && (
        <Popup
          onClose={handleClose}
          modalClassNames="absolute h-[calc(100vh_-_56px)] left-2 right-2 bottom-2"
          hideClose
        >
          {!activeScreeencast && screencast_id ? (
            <div className="flex  h-[calc(100vh_-_56px)] justify-center items-center">
              <Spinner size={Sizes.lg} />
            </div>
          ) : (
            <>
              <ItemPopupHeaderButtons
                handleClose={handleClose}
                activeScreeencast={activeScreeencast}
              />
              <div className="flex justify-center gap-8 relative">
                <div className="w-[375px]">
                  <UploadTabScreencastItem
                    isQueued={true}
                    editable={false}
                    item={activeScreeencast}
                    image={activeScreeencast?.banner_url}
                    withoutTitle
                    large
                  />
                </div>
                <ScreencastEditForm activeScreencast={activeScreeencast} />
              </div>
            </>
          )}
        </Popup>
      )}
    </>
  )
}

export default ScreencastItemPopup
