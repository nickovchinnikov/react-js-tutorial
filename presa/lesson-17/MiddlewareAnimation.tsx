import React from 'react'
import { animated } from 'react-spring'
import {
  AnimatedSlide,
  AnimatedPrimaryBlock,
  AnimatedSecondaryBlock,
} from '../lib/useAnimatedSteps'

export const MiddlewareAnimationSlide = (
  <AnimatedSlide<{
    request: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    handler: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    middleware: {
      top: string
      left: string
      transform: string
      opacity: number
      width: string
      height: string
    }
    logging: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    auth: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    ratelimit: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    loggingCheck: { top: string; left: string; transform: string }
    authCheck: { top: string; left: string; transform: string }
    ratelimitCheck: { top: string; left: string; transform: string }
    handlerCheck: { top: string; left: string; transform: string }
    request2: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    action: {
      top: string
      left: string
      transform: string
      opacity: number
    }
    reducer: {
      top: string
      left: string
      transform: string
      opacity: number
    }
  }>
    key='mw2'
    name='Middlewares #2'
    steps={[
      {
        request: {
          top: '50%',
          left: '19%',
          transform: 'translateY(-50%) scale(0)',
          opacity: 1,
        },
        handler: {
          top: '50%',
          left: '53%',
          transform: 'translateY(-50%) scale(0)',
          opacity: 1,
        },
        middleware: {
          top: '50%',
          left: '36%',
          transform: 'translateY(-50%) scale(1, 0)',
          opacity: 1,
          height: '78px',
          width: '300px',
        },
        logging: {
          top: '39%',
          left: '50%',
          transform: 'translateX(-50%) scale(1, 0)',
          opacity: 1,
        },
        auth: {
          top: '39%',
          left: '50%',
          transform: 'translateX(-50%) scale(1, 0)',
          opacity: 1,
        },
        ratelimit: {
          top: '39%',
          left: '50%',
          transform: 'translateX(-50%) scale(1, 0)',
          opacity: 1,
        },
        loggingCheck: {
          top: '18%',
          left: '65%',
          transform: 'scale(0)',
        },
        authCheck: {
          top: '37%',
          left: '65%',
          transform: 'scale(0)',
        },
        ratelimitCheck: {
          top: '56%',
          left: '65%',
          transform: 'scale(0)',
        },
        handlerCheck: {
          top: '80%',
          left: '65%',
          transform: 'scale(0)',
        },
        request2: {
          top: '38%',
          left: '5%',
          transform: 'scale(0)',
          opacity: 1,
        },
        action: {
          top: '43.5%',
          left: '5%',
          transform: '',
          opacity: 0,
        },
        reducer: {
          top: '43.5%',
          left: '67%',
          transform: '',
          opacity: 0,
        },
      },
      {
        request: {
          transform: 'translateY(-50%) scale(1)',
        },
      },
      {
        handler: {
          transform: 'translateY(-50%) scale(1)',
        },
      },
      {
        request: { left: '5%' },
        handler: { left: '67%' },
        middleware: { transform: 'translateY(-50%) scale(1, 1)' },
      },
      {
        request: { opacity: 0 },
        handler: { opacity: 0 },
        middleware: {
          height: '500px',
        },
        logging: { top: '30%', transform: 'translateX(-50%) scale(1, 1)' },
        auth: { top: '49%', transform: 'translateX(-50%) scale(1, 1)' },
        ratelimit: { top: '68%', transform: 'translateX(-50%) scale(1, 1)' },
      },
      {
        request: { opacity: 1, top: '15%' },
        middleware: { left: '55%' },
        logging: { left: '69%' },
        auth: { left: '69%' },
        ratelimit: { left: '69%' },
      },
      {
        request: { top: '37%' },
      },
      {
        request: { top: '56%' },
      },
      {
        request: { top: '74%' },
      },
      {
        request: { top: '81%', transform: 'translateY(0%) scale(1)' },
        handler: { top: '87%', left: '55%', opacity: 1 },
        middleware: { top: '40%', height: '440px' },
        logging: { top: '19%' },
        auth: { top: '38%' },
        ratelimit: { top: '57%' },
      },
      {
        request: { transform: 'translateY(0%) scale(0)' },
      },
      {
        request: { top: '4%' },
      },
      {
        request: { transform: 'translateY(0%) scale(1)' },
      },
      {
        request: { top: '19%' },
      },
      {
        loggingCheck: { transform: 'scale(1)' },
      },
      {
        request: { top: '38%' },
      },
      { authCheck: { transform: 'scale(1)' } },
      { ratelimitCheck: { transform: 'scale(1)' } },
      { handlerCheck: { transform: 'scale(1)' } },
      {
        request: { left: '-100%', transform: 'translateY(0%) scale(0)' },
      },
      {
        request: {
          left: '5%',
          top: '4%',
          transform: 'translateY(0%) scale(1)',
        },
        authCheck: { left: '150%', transform: 'scale(0)' },
        loggingCheck: { left: '150%', transform: 'scale(0)' },
        ratelimitCheck: { left: '150%', transform: 'scale(0)' },
        handlerCheck: { left: '150%', transform: 'scale(0)' },
      },
      {
        request: { top: '19%' },
        authCheck: { left: '65%' },
        loggingCheck: { left: '65%' },
        ratelimitCheck: { left: '65%' },
        handlerCheck: { left: '65%' },
      },
      {
        request: { top: '38%' },
      },
      {
        request2: { top: '4%', transform: 'scale(1)' },
      },
      { request: { top: '57%' } },
      { request: { top: '80%' } },
      { request: { transform: 'translateY(0%) scale(0)' } },
      {
        request2: { top: '19%' },
      },
      {
        request2: { top: '38%' },
      },
      {
        request2: { top: '57%' },
      },
      {
        request2: { top: '80%' },
      },
      {
        request2: { transform: 'scale(0)' },
        request: { top: '4%' },
      },
      { request: { transform: 'translateY(0%) scale(1)' } },
      {
        auth: { transform: 'translateX(-50%) scale(0, 0)' },
        logging: { transform: 'translateX(-50%) scale(0, 0)' },
        ratelimit: { transform: 'translateX(-50%) scale(0, 0)' },
      },
      {
        request: { top: '43.5%' },
        middleware: { height: '78px', top: '50%', left: '36%' },
        handler: { left: '67%', top: '50%' },
      },
      { action: { opacity: 1 } },
      { reducer: { opacity: 1 } },
    ]}
  >
    {(styles) => (
      <>
        <AnimatedPrimaryBlock style={styles.request}>
          Request
        </AnimatedPrimaryBlock>
        <AnimatedPrimaryBlock style={styles.handler}>
          Handler
        </AnimatedPrimaryBlock>
        <AnimatedSecondaryBlock style={styles.middleware}>
          Middleware
        </AnimatedSecondaryBlock>
        <AnimatedPrimaryBlock elevated width={450} style={styles.logging}>
          Logging middleware
        </AnimatedPrimaryBlock>
        <AnimatedPrimaryBlock elevated width={450} style={styles.auth}>
          Auth middleware
        </AnimatedPrimaryBlock>
        <AnimatedPrimaryBlock elevated width={450} style={styles.ratelimit}>
          Rate limit middleware
        </AnimatedPrimaryBlock>
        <animated.span
          style={{
            ...styles.loggingCheck,
            position: 'absolute',
            fontSize: '60px',
          }}
        >
          ✅
        </animated.span>
        <animated.span
          style={{
            ...styles.authCheck,
            position: 'absolute',
            fontSize: '60px',
          }}
        >
          ❌
        </animated.span>
        <animated.span
          style={{
            ...styles.ratelimitCheck,
            position: 'absolute',
            fontSize: '60px',
          }}
        >
          💤
        </animated.span>
        <animated.span
          style={{
            ...styles.handlerCheck,
            position: 'absolute',
            fontSize: '60px',
          }}
        >
          💤
        </animated.span>
        <AnimatedPrimaryBlock style={styles.request2}>
          Request #2
        </AnimatedPrimaryBlock>
        <AnimatedPrimaryBlock style={styles.action}>
          Action
        </AnimatedPrimaryBlock>
        <AnimatedPrimaryBlock style={styles.reducer}>
          Reducer
        </AnimatedPrimaryBlock>
      </>
    )}
  </AnimatedSlide>
)
