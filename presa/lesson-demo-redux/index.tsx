import React from 'react'
import ReactDOM from 'react-dom'
import { Presentation, Slide, Fragment } from '@saitonakamura/presa'
import { theme } from '../lib/theme'
import { CenteredLayout } from '@saitonakamura/presa/lib/components/slide/layouts'
import {
  Alert,
  CenteredPlainLayout,
  AlertSlide,
  TitleSlide,
  Avatar,
  Card,
  CardTitle,
  CardContent,
  CardDesc,
  List,
  ListItem,
  GlobalStyle,
  NoticeBlock,
  FullWidthFragment,
  HorizontalPlainLayout,
  Text,
} from '../lib/blocks'
import { UiAppSlide } from './slides/UiAppSlide'
import { LiftingStateSlide } from './slides/LiftingState'
import { Code } from '@saitonakamura/presa/lib/blocks'
import { ReduxDiagramSlide } from './slides/ReduxDiagramSlide'
import CodesandboxImgUrl from '../assets/codesandbox.png'
import {
  CheckRecordSlide,
  CheckSoundVideoSlide,
  RulesSlide,
  QuestionsSlide,
} from '../lib/slides'

const App = () => (
  <>
    <Presentation name='Otus demo lesson: Redux' theme={theme}>
      {CheckRecordSlide}

      {CheckSoundVideoSlide}

      {RulesSlide}

      <AlertSlide name='Redux'>
        <Alert>Redux</Alert>
        <Card
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Avatar />
          <CardContent>
            <CardTitle>Майк Башуров</CardTitle>
            <CardDesc>Senior Frontend Engineer @ WiseBits</CardDesc>
            <CardDesc>@saitonakamura</CardDesc>
          </CardContent>
        </Card>
      </AlertSlide>
      {/* 
      <AlertSlide name='Redux'>
        <Alert>Redux</Alert>
      </AlertSlide> */}

      <TitleSlide name='Карта вебинара' title='Карта вебинара'>
        <CenteredPlainLayout>
          <List gapSize='l'>
            <FullWidthFragment>
              <ListItem>
                <NoticeBlock>Зачем Redux</NoticeBlock>
              </ListItem>
            </FullWidthFragment>
            <FullWidthFragment>
              <ListItem>
                <NoticeBlock>Что Redux</NoticeBlock>
              </ListItem>
            </FullWidthFragment>
            <FullWidthFragment>
              <ListItem>
                <NoticeBlock>Как Redux</NoticeBlock>
              </ListItem>
            </FullWidthFragment>
            {/* <FullWidthFragment>
              <ListItem>
                <NoticeBlock>Async Redux</NoticeBlock>
              </ListItem>
            </FullWidthFragment>
            <FullWidthFragment>
              <ListItem>
                <NoticeBlock>Практика Async Redux</NoticeBlock>
              </ListItem>
            </FullWidthFragment> */}
          </List>
        </CenteredPlainLayout>
      </TitleSlide>

      <UiAppSlide name='Из чего состоит приложение' />

      <LiftingStateSlide name='А если поднять стейт?' />

      <TitleSlide name='100 к 1' title='100 к 1: как пробросить стейт'>
        <List gapSize='l'>
          <Fragment>
            <ListItem>
              <Text size='l'>Context</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size='l'>Redux</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size='l'>Reactive outer state</Text>
            </ListItem>
          </Fragment>
        </List>
      </TitleSlide>
      <Slide name='А вот так в Redux'>
        <HorizontalPlainLayout>
          <Code>{`const App = () =>
  <Provider store={store}>
    <PageLayout />
  </Provider>`}</Code>
          <Code>{`const LanguageDropdown = () => {
    const lang = useSelector(
      state => state.lang)

    const dispatch = useDispatch()

    return (
      <Dropdown
        value={lang}
        onChange={v =>
          dispatch({
            type: 'SET_LANG',
            lang: v
          })} />
    )
  }`}</Code>
        </HorizontalPlainLayout>
      </Slide>

      <TitleSlide name='Три принципа Redux' title='Три принципа Redux'>
        <List gapSize='l'>
          <Fragment index={0}>
            <ListItem>
              <Text size='l'>🥇 Единый источник правды</Text>
              <Fragment index={3}>
                <Text size='m'>Меньше багов с расхождением состояния</Text>
              </Fragment>
            </ListItem>
          </Fragment>
          <Fragment index={1}>
            <ListItem>
              <Text size='l'>💎 Иммутабельный стейт</Text>
              <Fragment index={4}>
                <Text size='m'>
                  Выше скорость (shallow compare) и лучше дебаг
                </Text>
              </Fragment>
            </ListItem>
          </Fragment>
          <Fragment index={2}>
            <ListItem>
              <Text size='l'>🧻 Изменения через чистые функции</Text>
              <Fragment index={5}>
                <Text size='m'>Легко тестировать</Text>
              </Fragment>
            </ListItem>
          </Fragment>
        </List>
      </TitleSlide>

      <ReduxDiagramSlide name='Схема работы Redux' />

      <TitleSlide name='Практика' title='Время практики'>
        <CenteredPlainLayout>
          <a
            href='https://codesandbox.io/s/otus-redux-demo-lesson-start-64ijq?file=/src/index.js'
            rel='noopener noreferrer'
            target='_blank'
          >
            https://codesandbox.io/s/otus-redux-demo-lesson-start-64ijq?file=/src/index.js
          </a>
          <img
            style={{ width: '600px', marginTop: '40px' }}
            src={CodesandboxImgUrl}
          ></img>
        </CenteredPlainLayout>
      </TitleSlide>

      <TitleSlide name='Цели' title='Чему научились?'>
        <List>
          <Fragment>
            <ListItem>
              <Text size='l'>Узнали что такое Redux</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size='l'>Узнали какую проблему решает Redux</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size='l'>Узнали какие Redux дает преимущества</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size='l'>Научились писать actions и reducers</Text>
            </ListItem>
          </Fragment>
        </List>
      </TitleSlide>

      <TitleSlide name='Ссылки' title='Ссылки'>
        <CenteredLayout>
          <List gapSize='l'>
            <ListItem>
              <a
                href='https://redux.js.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Text size='l'>Документация Redux</Text>
              </a>
            </ListItem>
            <ListItem>
              <a
                href='https://react-redux.js.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Text size='l'>Документация React-Redux</Text>
              </a>
            </ListItem>
          </List>
        </CenteredLayout>
      </TitleSlide>

      {QuestionsSlide}
    </Presentation>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
