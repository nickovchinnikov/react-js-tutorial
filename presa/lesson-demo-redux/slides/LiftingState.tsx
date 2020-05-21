import React from 'react'
import { SlideProps, Fragment } from '@saitonakamura/presa'
import { TitleSlide, HorizontalPlainLayout } from '../../lib/blocks'
import { Code } from '@saitonakamura/presa/lib/blocks'

const codeFontSize = 18

export const LiftingStateSlide = (props: SlideProps) => (
  <TitleSlide title='А как же lifting state up?' {...props}>
    <HorizontalPlainLayout gapSize={60} style={{ marginBottom: '40px' }}>
      <Fragment index={0}>
        <Code fontSize={codeFontSize}>{`const App = () => {
  const [lang, setLang] =
    useState('en')
  return <PageLayout
    lang={lang}
    setLang={setLang} />
}`}</Code>
      </Fragment>
      <Fragment index={2}>
        <Code fontSize={codeFontSize}>{`const PageLayout =
  ({ lang, setLang }) =>
  <Header lang={lang}
    setLang={setLang} />
  <Main /><Footer />`}</Code>
      </Fragment>
      <Fragment index={3}>
        <Code fontSize={codeFontSize}>{`const Header =
  ({ lang, setLang }) =>
  <Title />
  <Search />
  <UserMenu lang={lang}
    setLang={setLang} />`}</Code>
      </Fragment>
    </HorizontalPlainLayout>
    <HorizontalPlainLayout gapSize={60}>
      <Fragment index={4}>
        <Code fontSize={codeFontSize}>{`const UserMenu =
  ({ lang, setLang }) =>
    <Menu>
     <LanguageMenuItem
      lang={lang}
      setLang={setLang} />
    </Menu>`}</Code>
      </Fragment>
      <Fragment index={5}>
        <Code fontSize={codeFontSize}>{`const LanguageMenuItem =
({ lang, setLang}) =>
  <LanguageDropdown
    lang={lang}
    setLang={setLang} />`}</Code>
      </Fragment>
      <Fragment index={1}>
        <Code fontSize={codeFontSize}>{`const LanguageDropdown =
  ({ lang, setLang }) =>
    <Dropdown
      value={lang}
      onChange={setLang} />`}</Code>
      </Fragment>
    </HorizontalPlainLayout>
  </TitleSlide>
)
