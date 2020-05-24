import { DefaultTheme } from 'styled-components'
import CameraImgUrl from '../assets/image3.png'
import QuestionImgUrl from '../assets/questions.png'
import SlackImgUrl from '../assets/slack.png'
import TalkImgUrl from '../assets/talk.png'
import TimeImgUrl from '../assets/time.png'

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | number

export type Color = 'primary' | 'secondary' | 'white'

export type ExactSize = string | number

export const exactSizeToPx = (exactSize: ExactSize | undefined) => {
  switch (typeof exactSize) {
    case 'number':
      return `${exactSize}px`
    case 'undefined':
      return undefined
    default:
      return exactSize
  }
}

export const sizeToPx = (theme: DefaultTheme, size: Size) => {
  if (typeof size === 'number') return `${size}px`

  return `${theme.gutter[size]}px`
}

export type IconType = 'talk' | 'time' | 'slack' | 'questions' | 'camera'

export const iconToUrl = (icon: IconType) => {
  switch (icon) {
    case 'camera':
      return CameraImgUrl
    case 'questions':
      return QuestionImgUrl
    case 'slack':
      return SlackImgUrl
    case 'talk':
      return TalkImgUrl
    case 'time':
      return TimeImgUrl
  }
}

export const matchColor = (theme: DefaultTheme, color: Color) => {
  switch (color) {
    case 'primary':
      return theme.primaryColor
    case 'secondary':
      return theme.secondaryColor
    case 'white':
      return theme.whiteTextColor
  }
}
