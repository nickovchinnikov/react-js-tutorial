import React from 'react'
import {
  TitleSlide,
  CenteredPlainLayout,
  CameraImage,
  Alert,
  AlertSlide,
  AlertDescription,
  List,
  ListItem,
  IconText,
  Text,
  Card,
  Avatar,
  CardContent,
  CardTitle,
  CardDesc,
  OtusSlideProps,
  OtusSlide,
  Quote,
} from './blocks'
import { SlideProps, Fragment } from '@saitonakamura/presa'
import { CenteredLayout } from '@saitonakamura/presa/lib/components/slide/layouts'
import { Size } from './utils'
import { AnimatedSlide } from './useAnimatedSteps'
import { animated } from 'react-spring'
import { CodeProps, Code } from '@saitonakamura/presa/lib/blocks'

export const CheckRecordSlide = (
  <TitleSlide
    name='Проверяем запись'
    title='Проверить, идет ли запись!'
    layout={CenteredPlainLayout}
  >
    <CameraImage />
  </TitleSlide>
)

export const CheckSoundVideoSlide = (
  <AlertSlide
    name='Проверяем связь'
    alert={
      <>
        Меня хорошо видно && слышно?
        <AlertDescription>
          Ставьте ➕ , если все хорошо
          <br />
          Напишите в чат, если есть проблемы
        </AlertDescription>
      </>
    }
  />
)

export const RulesSlide = (
  <TitleSlide name='Правила' title='Правила вебинара'>
    <List>
      <Fragment>
        <ListItem>
          <IconText icon='talk'>Активно участвуем</IconText>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <IconText icon='questions'>Задаем вопрос в чат или голосом</IconText>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <IconText icon='slack'>
            Off-topic обсуждаем в Slack #канал группы или #general
          </IconText>
        </ListItem>
      </Fragment>
      <Fragment>
        <ListItem>
          <IconText icon='time'>
            Вопросы вижу в чате, могу ответить не сразу
          </IconText>
        </ListItem>
      </Fragment>
    </List>
  </TitleSlide>
)

export const MicrophoneSlide = (
  props: SlideProps & { title: string; titleSize?: Size },
) => (
  <TitleSlide {...props} layout={CenteredLayout}>
    <Text size={150}>🎤</Text>
  </TitleSlide>
)

export const QuestionsSlide = (
  <MicrophoneSlide
    key='microphone'
    name='Вопросы'
    title='Какие вопросы есть?'
  />
)

export const MainTitleSlide = (
  props: SlideProps & { title: React.ReactNode },
) => (
  <AnimatedSlide<{
    card: {
      top: string
      left: string
      transform: string
    }
  }>
    {...props}
    layout={CenteredPlainLayout}
    name='ФП'
    steps={[
      {
        card: {
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
    ]}
  >
    {(styles) => (
      <React.Fragment>
        <Alert>{props.title}</Alert>
        <animated.div style={{ position: 'absolute', ...styles.card }}>
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
)

export const QuoteSlide = (props: OtusSlideProps & { quote: string }) => (
  <OtusSlide {...props} layout={CenteredPlainLayout}>
    <Quote>{props.quote}</Quote>
  </OtusSlide>
)

export const CodeSlide = ({
  language,
  code,
  ...rest
}: OtusSlideProps & CodeProps & { code: string }) => (
  <OtusSlide layout={CenteredPlainLayout} {...rest}>
    <Code language={language}>{code}</Code>
  </OtusSlide>
)
