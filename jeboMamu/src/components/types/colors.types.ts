export enum Colors {
  red = 'red',
  blue = 'blue',
  lightBlue = 'lightBlue',
  green = 'green',
  orange = 'orange',
  brown = 'brown',
  grey = 'grey',
  white = 'white',
  transparent = 'transparent',
}
export type Color = {
  [key in Colors]?: string
}
