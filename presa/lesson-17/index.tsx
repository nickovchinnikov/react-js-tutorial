import React from 'react'
import { Presentation, Fragment } from '@saitonakamura/presa'
import {
  GlobalStyle,
  OtusSlide,
  CenteredPlainLayout,
  TitleSlide,
  List,
  FullWidthFragment,
  ListItem,
  NoticeBlock,
  AlertSlide,
  OuterLink,
  Text,
} from '../lib/blocks'
import ReactDOM from 'react-dom'
import {
  CheckRecordSlide,
  CheckSoundVideoSlide,
  RulesSlide,
  QuestionsSlide,
  MainTitleSlide,
  QuoteSlide,
  CodeSlide,
} from '../lib/slides'
import { theme } from '../lib/theme'
import { Code } from '@saitonakamura/presa/lib/blocks'
import PugThinkImg from '../assets/pugthink.png'
import CodesandboxImg from '../assets/codesandbox.png'
import { MiddlewareAnimationSlide } from './MiddlewareAnimation'
import { CenteredLayout } from '@saitonakamura/presa/lib/components/slide/layouts'

const problemSlides = [
  <OtusSlide
    key='asyncredux1'
    name='Асинхронный запрос в Redux #1'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredRepos = (username: string) => {
  return fetch(\`https://api.github.com/users/\${username}/starred\`)
}

    `}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux2'
    name='Асинхронный запрос в Redux #2'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredRepos = (username: string) => {
  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => saveData(data))
}
`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux3'
    name='Асинхронный запрос в Redux #3'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredRepos = (username: string) => {
  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => saveData(data))
    .catch(error => showError(error))
}`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux4'
    name='Асинхронный запрос в Redux #4'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredRepos = (username: string) => {
  saveIsLoading()

  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => saveData(data))
    .catch(error => showError(error))
}`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux5'
    name='Асинхронный запрос в Redux #5'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredRepos = (username: string) => {
  dispatch({ type: 'LOADING' })

  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => dispatch({ type: 'SUCCESS', data }))
    .catch(error => dispatch({ type: 'ERROR', error }))
}`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux6'
    name='Асинхронный запрос в Redux #6'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={18}
      language='javascript'
    >{`const reducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'SUCCESS':
      return { ...state,
        isLoading: false,
        data: action.data,
        error: null
      }
    case 'ERROR':
      return { ...state,
        isLoading: false,
        data: null,
        error: action.error
      }
    default:
      return state
  }
}`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux7'
    name='Асинхронный запрос в Redux #7'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredReposForCurrentUser = () => {
  const username = getCurrentUser(state).username

  dispatch({ type: 'LOADING' })

  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => dispatch({ type: 'SUCCESS', data }))
    .catch(error => dispatch({ type: 'ERROR', error }))
}`}</Code>
  </OtusSlide>,
  QuestionsSlide,
  <OtusSlide key='asyncreduxassignment' name='Практика redux async flow'>
    <OuterLink href='https://codesandbox.io/s/otus-redux-thunk-assignment-es91n?file=/src/App.tsx'>
      <Text size={45} bold>
        Практика 💻
      </Text>
    </OuterLink>
    <img src={CodesandboxImg} style={{ width: '800px', marginTop: '50px' }} />
  </OtusSlide>,
]

const thunkSlides = [
  <AlertSlide key='thunktitle' name='Redux thunk' alert='Redux thunk' />,
  <QuoteSlide
    key='thunkdef'
    name='Что такое Thunk?'
    quote='Thunk - это отложенное вычисление'
    fontSize='50px'
  />,
  <OtusSlide key='thunk1' name='Redux thunk #1'>
    <Code fontSize={50}>{`const think = 42 + 666`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk2' name='Redux thunk #2'>
    <Code fontSize={50}>{`const thunk = () => 42 + 666`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk3' name='Redux thunk #3'>
    <Code
      fontSize={50}
    >{`const thunk = () => 42 + 666\nconst think = thunk()`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk4' name='Redux thunk #4'>
    <Code
      fontSize={30}
    >{`const think = dispatch({ type: 'ADD', value: 666 })`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk5' name='Redux thunk #5'>
    <Code fontSize={30}>{`const thunk = () => {
  dispatch({ type: 'ADD', value: 666 })
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk6' name='Redux thunk #6'>
    <Code fontSize={30}>{`const thunk = (dispatch) => {
  dispatch({ type: 'ADD', value: 666 })
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk7' name='Redux thunk #7'>
    <Code fontSize={30}>{`const thunk = (dispatch, getState) => {
  dispatch({ type: 'ADD', value: 666 })
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='pugthink' name='Pug think'>
    <img src={PugThinkImg} style={{ width: '400px' }} />
  </OtusSlide>,
  <OtusSlide key='thunk8' name='Redux thunk #8'>
    <Code fontSize={25}>{`const dispatch = (action) => {
  const newState = rootReducer(store.getState(), action)
  store.setState(newState)
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk9' name='Redux thunk #9'>
    <Code fontSize={25}>{`const dispatch = (action) => {
  if (typeof action === 'function') {
    action(dispatch, store.getState)
  }

  const newState = rootReducer(store.getState(), action)
  store.setState(newState)
}`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='asyncredux7'
    name='Асинхронный запрос в Redux #7'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={25}
      language='typescript'
    >{`const getStarredReposForCurrentUser = () => {
  const username = getCurrentUser(state).username

  dispatch({ type: 'LOADING' })

  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => dispatch({ type: 'SUCCESS', data }))
    .catch(error => dispatch({ type: 'ERROR', error }))
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk11' name='Redux thunk #11' layout={CenteredPlainLayout}>
    <Code
      fontSize={23}
      language='typescript'
    >{`const getStarredReposForCurrentUser = (dispatch, getState) => {
  const username = getCurrentUser(getState()).username

  dispatch({ type: 'LOADING' })

  return fetch(\`https://api.github.com/users/\${username}/starred\`)
    .then(data => dispatch({ type: 'SUCCESS', data }))
    .catch(error => dispatch({ type: 'ERROR', error }))
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk12' name='Redux thunk #12' layout={CenteredPlainLayout}>
    <Code
      fontSize={23}
      language='typescript'
    >{`const getStarredReposForCurrentUser = () =>
  (dispatch, getState) => {
    const username = getCurrentUser(getState()).username

    dispatch({ type: 'LOADING' })

    return fetch(\`https://api.github.com/users/\${username}/starred\`)
      .then(data => dispatch({ type: 'SUCCESS', data }))
      .catch(error => dispatch({ type: 'ERROR', error }))
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='thunk13' name='Redux thunk #13' layout={CenteredPlainLayout}>
    <Code
      fontSize={23}
      language='typescript'
    >{`const getStarredReposForCurrentUser = () =>
  (dispatch, getState) => {
    const username = getCurrentUser(getState()).username

    dispatch({ type: 'LOADING' })

    return fetch(\`https://api.github.com/users/\${username}/starred\`)
      .then(data => dispatch({ type: 'SUCCESS', data }))
      .catch(error => dispatch({ type: 'ERROR', error }))
}

dispatch(getStarredReposForCurrentUser())`}</Code>
  </OtusSlide>,
  QuestionsSlide,
]

const middlewareSlides = [
  <AlertSlide key='mw1' name='Middlewares #1' alert='Middlewares' />,
  MiddlewareAnimationSlide,
  <CodeSlide
    key='mw2'
    name='Middlewares #2'
    language='typescript'
    code={`const middleware = (middlewareApi) => (next) => (action) => {
   // your code
 }`}
  />,
  <CodeSlide
    key='mw3'
    name='Middlewares #3'
    language='typescript'
    code={`type MiddlewareApi = {
  dispatch: Dispatch
  getState: () => State
}

const middleware = (middlewareApi: MiddlewareApi) =>
  (next) => (action) => {
    // your code
}`}
  />,
  <CodeSlide
    key='mw4'
    name='Middlewares #4'
    language='typescript'
    code={`type MiddlewareApi = {
  dispatch: Dispatch
  getState: () => State
}

const middleware = (middlewareApi: MiddlewareApi) =>
  (next: (action: AnyAction) => AnyAction) =>
    (action) => {
      // your code
}`}
  />,
  <CodeSlide
    key='mw5'
    name='Middlewares #5'
    language='typescript'
    code={`type MiddlewareApi = {
  dispatch: Dispatch
  getState: () => State
}

const middleware = (middlewareApi: MiddlewareApi) =>
  (next: (action: AnyAction) => AnyAction) =>
    (action: AnyAction) => {
      // your code
}`}
  />,
  <CodeSlide
    key='mw6'
    name='Middlewares #6'
    language='typescript'
    code={`type MiddlewareApi = {
  dispatch: Dispatch
  getState: () => State
}

const middleware = (middlewareApi: MiddlewareApi) =>
  (next: (action: AnyAction) => AnyAction) =>
    (action: AnyAction): AnyAction => {
      // your code
}`}
  />,
  <CodeSlide
    key='mw7'
    name='Middlewares #7'
    language='typescript'
    code={`const middleware: Middleware =
  ({ dispatch, getState }) => (next) => (action) => {
    // Сделать что-то до дальнейшей цепочки
    const resultAction = next(action)
    // Сделать что-то после дальнейшей цепочки
    return resultAction
}`}
  />,
  <CodeSlide
    key='mw8'
    name='Middlewares #8'
    language='typescript'
    code={`const middleware: Middleware =
  ({ dispatch, getState }) => (next) => (action) => {
    const resultAction = next(action)

    if (action.type === 'BUY_BUTTON_CLICK') {
      const state = getState()
      sendAnalytics('buy', { user: state.currentUser })
    }

    return resultAction
}`}
  />,
  <TitleSlide
    key='mw9'
    name='Кейсы для middleware'
    title='Кейсы для middleware'
  >
    <List fontSize={40} gapSize={22}>
      <Fragment>
        <ListItem>◾ Логирование</ListItem>
      </Fragment>
      <Fragment>
        <ListItem>◾ Аналитика</ListItem>
      </Fragment>
      <Fragment>
        <ListItem>◾ Devtools</ListItem>
      </Fragment>
      <Fragment>
        <ListItem>◾ Обработка actions</ListItem>
      </Fragment>
      <Fragment>
        <ListItem>◾ Цепочки actions</ListItem>
      </Fragment>
    </List>
  </TitleSlide>,
  QuestionsSlide,
  <OtusSlide key='mwassignment' name='Практика logging middleware'>
    <OuterLink href='https://codesandbox.io/s/otus-redux-logging-middleware-assignment-vc193?file=/src/logger.ts'>
      <Text size={45} bold>
        Практика 💻
      </Text>
    </OuterLink>
    <img src={CodesandboxImg} style={{ width: '800px', marginTop: '50px' }} />
  </OtusSlide>,
]

const ducksSlides = [<AlertSlide key='d1' name='Ducks' alert='Ducks 🦆' />]

const App = () => (
  <>
    <Presentation
      name='Otus React Course: redux middleware & side effects'
      theme={theme}
    >
      {CheckRecordSlide}
      {CheckSoundVideoSlide}
      {RulesSlide}

      <TitleSlide
        name='Карта'
        title='Карта вебинара'
        layout={CenteredPlainLayout}
      >
        <List gapSize='s'>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock height={70}>Запросы в Redux</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock height={70}>Redux thunk</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock height={70}>Концепция middlewares</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock height={70}>Middleware в Redux</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock height={70}>🦆</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
        </List>
      </TitleSlide>

      <MainTitleSlide
        name='Redux middlewares'
        title='Redux middleware & side effects'
      />

      {...problemSlides}

      {...thunkSlides}

      {...middlewareSlides}

      {...ducksSlides}

      <TitleSlide name='Итоги' title='Итоги'>
        <List fontSize={40}>
          <Fragment>
            <ListItem>◾ Как делать async flow в redux</ListItem>
          </Fragment>
          <Fragment>
            <ListItem>◾ Для чего нужен redux-thunk</ListItem>
          </Fragment>
          <Fragment>
            <ListItem>◾ Что такое middlewares</ListItem>
          </Fragment>
          <Fragment>
            <ListItem>◾ Как пользоваться redux middlewares</ListItem>
          </Fragment>
        </List>
      </TitleSlide>

      {QuestionsSlide}

      <TitleSlide name='Домашка' title='Домашнее задание'>
        <List>
          <Fragment>
            <ListItem></ListItem>
          </Fragment>
        </List>
      </TitleSlide>

      <TitleSlide name='Материалы' title='Материалы'>
        <List fontSize={30} fontWeight='bold' gapSize={26}>
          <ListItem>
            <OuterLink href='https://redux.js.org/advanced/async-actions'>
              Документация Redux: Async Actions
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://redux.js.org/advanced/async-flow'>
              Документация Redux: Async Flow
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://github.com/reduxjs/redux-thunk'>
              Документация Redux thunk
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://youtu.be/tV76RapGubo'>
              Middlewares are awesome / Никита Мостовой (HeadHunter)
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://redux.js.org/advanced/middleware'>
              Документация Redux: Middleware
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://daveceddia.com/what-is-a-thunk/'>
              What is a thunk
            </OuterLink>
          </ListItem>
        </List>
      </TitleSlide>

      <TitleSlide
        name='Опрос'
        title='Пожалуйста пройдите опрос 🙏'
        layout={CenteredLayout}
      >
        <OuterLink href='https://otus.ru/polls/9507/' fontSize={50}>
          Опрос
        </OuterLink>
      </TitleSlide>
    </Presentation>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
