import React from 'react'
import { SlideProps, Slide, ControlledFragment } from '@saitonakamura/presa'
import { NoticeBlock, elevated } from '../../lib/blocks'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { Code, CodeProps } from '@saitonakamura/presa/lib/blocks'
import { useAnimatedSteps } from '../../lib/useAnimatedSteps'

export const AbsoluteNoticeBlock = styled(NoticeBlock)`
  position: absolute;
  transform: translateX(-50%);
`

export const SecondaryBlock = styled(AbsoluteNoticeBlock).attrs({
  backgroundColor: 'secondary',
})`
  width: 200px;
`

export const PrimaryBlock = styled(AbsoluteNoticeBlock).attrs({
  backgroundColor: 'primary',
})`
  width: 300px;
  ${elevated};
`

// eslint-disable-next-line react/display-name
export const CodeBlock = React.forwardRef<HTMLDivElement>(
  ({ language, children, ...rest }: CodeProps, ref) => (
    <div ref={ref} {...rest}>
      <Code language={language}>{children}</Code>
    </div>
  ),
)

export const AbsoluteCode = styled(CodeBlock)`
  position: absolute;
`

export const AnimatedSecondaryBlock = animated(SecondaryBlock)
export const AnimatedPrimaryBlock = animated(PrimaryBlock)
export const AnimatedCode = animated(AbsoluteCode)

type Step = {
  ui: Partial<{ top: string; left: string; height: string; opacity: number }>
  markup: Partial<{ top: string; left: string; opacity: number }>
  state: Partial<{ top: string; left: string; opacity: number }>
  code: Partial<{ top: string; right: string; opacity: number }>
}

const steps: Step[] = [
  {
    ui: { top: '50%', left: '50%', height: '80px', opacity: 1 },
    markup: {
      top: '34%',
      left: '50%',
      opacity: 0,
    },
    state: {
      top: '52%',
      left: '50%',
      opacity: 0,
    },
    code: { opacity: 0, top: '17%', right: '10%' },
  },
  {
    ui: { top: '20%', left: '50%', height: '200px' },
    markup: { opacity: 1 },
    state: {},
    code: {},
  },
  {
    ui: { height: '310px' },
    markup: {},
    state: { opacity: 1 },
    code: {},
  },
  {
    ui: { left: '20%' },
    markup: { left: '20%' },
    state: { left: '20%' },
    code: { opacity: 1 },
  },
  // {
  //   ui: { opacity: 0 },
  //   markup: {},
  //   state: {},
  //   code: {},
  // },
]

const codeStr = `const App = () => {
  const [count, setCount] = useState(0)

  return (<div>
    <button
      onClick={() => setCount(count + 1)}
    >
      Click Me
    </button>
    {count}
  </div>)
}`

const AnimatedPart = ({ step }: { step: number }) => {
  // debugger
  // TODO Fix Bug in ControlledComponent
  if (step === -Infinity) {
    step = 0
  }

  const getStyle = useAnimatedSteps(steps)
  const { ui, markup, state, code } = getStyle(step)

  return (
    <>
      <AnimatedSecondaryBlock horizontalPadding='l' style={ui}>
        UI
      </AnimatedSecondaryBlock>
      <AnimatedPrimaryBlock horizontalPadding='l' style={markup}>
        Markup
      </AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock horizontalPadding='l' style={state}>
        State
      </AnimatedPrimaryBlock>
      <AnimatedCode language='javascript' style={code}>
        {codeStr}
      </AnimatedCode>
    </>
  )
}

export const UiAppSlide = (props: SlideProps) => {
  return (
    <Slide layout='centered' {...props}>
      <ControlledFragment numberOfSteps={steps.length}>
        {(index) => <AnimatedPart step={index} />}
      </ControlledFragment>
    </Slide>
  )
}
