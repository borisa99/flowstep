export enum FieldRules {
  required = 'required',
  email = 'email',
  password = 'password',
  hex = 'hex',
  doublePrecision = 'doublePrecision',
  integer = 'integer',
  date = 'date',
  screencastTime = 'screencastTime',
}

export const RegEX = {
  [FieldRules.email]: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g,
  [FieldRules.hex]: /^#([0-9a-f]{3}){1,2}$/i,
  [FieldRules.doublePrecision]: /[+-]?([0-9]*[.])?[0-9]+/,
  [FieldRules.integer]: /^(0|[1-9]\d*)$/,
}

export type ValidationRules<T> = {
  [key in keyof T]?: FieldRules[]
}
