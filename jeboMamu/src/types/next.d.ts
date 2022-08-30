/* eslint-disable @typescript-eslint/ban-types */
import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next'
import type { AppProps } from 'next/app'

import { LayoutName } from '@/layouts'

declare module 'next' {
  // Expand NextPage type definition to include getLayout method
  type NextPageComponentType<P = {}> = NextComponentType<
    NextPageContext,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    P
  >
  type NextPage<P = {}> = NextPageComponentType<P> & {
    getLayout?: (page: ReactNode) => ReactNode
    activeLayout?: LayoutName
  }
}

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
  }
}
