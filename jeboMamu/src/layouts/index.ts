import Base from './base/baseLayout.component'
import Blank from './base/blankLayout.component'
import Auth from './auth/authLayout.component'

export const Layouts = {
  Base,
  Blank,
  Auth,
}

export type LayoutName = keyof typeof Layouts
