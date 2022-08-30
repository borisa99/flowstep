import { Size } from '@/components/types/textField.types'
import TextField from '@/components/elements/TextField/textField.component'

const HeaderSearch = () => {
  return (
    <div className="flex items-center">
      <div className="w-full">
        <TextField
          elementSize={Size.small}
          iconName="Search"
          label="Search"
          onTextChange={() => null}
          handleReset={() => null}
        />
      </div>
    </div>
  )
}
export default HeaderSearch
