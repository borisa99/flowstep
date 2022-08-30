import { NextRouter } from 'next/router'
import { useCallback } from 'react'

const useClientQueryParams = (router: NextRouter) => {
  const setParam = useCallback(
    (key: string, value: string) => {
      if (router.query[key] !== value) {
        const searchQuery = { ...router.query }

        // Removing parameters that are part of route (not from query string)
        for (const param of Object.keys(searchQuery)) {
          if (new RegExp(`\\[${param}\\]`, 'i').test(router.route))
            delete searchQuery[param]
        }

        router.push(
          {
            pathname: router.asPath.split('?')[0],
            query: { ...searchQuery, [key]: encodeURI(value) },
          },
          undefined,
          { shallow: true }
        )
      }
    },
    [router]
  )

  return { setParam }
}

export default useClientQueryParams
