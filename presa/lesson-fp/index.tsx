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
  OtusSlide,
  Quote,
  HorizontalPlainLayout,
  HorizontalLayout,
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
import { Code } from '@saitonakamura/presa/lib/blocks'
import ReduxDevToolsImg from '../assets/reduxdevtools.png'

const PuritySlides = [
  <AlertSlide
    key='pure'
    name='Чистые функции'
    alert='Чистые функции 🧼'
  ></AlertSlide>,
  <OtusSlide key='puredef' layout={CenteredLayout}>
    <Quote size={45}>
      Чистая функция это идемпотентная (всегда возвращающая одинаковые значения
      при одинаковых аргументах) функция без сайд эффектов
    </Quote>
  </OtusSlide>,
  <TitleSlide
    key='ispure0'
    name='Чисто? #0'
    title='Эта функция чистая?'
    layout={CenteredPlainLayout}
  >
    <Code fontSize={35}>{`const identity = (x) => x`}</Code>
  </TitleSlide>,
  <TitleSlide
    key='ispure1'
    name='Чисто? #1'
    title='А эта функция чистая?'
    layout={CenteredPlainLayout}
  >
    <Code
      fontSize={35}
    >{`const add = (operand1, operand2) =>\n  operand1 + operand2`}</Code>
  </TitleSlide>,
  <TitleSlide
    key='ispure2'
    name='Чисто? #2'
    title='А эта?'
    layout={CenteredPlainLayout}
  >
    <Code fontSize={35}>{`const trace = (x) => {
  console.log(x)
  return x
}`}</Code>
  </TitleSlide>,
  <TitleSlide
    key='ispure3'
    name='Чисто? #3'
    title='А эта?'
    layout={CenteredPlainLayout}
  >
    <Code fontSize={35}>{`let id = 0
const newId = () => id++`}</Code>
  </TitleSlide>,
  <OtusSlide key='ispure4' name='Чисто? #4' layout={CenteredLayout}>
    <Code
      fontSize={35}
    >{`const magicConstant = 42\n\nconst getMagicConstant = () =>\n  magicConstant`}</Code>
  </OtusSlide>,
  <OtusSlide key='ispure5' name='Чисто? #5' layout={CenteredLayout}>
    <Code
      fontSize={35}
    >{`let magicNumber = 9\n\nconst getMagicNumber = () =>\n  magicNumber`}</Code>
  </OtusSlide>,
  <OtusSlide key='ispure6' name='Чисто? #6' layout={CenteredLayout}>
    <Code
      fontSize={35}
      language='typescript'
    >{`const sum = (arr: number[]) =>\n  arr.reduce((acc, curr) => acc + curr, 0)`}</Code>
  </OtusSlide>,
  <OtusSlide key='ispure7' name='Чисто? #7' layout={CenteredLayout}>
    <Code fontSize={35} language='typescript'>{`const sum = (arr: number) => {
  let sum = 0
  for (let num of arr) {
    sum += num
  }
  return sum
}`}</Code>
  </OtusSlide>,
  <OtusSlide key='sideeffectdef' name='Сайд-эффекты' layout={CenteredLayout}>
    <Quote size={35}>
      Сайд-эффект это изменение состояния системы или взаимодействие с внешним
      миром которое происходит в момент вычисления результата
    </Quote>
  </OtusSlide>,
  <TitleSlide
    key='sideeffectslist'
    name='Сайд-эффекты'
    title='Сайд-эффекты включают, но не ограничиваются...'
    titleSize='m'
    layout={CenteredLayout}
  >
    <List gapSize={20}>
      <ListItem>
        <Text size={30}>Чтение внешнего состояния</Text>
      </ListItem>
      <ListItem>
        <Text size={30}>Мутация внешнего состояния</Text>
      </ListItem>
      <ListItem>
        <Text size={30}>Чтение из БД</Text>
      </ListItem>
      <ListItem>
        <Text size={30}>Запись в БД</Text>
      </ListItem>
      <ListItem>
        <Text size={30}>HTTP запросы</Text>
      </ListItem>
      <ListItem>
        <Text size={30}>Чтение пользовательского ввода</Text>
      </ListItem>
      <ListItem>
        <Text size={30}>Логирование</Text>
      </ListItem>
    </List>
  </TitleSlide>,
  <TitleSlide
    key='whypure'
    name='А зачем чистые функции?'
    title='А чем хороши чистые функции?'
    layout={CenteredLayout}
  >
    <List gapSize={55}>
      <Fragment>
        <ListItem>
          <Text size={40}>Прекрасно тестировать ✅</Text>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <Text size={40}>О них легче рассуждать 🤯</Text>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <Text size={40}>Их легче композировать 🤝</Text>
        </ListItem>
      </Fragment>
    </List>
  </TitleSlide>,
  QuestionsSlide,
  <TitleSlide
    key='purepractice'
    name='Практика'
    title='Время практики!'
    layout={CenteredPlainLayout}
  >
    <Text size={150}>👩‍💻</Text>
  </TitleSlide>,
]

const ImmutabilitySlides = [
  <AlertSlide
    key='immutabilty'
    name='Иммутабельность'
    alert='Иммутабельность 💎'
  />,
  <OtusSlide key='immutabdef' name='Определение иммубельности'>
    <Quote size={45}>
      Иммутабельность означает отсутствие мутаций объекта или класса, его
      неизменяемость
    </Quote>
  </OtusSlide>,
  <TitleSlide
    key='isimmut1'
    name='Иммутабельно? #1'
    title='Это иммутабельно?'
    layout={CenteredLayout}
  >
    <Code fontSize={35}>{`const x = 1`}</Code>
  </TitleSlide>,
  <TitleSlide
    key='isimmut2'
    name='Иммутабельно? #2'
    title='А это иммутабельно?'
    layout={CenteredLayout}
  >
    <Code fontSize={35}>{`let x = 1\nx++`}</Code>
  </TitleSlide>,
  <TitleSlide
    key='isimmut3'
    name='Иммутабельно? #3'
    title='А это?'
    layout={CenteredLayout}
  >
    <Code fontSize={35}>{`const x = { name: 'Nick' }\nx.name = 'Mike'`}</Code>
  </TitleSlide>,
  <OtusSlide key='isimmut4' name='Иммутабельно? #4' layout={CenteredLayout}>
    <Code
      fontSize={35}
    >{`const x = { name: 'Mike', age: 27 }\nconst y = { ...x, age: 18 }`}</Code>
  </OtusSlide>,
  <OtusSlide key='isimmut5' name='Иммутабельно? #5' layout={CenteredLayout}>
    <Code fontSize={35}>{`const x = []\nx.push(1)\nconst y = x`}</Code>
  </OtusSlide>,
  <OtusSlide key='isimmut6' name='Иммутабельно? #6' layout={CenteredLayout}>
    <Code fontSize={35}>{`const x = [1]\nconst y = [...x, 2]`}</Code>
  </OtusSlide>,
  <TitleSlide
    key='whyimmut'
    name='А зачем иммутабельность?'
    title='А чем хороша иммутабельность?'
    layout={CenteredLayout}
  >
    <List gapSize={55}>
      <Fragment>
        <ListItem>
          <Text size={40}>Удобно дебажить 🤯</Text>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <Text size={40}>Referential transparency: скорость 🐆</Text>
        </ListItem>
      </Fragment>
    </List>
  </TitleSlide>,
  <OtusSlide
    key='reduxdevtools'
    name='Redux dev tools'
    layout={CenteredPlainLayout}
  >
    <img src={ReduxDevToolsImg} />
  </OtusSlide>,
  <OtusSlide
    key='refeq'
    name='Referential transparency'
    layout={HorizontalLayout}
    layoutStyle={{ justifyContent: 'space-around' }}
  >
    <Code>{`{
  name: 'Mike',
  age: 27,
  interests: [
    'programming',
    'drums',
    'cats',
  ],
  pet: {
    name: 'Vasya',
    age: 6
  }
}`}</Code>
    <Code>{`{
  name: 'Mike',
  age: 27,
  interests: [
    'programming',
    'drums',
    'running',
  ],
  pet: {
    name: 'Vasya',
    age: 6
  }
}`}</Code>
  </OtusSlide>,
  <OtusSlide
    key='refeq2'
    name='Referential transparency #2'
    layout={CenteredLayout}
  >
    <Code>{` const person = {
  name: 'Mike',
  age: 27,
  interests: [
    'programming',
    'drums',
    'cats',
  ],
  pet: {
    name: 'Vasya',
    age: 6
  }
}

person.interests.pop()
person.interests.push('cats')`}</Code>
  </OtusSlide>,

  <OtusSlide
    key='refer3'
    name='Referential transparency #3'
    layout={HorizontalLayout}
    layoutStyle={{ justifyContent: 'space-around', alignItems: 'flex-start' }}
  >
    <Code>{` const person = {
  name: 'Mike',
  age: 27,
  interests: [
    'programming',
    'drums',
    'cats',
  ],
  pet: {
    name: 'Vasya',
    age: 6
  }
}`}</Code>
    <Code>{`const newInterestsWithoutRunning =
  person.interests
    .slice(0, person.interests.length - 1)

const newInterests = [
  ...newInterestsWithoutRunning,
  'cats'
]

const newPerson = {
  ...person,
  interests: newInterests
}`}</Code>
  </OtusSlide>,
  QuestionsSlide,
]

const CurrySlides = [
  <AlertSlide
    key='curry'
    name='Каррирование'
    alert='Каррирование и частичное применение'
  ></AlertSlide>,
  <TitleSlide
    key='partial'
    name='Частичное применение'
    title='Частичное применение'
    layout={CenteredPlainLayout}
  >
    <Code>{`const fetchData = (url, params) =>\n  fetch(\`\${url}?\${toUrlParams(params)}\`)

const fetchOnUsers = (params) => fetchData('/users', params)

fetchOnUsers({ id: 1 })`}</Code>
  </TitleSlide>,
  <TitleSlide
    key='curryex'
    name='Каррирование'
    title='Каррирование'
    layout={CenteredPlainLayout}
  >
    <Code fontSize={35}>{`String -> Object -> Promise<unknown>`}</Code>
    <Code fontSize={35}>{`  const fetchData = (url, params) => ...`}</Code>
  </TitleSlide>,
  QuestionsSlide,
  <TitleSlide
    key='purepractice'
    name='Практика'
    title='Время практики!'
    layout={CenteredPlainLayout}
  >
    <Text size={150}>👩‍💻</Text>
  </TitleSlide>,
]

const TypesSlides = [
  <AlertSlide
    key='types'
    name='ФП Типы'
    alert='Типы по функциональному'
  ></AlertSlide>,
  QuestionsSlide,
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
        layout={CenteredPlainLayout}
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
        titleSize={35}
      />

      <TitleSlide name='Зачем' title='Зачем это всё?' layout={CenteredLayout}>
        <List gapSize={70}>
          <Fragment>
            <ListItem>
              <Text size={45}>ФП имеет множество преимуществ</Text>
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
              <NoticeBlock>Типы ✨</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
          <FullWidthFragment>
            <ListItem>
              <NoticeBlock>Монады? 😈</NoticeBlock>
            </ListItem>
          </FullWidthFragment>
        </List>
      </TitleSlide>

      {...PuritySlides}

      {...ImmutabilitySlides}

      {...CurrySlides}

      {...TypesSlides}

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
