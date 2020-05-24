declare module '*.png' {
  const url: string
  export = url
}

declare module '*.jpg' {
  const url: string
  export = url
}

type Typography = Pick<
  React.CSSProperties,
  'fontSize' | 'fontWeight' | 'fontStyle' | 'lineHeight'
>
