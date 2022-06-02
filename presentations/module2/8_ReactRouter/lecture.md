---
title: React Router
description: React
---

# OTUS

## ReactJS

<!--v-->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!--v-->

## React Router

<!--v-->

### Что мы уже знаем

1. **React** — библиотека для интерактивных интерфейсов
2. **JSX** — тонкий синтаксис шаблонов:

```
  <Cmp name={ name } /> == React.createElement(Cmp, { name: name }, []);
```

3. Компоненты могут сами себя обновлять через **state + setState**
4. Иногда компоненты вызывают лайфсайкл-хуки
5. Паттерны: HOC, smart / dumb components, render prop

<!--v-->

### На вебинаре мы узнаем

- Из чего состоит URL
- Зачем нам URL (и когда не нужен)
- Браузерные API для работы с адресом
- react-router

<!--s-->

## URL

<!--v-->

### Из чего состоит URL?

**Единый указатель ресурса** (англ. Uniform Resource Locator, URL) — единообразный локатор (определитель местонахождения) ресурса.  

Ранее назывался **Universal Resource Locator** — универсальный указатель ресурса.
URL служит стандартизированным способом записи адреса ресурса в сети Интернет.  

<!--v-->

### Общая схема

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

[URL wiki](https://ru.wikipedia.org/wiki/URL)

<!--v-->

### Из чего состоит URL?

<div style="display:flex;justify-content:center">
  <div style="display:flex;flex-direction:column;text-align:left">
    <span style="color:Brown">https://</span>
    <span style="font-weight:bold">1</span>
  </div>
  <div style="display:flex;flex-direction:column;text-align:left">
    <span style="color:LightCoral">market.yandex.ru</span>
    <span style="font-weight:bold">2</span>
  </div>
  <div style="display:flex;flex-direction:column;text-align:left">
    <span style="color:SandyBrown">:443</span>
    <span style="font-weight:bold">3</span>
  </div>
  <div style="display:flex;flex-direction:column;text-align:left">
    <span style="color:MediumSeaGreen">/catalog--faksy/55024/list</span>
    <span style="font-weight:bold">4</span>
  </div>
  <div style="display:flex;flex-direction:column;text-align:left">
    <span style="color:SkyBlue">?onstock=1</span>
    <span style="font-weight:bold">5</span>
  </div>
  <div style="display:flex;flex-direction:column;text-align:left">
    <span style="color:Orchid">#onstock</span>
    <span style="font-weight:bold">6</span>
  </div>
</div>

<!--v-->

### Из чего состоит URL?

1. <span style="color:Brown">https:// — протокол</span>
2. <span style="color:LightCoral">market.yandex.ru — хостнейм</span>
3. <span style="color:SandyBrown">443 — порт</span>
4. <span style="color:MediumSeaGreen">/catalog—faksy/55024/list — путь</span>
5. <span style="color:SkyBlue">?onstock=1 — query string / search</span>
6. <span style="color:Orchid">#onstock — anchor / hash</span>

**Level up: зачем нужна каждая часть и кто ее обрабатывает?**

<!--v-->

### Из чего состоит URL?

1. _market.yandex.ru_ — хостнейм проходит через DNS и превращается в IP: 87.250.250.22 / 2a02:6b8::2:22
2. _https://_ — протокол и _8443_ — порт передаются серверу и обрабатываются на уровне ОС — _сервер_ (процесс) привязан именно к порту.
3. Сервер смотрит на путь _/catalog—faksy/55024/list_ и qs _?onstock=1_, разбирает его на части, достает параметры (здесь — что-то вроде _{ category: 'faksy', onstock: '1' })_, собирает про ним ответ (HTML / JSON / XML / blob) и отправляет клиенту.
4. Клиент может поискать по якорю элемент на странице _#onstock_

<!--v-->

### Задание: парcим URL глазами

Паттерн

1. /users/:uid/posts/:pid
2. /users/vklepov/posts/1107
3. /users/super-ivan/posts/332?fullscreen=1
4. /users/daddy/posts

<!--v-->

### Ограничения на URL

- Хост начинается с **a-z**, содержит **[a-z0-9-]**, < **253** символов, нечувствителен к регистру. [кириллическиедомены.рф](http://xn--d1abablaabneiatpmww0ixd.xn--p1ai) — хак.
- Весь URL — до **2000** символов
- Хвост URL состоит из латиницы, цифр и символов:  
  **-.\_~!$&'()\*+,;=:@%**
- Остальные символы нужно кодировать — в браузере есть encodeURIComponent / decodeURIComponent
- **Задание: Что это?** 
  \*_%7B%22%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%22
  %3A%20%22%D1%80%D0%B5%D0%B1%D1%8F%D1%82%D0%B0%22%7D_

<!--v-->

## Вопросы?

<!--s-->

## Зачем нам URL?

<!--v-->

### Зачем нам URL?

- Классически (нам это не очень нужно)
  - Искать сервер
  - Передавать данные на сервер
- Ближе к нам. URL уникально определяет ресурс, значит:
  - Можно сохранить URL и вернуться на него (закладки, история)
  - Можно послать URL другу, чтобы он тоже посмотрел
  - Можно сделать ссылку на наш сайт
  - Бесплатная персистентность! Перезагружаем страницу — видим то же, что и раньше

<!--v-->

### Какие бывают URL?

- Абсолютный: *https://google.com?q=news*
- Относительно хоста: _/searchsearch?q=news_
- Относительно текущего URL: _image.jpg_

<!--v-->

## Вопросы?

<!--s-->

### Браузерные API для работы с адресом

<!--v-->

### Роутинг на фронте: что нужно

- При изменении адреса браузер переходит по адресу, то есть перезагружает страницу. Это нам не подходит.
- Нам нужна возможность менять URL, но оставаться на текущей странице
- Это не так просто, как может показаться. Иначе можно было бы показать в браузере "https://sberbank.ru" на своем сайте.
- Самое простое — менять хеш. Получаются адреса вида _site.com/#/users/123?search=1_
- В HTML5 есть History API, с которым все это гораздо удобнее
- Еще неплохо бы уметь доставать параметры из URL.

<!--v-->

### Работа с URL в браузере

- **History API**  
  https://developer.mozilla.org/ru/docs/Web/API/History

- **Hash API**  
  https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/hash

<!--v-->

### Общая схема работы с URL

1. Создать обработчик URL
2. Подписаться на изменения URL
3. При загрузке страницы - считать состояние и запустить обработчик
4. Переопределить поведение внутренних ссылок
5. При клике по ссылке - обновлять URL (2)

https://jsbin.com/dosuzis/edit?html,js  
https://jsbin.com/xovezez/edit?html,js

<!--v-->

### Роутинг

<p style="text-align:left">
  Обработчик URL - называется <u>роутером</u> (Router)<br>
  Роутер определяет какой код должен выполняться в зависимости от адреса. Логика роутера может быть завязана на параметры.
</p>

<!--v-->

### History API vs server

- Казалось бы, правда: мы запрашиваем _app/users/123_, а сервер не знает про такой файл, и кидает 404!
- На самом деле это пишется в 1 строку. nginx:  

```
  location / {
    try_files $uri /index.html;
  }
```

- Вариант на node.js с использованием express:

```js
  const root = path.join(process.cwd(), 'dist');
  app.use(express.static(root));
  app.get('*', (_, res) => res.sendFile('index.html', { root }));
```
- То есть: поищи файл, не нашел — верни /index.html
  index.html уже грузит наш фронт.

<!--v-->

### Нет кода — нет проблем

- Еще можно полностью проигнорировать URL и никогда его не трогать
- Состояние в одном браузере можно сохранять в **localStorage**
- По техническим причинам в **iframe** тоже не стоит использовать URL

<!--v-->

### history (библиотека)

```js
// вторая половина (слушать при переходах) — сложнее
// > npm i history

import { createBrowserHistory } from 'history';
// еще есть createHashHistory и createMemoryHistory

const history = createBrowserHistory();

// читаем
const location = history.location;

// Подписываемся
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});

// API — совместимый с HTML5 History
history.push('/home', { some: 'state' });

// отписаться
unlisten();
```

<!--v-->

## Вопросы?

<!--s-->

### React-router

<!--v-->

### React-router: что это?

- **React-router** — библиотека для клиентского роутинга в реакт-приложениях:
  - Подписываться на изменения URL и обновлять приложение
  - “Виртуальные” ссылки
  - Парсит пути, достает параметры
- Будем смотреть на react-router v6
- Философия — описание роутов в виде компонентов

<!--v-->

### react-router: Router и Route

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

// BrowserRouter создает объект history и прокидывает
// его вниз
// Можно также HashRouter / MemoryRouter
const App = () => (
  <BrowserRouter>
    { /* Route просто описывает пути */ }
    <Routes>
      <Route index element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="category" element={<Category />} />
    </Routes>
  </BrowserRouter>
);
// как называется паттерн в Route?
```

<!--v-->

### React-router: вложенные Route

```jsx
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

// также обратите внимание на Routes
const Category = () => (
  <Routes>
    <Route index element={<CatList />} />
    <Route path=":catid" element={<CatPage />} />
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="news" element={<News />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```

<!--v-->

### react-router: Route с параметрами

```jsx
import {
  useParams, Route, Routes
} from "react-router-dom";

const CatPage = () => {
  const { catid } = useParams();
  return (
    <h1>Viewing category {catid}</h1>
  );
}

const Category = () => (
  <Routes>
    <Route path="/" element={<CatList />} />
    <Route path="/:catid" element={<CatPage />} />
  </Routes>
);
```

<!--v-->

### react-router: действия при входе

```jsx
const CatPage = () => {
  const { catid } = useParams();
  
  useEffect(() => {
    fetch(`/cats/${catid}`).then(/*...*/)
  }, [catid]);

  return (
    <div>
      <h1>Viewing category {catid}</h1>
    </div>
  )
}

const Category = () => (
  <Routes>
    <Route path="/" element={<CatList />} />
    <Route path="/:catid" element={<CatPage />} />
  </Routes>
);
```

<!--v-->

### react-router: задание

- Пишем структуру роутов для интернет-магазина
  - список
  - категории
  - страницы товаров
  - не-магазинные страницы (контакты, блог).
- присылайте в чат!

<!--v-->

### react-router

https://reacttraining.com/react-router/web/

<!--v-->

## Вопросы?

<!--s-->

### react-router: <Link />

- У элемента **`<a>`** на самом деле куча полезной функциональности:
  - контекстное меню
  - _ctrl / alt + click_ — открыть в новой вкладке / сохранить
  - **`<a>`** можно даже перетаскивать!
- Если вместо **`<a>`** рисовать
```
  <span onClick={ () => history.pushState(…) }>
    link
  </span>
```
  то мы теряем всю браузерную обвеску.

<!--v-->

### react-router: <Link />

```jsx
import { Link, generatePath } from "react-router-dom";
// Хитрая ссылка
<Link to="/news">Новости!</Link>

// можно generatePath
<Link to={generatePath("/user/:id/", { id })}>{name}</Link>

// или просто руками:
<Link to={`/user/${id}/`}>{name}</Link>

// или объектом
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>
```

<!--v-->

### react-router: внешние ссылки

```js
//у Link есть подвох

// если на https://vasya-superman.ru написать
<Link to="https://mail.yandex.ru">Yandex.Mail</Link>

// то получится
<a href="https://vasya-superman.ru/https://mail.yandex.ru">
  Yandex.Mail
</a>

// это скорее всего не то, чего мы хотели

// Обход 1 — писать руками <a> для внешних ссылок
// Обход 2 — написать обертку <SmartLink>, которая смотрит на URL,
// проверяет, абсолютный ли он, и рисует <Link>или <a>

// Задание: реализуйте SmartLink
```

<!--v-->

### react-router: Navigate

```js
import { Navigate, BrowserRouter } from "react-router-dom";
// Рендерим Navigate - переходим по адресу
<Navigate to="/view-ad" />

// Более полезный кейс:
const withAuth = Cmp => props => {
  return props.user 
    ? <Cmp { ...props } /> 
    : <Navigate to="/login" />;
};
```

<!--v-->

### react-router: парсим query string

```js
// Противоречивое решение react-router v4:
// убрать работу с queryString
// Теперь все сами:

import queryString from 'query-string';

const Page = ({ location }) => {
  const params = queryString.parse(location.search);
  return <GoodsSearch 
    name={ params.name }
    minPrice={ params.minPrice }
  />
};
```

<!--v-->

### react-router: парсим query string

[query parameters react router way](https://reactrouter.com/web/example/query-parameters)

<!--v-->

## Вопросы?

<!--s-->

### Что прошли?

- URL
- Браузерные API location & history
- react-router

<!--v-->

### Домашнее задание

*Данные о пользователе можно хранить в local storage*

- при старте приложения пользователь вводит имя и нажимает кнопку **START**
- после ввода имени идет перенаправление на страницу с приложением
- пользователь должен видеть экран приветствия только один раз
- после ввода имени в приложении должно показываться имя пользователя
- добавить кнопку выход, при нажатии на которую сбрасывается информация о пользователе

&darr;&darr;&darr;

<!--v-->

### Домашнее задание

- Покрыть тестами базовые сценарии входа / выхода  
- Покрыть тестами функционал экрана входа

- `+` 2 балла за реализацию стартового экрана  
- `+` 2 балла за кнопку выход  
- `+` 1 балла если все работает по сценарию  

<!--v-->

### Спасибо за внимание!
