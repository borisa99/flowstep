import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  addKeyword,
  removeKeyword,
  selectFlowKeywords,
} from '@/redux/slices/flow/flow.slice'

// import { FieldRules } from '@/hooks/use-form-fields/fieldRules'
import useForm from '@/hooks/use-form-fields/use-form-fields'
import { Sizes } from '@/components/types/sizes.types'
import { Size } from '@/components/types/textField.types'
import { Colors } from '@/components/types/colors.types'
import Tags from '@/components/elements/Tags/tags.component'
// import Tag, { TagStyle } from '@/components/elements/Tag/tag.component'
import TextField from '@/components/elements/TextField/textField.component'
import { UploadContinueContentProps } from '../uploadContinuePopupContent'
import Button, {
  ButtonStyle,
} from '@/components/elements/Button/button.component'

const UploadContinueGeneralInfo: FC<UploadContinueContentProps> = ({
  switchUploadContinueContent,
}) => {
  const { t } = useTranslation('upload')

  const dispatch = useAppDispatch()
  const keywords = useAppSelector(selectFlowKeywords)
  const {
    values: {
      // badge,
      keyword,
    },
    // errors,
    reset,
    handleChange,
    handleSubmit,
  } = useForm(
    {
      keyword: '',
      // badge: '',
    },
    {
      // badge: [FieldRules.required],
    },
    async () => {
      switchUploadContinueContent('UploadContinueAppInfo')
    }
  )

  const handleEnter = () => {
    if (keyword) {
      reset('keyword')
      // DISPATCH ADD MUTATION
      dispatch(addKeyword({ value: keyword }))
    }
  }
  const handleClose = (index: number) => {
    // DISPATCH DELETE ACTION
    dispatch(removeKeyword(index))
  }
  return (
    <>
      {/* <div className="mb-2">
        <TextField
          label="Add Badge"
          elementSize={Size.large}
          name="badge"
          value={badge}
          iconName="Search"
          onTextChange={handleChange}
          error={errors['badge']}
          handleReset={() => reset('badge')}
        />
        {badge && (
          <Tag
            label={badge}
            size={Sizes.base}
            style={TagStyle.light}
            color={Colors.grey}
          />
        )}
      </div> */}
      <div className="mb-6">
        <TextField
          label={t('add-keywords-label')}
          elementSize={Size.large}
          name="keyword"
          iconName="Search"
          onTextChange={handleChange}
          handleEnter={handleEnter}
          handleReset={() => reset('keyword')}
          value={keyword}
        />
        <Tags
          values={keywords?.map((item) => item.value) as string[]}
          handleClose={handleClose}
        />
      </div>
      <Button
        color={Colors.blue}
        label={t('continue-action')}
        type="button"
        size={Sizes.lg}
        style={ButtonStyle.solid}
        onClick={(e) => handleSubmit(e)}
        full
      />
    </>
  )
}

export default UploadContinueGeneralInfo
