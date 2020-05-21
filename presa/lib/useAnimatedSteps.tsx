import { useSpring, AnimatedValue, ForwardedProps } from 'react-spring'
import React, { useCallback, useMemo, CSSProperties } from 'react'
import { SlideProps, Slide, ControlledFragment } from '@saitonakamura/presa'
import { PlainLayout } from '@saitonakamura/presa/lib/components/slide/layouts'
import { OtusSlide, OtusSlideProps } from './blocks'

const processSteps = <T extends Record<string, {}>>(steps: T[]) => {
  const states = new Map<keyof T, Record<string, {}>>()
  return steps.map((step) => {
    const newStep = {} as T

    Object.keys(step).forEach((key: keyof T) => {
      if (states.has(key)) {
        const state = states.get(key)
        const newState = { ...state, ...step[key] }
        states.set(key, newState)
        newStep[key] = newState
      } else {
        const newState = step[key]
        states.set(key, newState)
        newStep[key] = newState
      }
    })

    return newStep
  })
}

type OverwriteKeys<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] }

type AnimatedStyle<DS extends object> = AnimatedValue<
  ForwardedProps<OverwriteKeys<DS, React.CSSProperties>>
>

type AnimatedStyles<T> = Record<keyof T, AnimatedStyle<{}>>

export const useAnimatedSteps = <T extends Record<string, {}>>(
  steps: T[],
): ((step: number) => AnimatedStyles<T>) => {
  const processedSteps = useMemo(() => processSteps(steps), [steps])

  return (step: number) => {
    const springs = {} as AnimatedStyles<T>

    Object.keys(processedSteps[step]).forEach((key: keyof T) => {
      /* eslint-disable react-hooks/rules-of-hooks */
      // @ts-ignore
      springs[key] = useSpring({
        from: processedSteps[step > 0 ? step - 1 : 0][key],
        to: processedSteps[step][key],
      })
      /* eslint-enable react-hooks/rules-of-hooks */
    })

    return springs
  }
}

type PartialL2<T> = {
  [P in keyof T]: Partial<T[P]>
}

function AnimatedPart<T extends Record<string, {}>>({
  step,
  steps,
  children,
}: {
  step: number
  steps: Array<PartialL2<T>>
  children: (steps: AnimatedStyles<T>, step: number) => React.ReactNode
}) {
  // TODO Fix Bug in ControlledComponent
  if (step === -Infinity) {
    step = 0
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getStyle = useAnimatedSteps(steps)
  const styles = getStyle(step)

  return children(styles, step)
}

export function AnimatedSlide<T extends Record<string, {}>>({
  children,
  steps,
  ...rest
}: OtusSlideProps & {
  steps: Array<PartialL2<T>>
  children: (steps: AnimatedStyles<T>, step: number) => React.ReactNode
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memedSteps = useMemo(() => steps, [])

  return (
    <OtusSlide layout={PlainLayout} {...rest}>
      <ControlledFragment numberOfSteps={steps.length}>
        {(index) => (
          <AnimatedPart step={index} steps={memedSteps} children={children} />
        )}
      </ControlledFragment>
    </OtusSlide>
  )
}
