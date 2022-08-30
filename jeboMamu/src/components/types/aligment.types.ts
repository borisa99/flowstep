export enum Alignments {
  left = 'left',
  right = 'right',
  center = 'center',
}
export type Aligment = {
  [key in Alignments]?: string
}
