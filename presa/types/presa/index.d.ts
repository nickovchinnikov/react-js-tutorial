type Stylable = { className?: string; style?: React.CSSProperties }

declare module '@saitonakamura/presa' {
  interface SlideTheme {
    baseFontSize: number
    fontScale: number
    background: string
    layoutPadding: string
  }

  interface Theme {
    /**
     * Settings related to slide content appearance
     * Can be overwritten
     */
    slide: SlideTheme

    /** Using web-safe font defaults: base serif font and monospace */
    baseFont: string

    monoFont: string

    /** Color palette
     * Slideshow background
     */
    backgroundColor: string

    fullscreenBackgroundColor: string

    /** Used as an accent color in
     * active elements
     */
    primaryColor: string

    /** Default text color */
    textColor: string

    /** Icon background */
    darkGrayColor: string

    /** default: Stardust gray */
    mutedTextColor: string

    placeholderColor: string
  }

  export const Presentation: React.ComponentType<
    {
      name?: string
      aspectRatio?: number
      baseWidth?: number
      theme?: Partial<Theme>
      tableOfContents?: boolean
      useFullscreenAPI?: boolean
    } & Stylable
  >

  export type SlideProps = {
    background?: string
    name?: string
    layout?:
      | 'plain'
      | 'centered'
      | ((children: React.ReactNode) => React.ReactElement<any, any>)
    children?: React.ReactNode
  } & Stylable

  export const Slide: React.ComponentType<SlideProps>

  interface FragmentProps {
    index?: number
  }

  export const Fragment: React.ComponentType<FragmentProps & Stylable>

  interface ControlledFragmentProps {
    numberOfSteps: number
    children: (index: number) => React.ReactNode
  }

  export const ControlledFragment: React.ComponentType<
    ControlledFragmentProps & Stylable
  >
}

declare module '@saitonakamura/presa/lib/components/slide/layouts' {
  export const CenteredLayout: React.ComponentType<{} & Stylable>
  export const DefaultLayout: React.ComponentType<{} & Stylable>
  export const PlainLayout: React.ComponentType<{} & Stylable>
}

declare module '@saitonakamura/presa/lib/blocks' {
  type Language = 'javascript' | 'typescript' | 'reason'

  interface CodeProps {
    fontSize?: number
    language?: Language
    children?: React.ReactNode
  }

  export const Code: React.ComponentType<CodeProps>
}
