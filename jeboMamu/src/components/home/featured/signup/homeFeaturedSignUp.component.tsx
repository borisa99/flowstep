import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import HomeFeaturedEmailForm from './emailForm/homeFeaturedEmailForm.component'

const HomeFeaturedSignUp: FC<{ signup: (email: string) => void }> = ({
  signup,
}) => {
  const { t } = useTranslation('home')

  return (
    <>
      <h1 className="text-6xl mb-2">99+ {t('product-flows-label')}</h1>
      <div className="text-base text-gray-700 text-left mb-6">
        {t('featured-no-user-description')}
      </div>
      <HomeFeaturedEmailForm submit={signup} />
    </>
  )
}

export default HomeFeaturedSignUp
