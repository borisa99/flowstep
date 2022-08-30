import { useTranslation } from 'next-i18next'

import { Colors } from '@/components/types/colors.types'
import { Sizes } from '@/components/types/sizes.types'
import Button, { ButtonStyle } from '../Button/button.component'

const FeedbackButton = () => {
  const { t } = useTranslation('common')

  const feedbackFormLink =
    'https://docs.google.com/forms/d/e/1FAIpQLScW-Pwibqp_Ei5hS5MJrjCpexXzEPZL6-Usx-MCAb5lZTZsXg/viewform?usp=sf_link'
  return (
    <Button
      color={Colors.grey}
      style={ButtonStyle.solid}
      label={t('feedback-label')}
      size={Sizes.base}
      iconName="Bullhorn"
      className="mr-3"
      onClick={() => {
        window.open(feedbackFormLink, '_blank')
      }}
    />
  )
}

export default FeedbackButton
