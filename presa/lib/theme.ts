import { DefaultTheme } from 'styled-components'

export const primaryColor = '#0BC9BF'
export const secondaryColor = '#403BB7'
export const whiteTextColor = '#f8f8f8'
export const paperBackgroundColor = '#f8f8f8'

export const theme: DefaultTheme = {
  primaryColor,
  secondaryColor,
  whiteTextColor,
  paperBackgroundColor,
  // baseFont: ''
  monoFont:
    'Fira Code, ' +
    '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", ' +
    '"Source Code Pro", monospace',
  gutter: {
    xs: 10,
    s: 20,
    m: 40,
    l: 80,
    xl: 120,
    xxl: 180,
  },
} as DefaultTheme
