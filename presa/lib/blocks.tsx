import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  PlainLayout,
  DefaultLayout,
  CenteredLayout,
} from '@saitonakamura/presa/lib/components/slide/layouts'
import { Slide, SlideProps, Fragment } from '@saitonakamura/presa'
import CameraImgUrl from '../assets/image3.png'
import AvatarImgUrl from '../assets/avatar.jpg'
// import ReduxImgUrl from '../assets/time.png'
import {
  verticallyCentered,
  centered,
  headingTypography,
  horizontalWrapFlex,
  horizontalFlex,
  verticalFlex,
  dividerLeft,
  plainLayout,
  padding,
  text,
  quote,
  typography,
  blockSize,
  BlockSize,
} from './mixins'
import { sizeToPx, iconToUrl, matchColor } from './utils'
import type { Size, Color, IconType } from './utils'

const matchSize = (s: number, m: number, l: number) => (size: Size) => {
  if (typeof size === 'number') return `${size}px`

  switch (size) {
    case 's':
      return `${s}px`
    case 'm':
      return `${m}px`
    case 'l':
      return `${l}px`
  }
}

export const Text = styled.span<{
  size: Size
  italic?: boolean
  bold?: boolean
}>`
  ${(p) => text(p)}
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    // line-height: 1.2em;
  }

  * {
    box-sizing: inherit;
    // line-height: inherit;
  }

  ul, h1, h2, h3, h4, h5, h6, li, pre {
    margin: 0;
  }
`

export const GradientBlock = styled.div`
  background: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  color: ${(p) => p.theme.whiteTextColor};
`

export const Alert = styled(GradientBlock)`
  width: 100%;
  height: 250px;
  padding: 50px 50px;
  font-size: 56px;
  font-weight: bold;
  ${centered};
  ${headingTypography};
`

export const CenteredPlainLayout = styled(PlainLayout)`
  ${centered};
`

export const HorizontalWrapLayout = styled(DefaultLayout)<{ gapSize?: Size }>`
  ${horizontalWrapFlex};
  > * + * {
    margin-left: ${(p) => matchSize(20, 40, 80)(p.gapSize || 'm')};
  }
`
export const HorizontalWrapPlainLayout = styled(PlainLayout)<{
  gapSize?: Size
}>`
  ${horizontalWrapFlex};
  > * + * {
    margin-left: ${(p) => matchSize(20, 40, 80)(p.gapSize || 'm')};
  }
`
export const HorizontalPlainLayout = styled(PlainLayout)<{
  gapSize?: Size
}>`
  ${horizontalFlex};
  > * + * {
    margin-left: ${(p) => sizeToPx(p.theme, p.gapSize ?? 'm')};
  }
`

export const HorizontalLayout = styled(DefaultLayout)<{
  gapSize?: Size
}>`
  ${horizontalFlex};
  > * + * {
    margin-left: ${(p) => sizeToPx(p.theme, p.gapSize ?? 'm')};
  }
`

export const VerticalPlainLayout = styled.div<{ gapSize?: Size }>`
  ${plainLayout};
  ${verticalFlex};
`

export const HorizontalWrapSlide = (props: SlideProps) => (
  <Slide
    {...props}
    layout={(children) => <HorizontalWrapLayout children={children} />}
  />
)

export const AlertDescription = styled.span`
  margin-top: 20px;
  font-size: 25px;
  font-weight: normal;
`

export const AlertSlide = (props: SlideProps & { alert: React.ReactNode }) => (
  <Slide
    {...props}
    layout={(children) => <CenteredPlainLayout children={children} />}
  >
    <Alert>{props.alert}</Alert>
    {props.children}
  </Slide>
)

const TitleContainer = styled(GradientBlock)`
  ${verticallyCentered};
  width: 100%;
  padding: 10px 50px;
  height: 120px;
  min-height: 120px;
  ${headingTypography};
`

export const Title = styled.h1<{ size?: Size }>`
  font-size: ${(p) => sizeToPx(p.theme, p.size ?? 45)};
  font-weight: bold;
  ${headingTypography};
`

const TitleSlideContent = styled.div<{ padding?: Size }>`
  ${verticalFlex};
  ${(p) => padding(p.padding ?? 'm')};
`

type Layout = React.ComponentType<any>

export const TitleSlide = (
  props: OtusSlideProps & {
    title: React.ReactNode
    titleSize?: Size
  },
) => {
  const Layout = props.layout ?? TitleSlideContent

  return (
    <OtusSlide {...props} layout={VerticalPlainLayout}>
      <TitleContainer>
        <Title size={props.titleSize}>{props.title}</Title>
      </TitleContainer>
      <Layout>{props.children}</Layout>
    </OtusSlide>
  )
}

export const CameraImage = styled.img.attrs({
  src: CameraImgUrl,
})`
  width: 350px;
`

export const Paper = styled.div`
  background-color: ${(p) => p.theme.paperBackgroundColor};
  border-radius: 5px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  padding: 20px;
`

export const Avatar = styled.img.attrs({ src: AvatarImgUrl })`
  width: 100px;
  border-radius: 50%;
`

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  ${headingTypography};
  margin: 0;
`

export const CardDesc = styled.p`
  font-size: 18px;
  margin: 0;
`

export const CardContent = styled.div`
  ${verticalFlex};
  padding-left: 20px;
  height: 100%;
  justify-content: space-between;

  ${CardTitle} + ${CardDesc} {
    margin-top: 10px;
  }

  ${CardDesc} + ${CardDesc} {
    margin-top: 10px;
  }
`

export const Card = styled(Paper)`
  ${verticallyCentered};

  ${CardContent} {
    ${dividerLeft};
    margin-left: 20px;
  }
`

export const ListItem = styled.li<Typography>`
  ${(p) => typography(p)};
`

export const List = styled.ul<{ gapSize?: Size } & Typography>`
  ${verticalFlex};
  ${(p) => typography(p)};
  padding: 0;
  list-style-type: none;

  > * + * {
    margin-top: ${(p) => sizeToPx(p.theme, p.gapSize ?? 'm')};
  }
`

export const Icon = styled.img`
  width: 2em;
  height: 2em;
`

export const IconTextContainer = styled.div`
  font-size: 30px;
  ${verticallyCentered};

  ${Icon} {
    margin-right: 30px;
  }
`

export const IconText = (props: {
  icon: IconType
  children: React.ReactNode
}) => (
  <IconTextContainer>
    <Icon src={iconToUrl(props.icon)} />
    <span>{props.children}</span>
  </IconTextContainer>
)

export const NoticeBlock = styled.div<
  {
    horizontalPadding?: Size
    backgroundColor?: Color
    fullWidth?: boolean
  } & BlockSize
>`
  background-color: ${(p) =>
    matchColor(p.theme, p.backgroundColor ?? 'primary')};
  font-weight: bold;
  font-size: 35px;
  border-radius: 10px;
  color: ${(p) => p.theme.whiteTextColor};
  padding: 15px ${(p) => sizeToPx(p.theme, p.horizontalPadding ?? 'm')};
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  text-align: center;
  ${headingTypography};
  ${(p) => blockSize(p)}
`

export const FullWidthFragment = styled(Fragment)`
  width: 100%;
`

export const OuterLink = styled.a.attrs({
  rel: 'noopener noreferrer',
  target: '_blank',
})<Typography>`
  transition: all 0.2s ease;
  padding: 5px 8px;
  text-decoration: underline;
  border-radius: 5px;
  ${p => typography({ ...p, fontWeight: p.fontWeight ?? '500' )}

  &:visited {
    color: initial;
  }

  &:hover {
    color: white;
    background-color: ${(p) => p.theme.primaryColor};
  }
`

export type OtusSlideProps = Omit<SlideProps, 'layout'> & {
  layout?: Layout
  layoutStyle?: React.CSSProperties
} & Typography

const StyledSlide = styled(Slide)<Typography>`
  ${(p) => typography(p)}
`

export const OtusSlide = (props: OtusSlideProps) => {
  const Layout = props.layout ?? CenteredLayout

  return (
    <StyledSlide
      {...props}
      layout={(children) => (
        <Layout children={children} style={props.layoutStyle} />
      )}
    />
  )
}

export const Quote = styled.span<Typography>`
  ${(p) => typography(p)};
  ${quote};
  ${padding('m')}
`
