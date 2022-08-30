import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client'
import { TokenRefreshLink } from 'apollo-link-token-refresh'

import { onError } from '@apollo/client/link/error'
import { getCookie, removeCookies, setCookies } from 'cookies-next'
import {
  MeQuery,
  MeQueryVariables,
  MeDocument,
  UserResponse,
} from './graphql/generated'
import { setLoading, setUser } from './redux/slices/auth.slice'
import { store } from './redux/store'
import { refreshTokenExpiration, tokenExpiration } from './utils/expirations'

export const getCurrentUser = async () => {
  try {
    const token = getCookie('token')
    const refresh_token = getCookie('refresh_token')

    if (!token && !refresh_token) {
      throw new Error("Can't get token from cookies")
    }

    const { data } = await client.query<MeQuery, MeQueryVariables>({
      query: MeDocument,
      fetchPolicy: 'no-cache',
    })

    if (data.me) {
      store.dispatch(setUser(data?.me as UserResponse))

      return <UserResponse>data?.me
    } else {
    }
  } catch {
    throw new Error("Can't get current user")
  } finally {
    store.dispatch(setLoading(false))
  }
}
export const clearCookies = () => {
  removeCookies('token')
  removeCookies('refresh_token')
}
export const setTokenCookies = (token: string, refresh_token: string) => {
  setCookies('token', token, {
    maxAge: tokenExpiration,
  })
  setCookies('refresh_token', refresh_token, {
    maxAge: refreshTokenExpiration,
  })
}

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT })
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'invalid-jwt':
          clearCookies()
          operation.setContext({
            headers: {},
          })
          return forward(operation)
      }
    }
  }
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = <string>getCookie('token')

  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${token}` || null,
      },
    }))
  }
  return forward(operation)
})

const refreshLink = new TokenRefreshLink<{
  token: string
  refresh_token: string
}>({
  accessTokenField: 'tokens',
  isTokenValidOrUndefined: () => {
    const token = <string>getCookie('token')
    const refresh_token = getCookie('refresh_token')

    if (!token && refresh_token) {
      return false
    } else {
      return true
    }
  },
  fetchAccessToken: () => {
    const response = fetch(
      process.env.NEXT_PUBLIC_REST_ENDPOINT + '/auth/refresh',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: <string>getCookie('refresh_token'),
        }),
      }
    )
    return response
  },
  handleFetch: (tokens) => {
    const { token, refresh_token } = tokens
    setTokenCookies(token, refresh_token)
  },
  handleError: () => {
    console.warn('Your refresh token is invalid. Try to relogin')
  },
})

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const omitTypename = (key: string, value: any) =>
      key === '__typename' ? undefined : value
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      omitTypename
    )
  }
  return forward(operation).map((data) => {
    return data
  })
})
export const client = new ApolloClient({
  link: ApolloLink.from([
    cleanTypeName,
    refreshLink,
    authMiddleware,
    errorLink,
    httpLink,
  ]),
  cache: new InMemoryCache({}),
})
