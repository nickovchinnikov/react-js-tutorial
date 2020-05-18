import { DefaultTheme } from 'styled-components'
import CameraImgUrl from '../assets/image3.png'
import QuestionImgUrl from '../assets/questions.png'
import SlackImgUrl from '../assets/slack.png'
import TalkImgUrl from '../assets/talk.png'
import TimeImgUrl from '../assets/time.png'

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | number

export type Color = 'primary' | 'secondary' | 'white'

export const sizeToPx = (theme: DefaultTheme, size: Size) => {
  if (typeof size === 'number') return `${size}px`

  switch (size) {
    case 'xs':
      return theme.gutter.xs + 'px'
    case 's':
      return theme.gutter.s + 'px'
    case 'm':
      return theme.gutter.m + 'px'
    case 'l':
      return theme.gutter.l + 'px'
    case 'xl':
      return theme.gutter.xl + 'px'
    case 'xxl':
      return theme.gutter.xxl + 'px'
  }
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
