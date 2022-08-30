import { FC, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import useClickOutside from '@/hooks/use-click-outside/use-click-outside'
import { RoleValue } from '@/types/RoleValue'
import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'
import Dropdown from '@/components/elements/Dropdown/dropdown.component'
import DropdownItem from '@/components/elements/Dropdown/item/dropdownItem.component'
import Spinner from '@/components/elements/Spinner/spinner.component'
import Icon from '@/components/elements/Icon/icon.component'

import { useDeleteFlowMutation } from '@/graphql/generated'

type Props = {
  id: string
}
const UploadDeleteDropdown: FC<Props> = ({ id }) => {
  const router = useRouter()
  const [success, setSuccess] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const moreButtonRef = useRef<HTMLDivElement>(null)
  const [deleteFLow, { loading }] = useDeleteFlowMutation({
    context: { headers: { 'x-hasura-role': RoleValue.PREMIUM } },
  })

  const { t } = useTranslation('upload')

  useClickOutside(moreButtonRef, () => setIsMoreOpen(false))

  return (
    <div className="relative" ref={moreButtonRef}>
      <Button
        label="..."
        color={Colors.grey}
        size={Sizes.base}
        style={ButtonStyle.solid}
        onClick={() => setIsMoreOpen(!isMoreOpen)}
      />
      <Dropdown isOpen={isMoreOpen} styles={'w-[240px]'}>
        {loading || success ? (
          <div className="h-12 flex justify-center items-center">
            {loading ? (
              <Spinner size={Sizes.base} />
            ) : (
              <div className="flex justify-center items-center bg-primary w-6 h-6 rounded-full">
                <Icon
                  icon="Check"
                  className="text-current text-2xl !text-white"
                />
              </div>
            )}
          </div>
        ) : (
          <DropdownItem
            title={t('delete-collection-action')}
            icon="Trash-alt"
            onClick={async () => {
              await deleteFLow({ variables: { id } })
              setSuccess(true)
              setTimeout(() => {
                setSuccess(false)
                router.push('/')
              }, 1000)
            }}
            small
          />
        )}
      </Dropdown>
    </div>
  )
}

export default UploadDeleteDropdown
