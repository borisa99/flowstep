import { useState } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addScreencastComponent,
  deleteScreencastComponent,
  selectScreencastComponents,
} from '@/redux/slices/flow/flowScreencast.slice'

import { Size } from '@/components/types/textField.types'
import { RoleValue } from '@/types/RoleValue'
import Dropdown from '@/components/elements/Dropdown/dropdown.component'
import Tags from '@/components/elements/Tags/tags.component'
import DropdownItem from '@/components/elements/Dropdown/item/dropdownItem.component'
import TextField from '@/components/elements/TextField/textField.component'

import {
  Flow_Components_Enum,
  InputMaybe,
  useFlowComponentsQuery,
} from '@/graphql/generated'

const ScreencastComponentsInput = () => {
  const dispatch = useAppDispatch()

  const { t } = useTranslation('upload')

  const { data } = useFlowComponentsQuery({
    context: { headers: { 'x-hasura-role': RoleValue.PREMIUM } },
  })

  const [isComponentsOpen, setIsComponentsOpen] = useState(false)
  const [componentSearch, setComponentSearch] = useState('')

  const screencastComponents = useAppSelector(selectScreencastComponents)

  return (
    <div>
      <TextField
        label={t('add-components-label')}
        elementSize={Size.large}
        iconName="Search"
        onTextChange={(event) => setComponentSearch(event.target.value)}
        onFocus={() => setIsComponentsOpen(true)}
        onBlur={() =>
          setTimeout(() => {
            setIsComponentsOpen(false)
          }, 200)
        }
      />
      <Dropdown isOpen={isComponentsOpen} styles={'w-full mt-1'}>
        {data?.flow_components
          .filter((component) => {
            if (componentSearch === '') {
              return component
            } else if (
              component.value
                .toLowerCase()
                .includes(componentSearch.toLowerCase())
            ) {
              return component
            }
          })
          .map((component, index) => (
            <DropdownItem
              key={index}
              title={component.value}
              onClick={
                () =>
                  dispatch(
                    addScreencastComponent({
                      flow_component_value:
                        component.value as InputMaybe<Flow_Components_Enum>,
                    })
                  )
                // setComponents((prev) => [...prev, component.value])
              }
            />
          ))}
      </Dropdown>
      <Tags
        values={
          screencastComponents
            ? screencastComponents.map(
                (component) => component.flow_component_value as string
              )
            : []
        }
        handleClose={(index) => dispatch(deleteScreencastComponent(index))}
      />
    </div>
  )
}
export default ScreencastComponentsInput
