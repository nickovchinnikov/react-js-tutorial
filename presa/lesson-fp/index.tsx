import React from 'react'
import ReactDOM from 'react-dom'
import { Presentation, Fragment } from '@saitonakamura/presa'
import {
  GlobalStyle,
  AlertSlide,
  Alert,
  Card,
  Avatar,
  CardContent,
  CardTitle,
  CardDesc,
  TitleSlide,
  Text,
  OuterLink,
  List,
  ListItem,
  NoticeBlock,
  CenteredPlainLayout,
  FullWidthFragment,
} from '../lib/blocks'
import {
  CheckRecordSlide,
  RulesSlide,
  QuestionsSlide,
  CheckSoundVideoSlide,
  MicrophoneSlide,
} from '../lib/slides'
import { theme } from '../lib/theme'
import { AnimatedSlide } from '../lib/useAnimatedSteps'
import { animated } from 'react-spring'
import { CenteredLayout } from '@saitonakamura/presa/lib/components/slide/layouts'

const PuritySlides = [
  <AlertSlide
    key='pure'
    name='Чистые функции'
    alert='Чистые функции'
  ></AlertSlide>,
]

const CurrySlides = [
  <AlertSlide
    key='curry'
    name='Каррирование'
    alert='Каррирование и частичное применение'
  ></AlertSlide>,
]

const InferenceSlides = [
  <AlertSlide key='infer' name='Вывод типов' alert='Вывод типов'></AlertSlide>,
]

const App = () => (
  <>
    <Presentation
      name='Otus React Course: функциональное программирование'
      theme={theme}
    >
      {CheckRecordSlide}
      {CheckSoundVideoSlide}
      {RulesSlide}

      <AnimatedSlide<{
        card: {
          position: 'absolute'
          top: string
          left: string
          transform: string
        }
      }>
        name='ФП'
        steps={[
          {
            card: {
              position: 'absolute',
              top: '150%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1)',
            },
          },
          {
            card: {
              top: '80%',
            },
          },
          {
            card: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(2)',
            },
          },
        ]}
      >
        {(styles) => (
          <React.Fragment>
            <Alert>Функциональное программирование</Alert>
            <animated.div style={styles.card}>
              <Card>
                <Avatar />
                <CardContent>
                  <CardTitle>Майк Башуров</CardTitle>
                  <CardDesc>Senior Frontend Engineer @ WiseBits</CardDesc>
                  <CardDesc>@saitonakamura</CardDesc>
                </CardContent>
              </Card>
            </animated.div>
          </React.Fragment>
        )}
      </AnimatedSlide>

      <TitleSlide name='Тест' title='Время для теста' layout={CenteredLayout}>
        <OuterLink href='https://docs.google.com/forms/d/e/1FAIpQLSeRg-69hhmcBkqe3MLM0xM83QJVj9yN7PCNDDAUyDQKf_dR6Q/viewform?usp=sf_link'>
          <Text size={150}>🧪</Text>
        </OuterLink>
      </TitleSlide>

      <MicrophoneSlide
        name='Что знаете об ФП'
        title='Что вы знаете/слышали об ФП? Что бы хотели узнать?'
      />

      <TitleSlide name='Зачем' title='Зачем это всё?' layout={CenteredLayout}>
        <List gapSize={70}>
          <Fragment>
            <ListItem>
              <Text size={45}>ФП имеет множество приемуществ</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size={45}>Его использует множество библиотек</Text>
            </ListItem>
          </Fragment>
          <Fragment>
            <ListItem>
              <Text size={45}>Вы уже его используете</Text>
            </ListItem>
          </Fragment>
        </List>
      </TitleSlide>

      <TitleSlide
        name='Карта'
        title='Карта вебинара'
        layout={CenteredPlainLayout}
      >
        <List gapSize='s'>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock>Чистота 🧼</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock>Карри 🍲</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock>Вывод типов ✨</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock>Монады 😈</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
        </List>
      </TitleSlide>

      {...PuritySlides}

      {...CurrySlides}

      {...InferenceSlides}

      <TitleSlide name='Доп материалы' title='Дополнительные материалы'>
        <List>
          <ListItem>
            <OuterLink href='https://mostly-adequate.gitbooks.io/mostly-adequate-guide/'>
              <Text size='m'>▪ Книга Профессора Фрисби 🦝</Text>
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://github.com/hmemcpy/milewski-ctfp-pdf'>
              <Text size='m'>▪ Теория категорий для программистов</Text>
            </OuterLink>
          </ListItem>
          <ListItem>
            <OuterLink href='https://blog.ploeh.dk/2017/10/04/from-design-patterns-to-category-theory/'>
              <Text size='m'>
                ▪ Блог Марка Симмона: от дизайн паттернов к теории категорий
              </Text>
            </OuterLink>
          </ListItem>
        </List>
      </TitleSlide>

      {QuestionsSlide}
    </Presentation>
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
