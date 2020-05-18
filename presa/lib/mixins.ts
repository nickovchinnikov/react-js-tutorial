import { css } from 'styled-components'
import { Size, sizeToPx } from './utils'

export const plainLayout = css`
  width: 100%;
  height: 100%;
`

export const padding = (size: Size) => css`
  padding: ${(p) => sizeToPx(p.theme, size)};
`

export const margin = (size: Size) => css`
  margin: ${(p) => sizeToPx(p.theme, size)};
`

export const headingTypography = css`
  font-family: Nunito, ${(p) => p.theme.baseFont};
`

export const dividerRight = css`
  border-right: 1px solid ${(p) => p.theme.mutedTextColor};
`

export const dividerLeft = css`
  border-left: 1px solid ${(p) => p.theme.mutedTextColor};
`

export const centered = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

// export const absolutePosition

export const verticallyCentered = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

export const verticalFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  flex-wrap: no-wrap;
`

export const horizontalFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;
`

export const horizontalWrapFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const elevated = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const text = ({ size, italic }: { size: Size; italic?: boolean }) => css`
  font-size: ${(p) => sizeToPx(p.theme, size)};
  line-height: 1.2em;
  font-style: ${italic ? 'italic' : 'normal'};
`

export const quote = css`
  font-style: italic;
  border-left: 5px solid ${(p) => p.theme.darkGrayColor};
`
