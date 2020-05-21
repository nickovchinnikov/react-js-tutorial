import 'styled-components'
import { Theme } from '@saitonakamura/presa'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    secondaryColor: string
    whiteTextColor: string
    paperBackgroundColor: string
    gutter: {
      xs: number
      s: number
      m: number
      l: number
      xl: number
      xxl: number
    }
  }
}
