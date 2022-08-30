import { useState } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { AnimatePresence } from 'framer-motion'
import { IFilter } from '@/components/types/filter.types'
import { appsMock } from '@/components/discover/mocks'
import TabsHeader from '@/components/elements/Tabs/tabsHeader/tabsHeader.component'
import Tab from '@/components/elements/Tabs/tab/tab.component'
import TabsContainer from '@/components/elements/Tabs/tabsContainer/tabsContainer.component'
import TabContent from '@/components/elements/Tabs/tabContent/tabContent.component'
import PageTitle from '@/components/elements/PageTitle/pageTitle.component'
import FilterToggle from '@/components/elements/Filters/filterToggle/filterToggle.component'
import FilterContainer from '@/components/elements/Filters/filterContainer/filterContainer.component'
import AppCardGrid from '@/components/elements/AppCardGrid/appCardGrid.component'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale || context.defaultLocale || 'en',
        ['common', 'discover']
      )),
    },
  }
}
const Discover: NextPage = () => {
  const { t } = useTranslation('discover')

  const [showFilters, setShowFilters] = useState<boolean>(false)

  const filters: IFilter[] = [
    {
      filterName: t('category-filter-name'),
      items: [
        { id: 1, selected: false, name: t('business-filter-item') },
        { id: 2, selected: false, name: t('education-filter-item') },
        { id: 3, selected: true, name: t('entertainment-filter-item') },
        { id: 4, selected: false, name: t('finance-filter-item') },
        { id: 5, selected: false, name: t('food-&-drink-filter-item') },
        { id: 6, selected: false, name: t('business-filter-item') },
        { id: 7, selected: false, name: t('education-filter-item') },
        { id: 8, selected: false, name: t('entertainment-filter-item') },
        { id: 9, selected: true, name: t('finance-filter-item') },
        { id: 10, selected: false, name: t('food-&-drink-filter-item') },
        { id: 11, selected: false, name: t('business-filter-item') },
        { id: 12, selected: false, name: t('education-filter-item') },
        { id: 13, selected: false, name: t('entertainment-filter-item') },
        { id: 14, selected: false, name: t('finance-filter-item') },
        { id: 15, selected: false, name: t('food-&-drink-filter-item') },
      ],
    },
    {
      filterName: t('content-type-filter-name'),
      items: [
        { id: 16, selected: false, name: t('app-filter-item') },
        { id: 17, selected: false, name: t('collection-filter-item') },
        { id: 18, selected: false, name: t('original-uploads-filter-item') },
      ],
    },
    {
      filterName: t('badges-filter-name'),
      items: [
        { id: 19, selected: false, name: t('trending-filter-item') },
        { id: 20, selected: false, name: t('10K-likes-filter-item') },
        { id: 21, selected: false, name: t('recently-updated-filter-item') },
      ],
    },
    {
      filterName: t('upload-date-filter-name'),
      items: [
        { id: 22, selected: false, name: t('today-filter-item') },
        { id: 23, selected: true, name: t('this-week-filter-item') },
        { id: 24, selected: false, name: t('this-month-filter-item') },
        { id: 25, selected: false, name: t('this-year-filter-item') },
      ],
    },
  ]
  const filtersCount = filters.reduce((prev, item) => {
    return item.items.filter((e) => e.selected).length > 0 ? prev + 1 : prev
  }, 0)

  return (
    <>
      <Head>
        <title>Flowstep - {t('discover-title')}</title>
      </Head>

      <PageTitle
        title={t('discover-title')}
        description={t('discover-description')}
      />

      <TabsContainer defaultTabKey="popular">
        <TabsHeader
          actionComponent={
            <FilterToggle
              count={filtersCount}
              toggleVisible={() => setShowFilters((prev) => !prev)}
            />
          }
        >
          <Tab tabKey="popular" label={t('popular-tab-title')} />
          <Tab tabKey="most-saved" label={t('most-saved-tab-title')} />
          <Tab tabKey="most-liked" label={t('most-liked-tab-title')} />
        </TabsHeader>

        <div className="my-4">
          <AnimatePresence exitBeforeEnter>
            {showFilters && <FilterContainer filters={filters} />}
          </AnimatePresence>
        </div>

        <TabContent tabKey="popular">
          <AppCardGrid items={appsMock} />
        </TabContent>
        <TabContent tabKey="most-saved">Most saved</TabContent>
        <TabContent tabKey="most-liked">Most liked</TabContent>
      </TabsContainer>
    </>
  )
}

export default Discover
