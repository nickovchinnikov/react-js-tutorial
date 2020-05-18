import React from 'react'
import { SlideProps, Slide, ControlledFragment } from '@saitonakamura/presa'
import { useAnimatedSteps } from '../../lib/useAnimatedSteps'
import { AnimatedPrimaryBlock, AnimatedSecondaryBlock } from './UiAppSlide'
// import { ArcherContainer, ArcherElement } from 'react-archer'

type Step = {
  state: Partial<{ top: string; left: string; opacity: number }>
  reducer: Partial<{ top: string; left: string; opacity: number }>
  action: Partial<{ top: string; left: string; opacity: number }>
  // cycleArrows: Partial<{ opacity: number }>
  store: Partial<{ top: string; left: string; opacity: number; height: string }>
  rootReducer: Partial<{
    top: string
    left: string
    opacity: number
    // width: string
  }>
  appReducers: Partial<{
    top: string
    left: string
    opacity: number
    width: string
  }>
  dispatch: Partial<{
    top: string
    left: string
    opacity: number
    width: string
  }>
  // dispatchAction: Partial<{ top: string; left: string; opacity: number }>
  // actionArrows: Partial<{ opacity: number }>
  ui: Partial<{ top: string; left: string; opacity: number; width: string }>
  // uiArrows: Partial<{ opacity: number }>
}

const emptyStep: Step = {
  state: {},
  reducer: {},
  action: {},
  store: {},
  // cycleArrows: {},
  rootReducer: {},
  appReducers: {},
  dispatch: {},
  // dispatchAction: {},
  // actionArrows: {},
  ui: {},
  // uiArrows: {},
}

const steps: Step[] = [
  {
    ...emptyStep,
    state: { top: '25%', left: '50%', opacity: 1 },
    reducer: { top: '60%', left: '30%', opacity: 0 },
    action: { top: '60%', left: '70%', opacity: 0 },
    // cycleArrows: { opacity: 0 },
    store: { top: '15%', left: '50%', height: '100px', opacity: 0 },
    rootReducer: { top: '64%', left: '50%', opacity: 0 },
    appReducers: { top: '64%', left: '50%', opacity: 0, width: '0px' },
    dispatch: { top: '47%', left: '50%', opacity: 0, width: '0px' },
    // dispatchAction: { opacity: 0 },
    // actionArrows: { opacity: 0 },
    ui: { top: '30%', left: '50%', opacity: 0, width: '0px' },
    // uiArrows: { opacity: 0 },
  },
  {
    ...emptyStep,
    action: { opacity: 1 },
  },
  {
    ...emptyStep,
    reducer: { opacity: 1 },
  },
  {
    ...emptyStep,
    state: { top: '30%', left: '50%' },
    action: { top: '47%', left: '50%' },
    reducer: { top: '64%', left: '50%' },
    store: { opacity: 1, height: '400px' },
  },
  {
    ...emptyStep,
    action: { left: '80%' },
    dispatch: { width: '300px', opacity: 1 },
  },
  {
    ...emptyStep,
    appReducers: { left: '80%', width: '300px', opacity: 1 },
    rootReducer: { left: '50%', top: '64%', opacity: 1 },
  },
  {
    ...emptyStep,
    ui: { left: '80%', width: '300px', opacity: 1 },
  },
]

const AnimatedPart = ({ step }: { step: number }) => {
  // TODO Fix Bug in ControlledComponent
  if (step === -Infinity) {
    step = 0
  }

  const getStyle = useAnimatedSteps(steps)
  const {
    state,
    reducer,
    action,
    store,
    // cycleArrows,
    // dispatchAction,
    rootReducer,
    appReducers,
    dispatch,
    // actionArrows,
    ui,
    // uiArrows,
  } = getStyle(step)

  return (
    <>
      <AnimatedSecondaryBlock style={store}>Store</AnimatedSecondaryBlock>
      <AnimatedPrimaryBlock style={state}>State</AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock style={action}>Action</AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock style={reducer}>Reducer</AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock style={dispatch}>Dispatch</AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock horizontalPadding='s' style={appReducers}>
        App Reducers
      </AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock horizontalPadding='s' style={rootReducer}>
        Root Reducer
      </AnimatedPrimaryBlock>
      <AnimatedPrimaryBlock style={ui}>UI</AnimatedPrimaryBlock>
    </>
  )
}

export const ReduxDiagramSlide = (props: SlideProps) => (
  <Slide {...props}>
    <ControlledFragment numberOfSteps={steps.length}>
      {(index) => <AnimatedPart step={index} />}
    </ControlledFragment>
  </Slide>
)
