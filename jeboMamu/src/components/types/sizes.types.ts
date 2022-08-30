export enum Sizes {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  m = 'm',
  lg = 'lg',
  xl = 'xl',
}
export type Size = {
  [key in Sizes]?: string | number
}
