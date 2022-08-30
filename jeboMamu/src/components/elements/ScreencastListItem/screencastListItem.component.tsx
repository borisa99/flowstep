import { FC } from 'react'
import classNames from 'classnames'

import {
  FlowScreencastTimestampFragment,
  FlowScreencastComponentFragment,
} from '@/graphql/generated'
import ScreencastOveflowColumn from './oveflowColumn/screencastOveflowColumn.component'
import Icon from '../Icon/icon.component'

interface Props {
  title: string
  flowName: string
  flows: FlowScreencastTimestampFragment[]
  components: FlowScreencastComponentFragment[]
  handleClick: () => void
}

const ScreencastListItem: FC<Props> = (props) => {
  const { title, flowName, flows, components, handleClick } = props

  const containerClasses = classNames(
    'group relative rounded-tl-xl rounded-bl-xl h-17 pt-3 pr-4 pl-10 overflow-hidden cursor-pointer shrink-0',
    'transition-all duration-300 linear'
  )

  return (
    <>
      <div
        className="grid grid-cols-3 rounded-xl hover:bg-gray-50 hover:cursor-pointer"
        onClick={handleClick}
      >
        <div className={containerClasses}>
          <div className="absolute top-3 left-0 w-10 text-center font-bold">
            <div className="relative">
              <Icon
                icon="Play"
                className={`absolute text-2xl left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 linear`}
              />
            </div>
          </div>
          <div
            className="font-bold text-ellipsis whitespace-nowrap overflow-hidden"
            title={title}
          >
            {title}
          </div>
          <div className="text-sm text-gray-700">{flowName}</div>
        </div>
        <ScreencastOveflowColumn
          title="flows"
          list={flows.map((flow) => {
            return {
              id: flow.id,
              title: flow.title,
            }
          })}
        />
        <ScreencastOveflowColumn
          title="components"
          list={components.map((component) => {
            return {
              id: component.id,
              title: component.flow_component_value,
            }
          })}
        />
      </div>
      <hr className="mx-2 border-gray-200 last:hidden" />
    </>
  )
}

export default ScreencastListItem
