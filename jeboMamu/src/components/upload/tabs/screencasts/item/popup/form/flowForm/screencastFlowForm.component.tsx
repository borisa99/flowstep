import { useRef } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addScreencastTimestamp,
  selectScreencastTimestamps,
  updateScreencastTimestamp,
} from '@/redux/slices/flow/flowScreencast.slice'

import FlowInput, { FlowInputValue } from './flowInput/flowInput.component'
import { v4 as uuidv4 } from 'uuid'

const ScreencastFlowForm = () => {
  const dispatch = useAppDispatch()
  const screencastTimestamps = useAppSelector(selectScreencastTimestamps)

  const timestampsDiv = useRef<HTMLDivElement>(null)

  const { t } = useTranslation('upload')

  const hanldeBlur = (flowInput: FlowInputValue, index: number) => {
    dispatch(
      updateScreencastTimestamp({
        timestamp: { ...flowInput },
        index,
      })
    )
  }

  const handleAddClick = () => {
    dispatch(addScreencastTimestamp({ title: '', timestamp: '' }))
    setTimeout(() => {
      if (timestampsDiv.current) {
        timestampsDiv.current.scrollTop = timestampsDiv.current.scrollHeight
      }
    }, 100)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div ref={timestampsDiv} className="w-full max-h-72 overflow-y-auto">
        {screencastTimestamps &&
          screencastTimestamps.map((timestamp, index) => {
            return (
              <FlowInput
                key={uuidv4()}
                index={index}
                defaultValue={{
                  id: timestamp.id,
                  title: timestamp.title as string,
                  timestamp: timestamp.timestamp,
                }}
                handleBlur={(flowInput) => hanldeBlur(flowInput, index)}
              />
            )
          })}
      </div>
      <div
        onClick={handleAddClick}
        className="flex justify-center items-center w-36  bg-gray-200 rounded-lg cursor-pointer"
      >
        <span className="font-bold flex py-2">{t('add-flow-action')}</span>
      </div>
    </div>
  )
}
export default ScreencastFlowForm
