---
title: React паттерны#2
description: React  
---

# OTUS

## ReactJS

<!--v-->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!--v-->

### Регрессия

<!--v-->

### Что помогает бороться с регрессией?

<!--v-->

### React patterns #2

<!--v-->

## Вопросы?

<!--s-->

### Какие паттерны вы уже знаете?

<!--v-->

### План занятия

  ```js
  [
    "Event switch",
    "Layout component",
    "Container component",
    "Higher-order component",
    "Conrolled input",
    "State hoisting",
  ].forEach((topic) => <React.Fragment key={topic}>
      <Theory topic={topic} />
      <Question topic={topic} />
  </React.Fragment>)
  ```

<!--v-->

### Event switch

Проблема - обработка большого числа однотипных изменений, например большое число полей на форме

<!--v-->

### Event switch

```js
class SomeClass extends React.Component {
  handleChangeName = (ev) => this.setState({
    name: ev.target.value,
  });

  handleChangeEmail = (ev) => this.setState({
    email: ev.target.value,
  });

  //..
}
```

<!--v-->

### Event switch

```js
class SomeClass extends React.Component {
  handleChange = (propName) => (ev) => this.setState({
    [propName]: ev.target.value,
  });

  render() {
    return (
      <form>
        <input name="name" onChange={this.handleChange("name")} />
        <input name="email" onChange={this.handleChange("email")} />
      </form>
    );
  }
} 
```

<!--v-->

### Event switch - решение

```js
class SomeClass extends React.Component {
  handleChange = (ev) => this.setState({
    [ev.target.getAttribute("name")]: ev.target.value,
  });

  render() {
    return (
      <input name="name" onChange={this.handleChange} />
      <input name="email" onChange={this.handleChange} />
    )
  }
}
```
[Описание Event Switch](https://reactpatterns.com/#event-switch)  
[Пример в коде](https://github.com/nickovchinnikov/react-js-tutorial/pull/19/commits/04eacc84314a8c9690c5b0c70eb65a62ef93f6f5)

<!--v-->

## Вопросы?

<!--s-->

### Layout component

Оптимизация рендеринга, если используются макетные компоненты
(только с **умными детьми!**) 

Для компонента, который служит только для задания структуры страницы и который не меняется со временем, можно отключить обновления. Это ускоряет страницу, особенное если дети не зависят от родителей


<!--v-->

### Layout component

```js
<TwoColumnslayout
  sidebar={<SmartSideBarComponent />}
  mainContent={<SmartContentComponent />}
/>
```

<!--v-->

### Layout component

```js
shouldComponentUpdate() {
  return false;
}
```

[Описание Layout component](https://reactpatterns.com/#layout-component)  
[Пример в коде](https://github.com/nickovchinnikov/react-js-tutorial/pull/19/commits/05d2f80a0eb4bb2bd836abe66db7cfd47415d0cd)

<!--v-->

## Вопросы?

<!--s-->

### Container Component

Разделение компонент на “логику” и “представление”

**Представление** - презентационные компоненты, отвечают только за отображение (возможно с минимальным условным рендерингом)

**Логика** - описание путей приложения, графы состояний и переходы, загрузка данных и обработка действий пользователя

<!--v-->

### Container Component

Вынося представление в презентационные компоненты, мы по-максимуму переиспользуем визуальные компоненты.

Остается создать слой для реализации логики, он в React так же может быть представлен компонентом.

Подход сильно упрощает тестирование

<!--v-->

### Container Component

```js
class CommentsContainer extends React.Component {
  state = { comments: [] }

  componentDidMount() {
    $.ajax({
      url: "./comments.json",
      dataType: "json",
      success: comments => this.setState({comments}),
    })
  }

  render() {
    return <Commentlist comments={this.state.comments} />
  }
}
```

<!--v-->

## Вопросы?

<!--s-->

### Функции высшего порядка

**Функция высшего порядка** — в программировании функция, принимающая в качестве аргументов другие функции или возвращающая другую функцию в качестве результата. 

[Парочка примеров](https://stackblitz.com/edit/typescript-ukh8dn)  
На почитать [раз](https://habr.com/ru/post/421537/) и [два](https://habr.com/ru/company/ruvds/blog/428570/)

<!--v-->

### Компоненты высшего порядка High Order Components

Компоненты высшего порядка — функции которые принимают **компоненты** в качестве аргумента и/или возвращают **компоненты** как результат работы

Читать [раз](https://ru.reactjs.org/docs/higher-order-components.html), [два](https://reactpatterns.com/#higher-order-component) и [три](https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb)

<!--v-->

### High Order Components

Типичные задачи решаемые HOC:
- Расширение функционала  
- Внедрение зависимостей  

<!--v-->

### High Order Components

```js
const withLabelHOC = (text, el) => <label>{text} {el}</label>
<div>{withLabelHOC("Hola!", <input placeholder="Hola" />)}</div>
```

<!--v-->

### High Order Components

```js
const withLabelHOC = (text, Component) => (props) => <label>{text} <Component {..props} />
</label>;
const LabeledInput1 = withLabelHOC("Hola", "input");
const LabeledInput2 = withLabelHOC("Hola2", InputComponent);

<div><LabeledInput1 placeholder="Hola placeholder 1" /></div>
<div><LabeledInput2 placeholder="Hola placeholder 2" type="email" /></div>
```

<!--v-->

### Правила HOC

- Не мутировать компонент, использовать композицию
- Пробрасывать все пропсы в оборачиваемый компонент
- Добавляйте **'.displayName'**
- Не создавать/не использовать HOC внутри методов

<!--v-->

## Вопросы?

<!--s-->

### Контролируемый ввод / Подъем состояния

Создавая презентационные компоненты, нам нужно обеспечить двустороннюю связь. Обычно это достигается следующим способом:

- Данные передаются от родителей к дочерним элементам как пропсы
- Изменения передаются от дочерних элементов к родителям через коллбэки (которые являются частью пропсов)


<!--v-->

### Контролируемый ввод / Подъем состояния

```js
class Name extends React.Component({}, {name: string}) {
  state = { name: 'Bob' }

  setName(ev) {
    this.setState({
      name: ev.target.value,
    })
  }

  render() {
    return <div>
      <h1>Name: {this.state.name}</h1>
      <input value={this.state.name} onChange={this.setName} />
    </div>
  }
}
```

<!--v-->

### Контролируемый ввод / Подъем состояния

```js
class TodoListApp extends React.Component({}, {name: string}) {
  state = { items: [] }

  addItem = (item) => this.setState(state => ({
    items: [item, ...items],
  }));

  // ...

  render() {
    return <div>
      <AddItemForm addItem={this.addItem} />
      <TodoList items={this.state.items} removeItem={this.removeItem} />
    </div>;
  }
}
```
Читать [раз](https://reactpatterns.com/#state-hoisting),  [два](https://reactpatterns.com/#controlled-input) и [три](https://ru.react.js.org/docs/lifting-state-up.html). Или [смотреть](https://www.youtube.com/watch?v=qdaDgC_xU0w)

<!--v-->

## Вопросы?

<!--s-->

### Практика - 10 минут

1. Подтянуть к себе изменения из основного репозитория
2. Переключиться на ветку **lesson-10**
3. Открыть файл **`src/utils/withOnChangeValue.tsx`** (тесты в соседнем файле)
4. На основе заглушки, реализовать HOC, которые добавит к полям ввода возможность 
подписываться на **`changeValue`** событие (аргументом в обработчик должно приходить новое значение)
5. Проверить код тестами
6. Сделать Pull Request в ветку **lesson-10** 
7. Сбросить ссылку на Pull Request в чат

<!--v-->

## Вопросы?

<!--s -->

### Домашнее задание

Разрабатываем приложение, используя полученные знания.
Логика приложения не должна смешиваться с логикой представления.

- планируем и разделяем ответственность между контейнерами
- объединяем все элементы управления и отображения
- реализуем функцию рандомного наполнения массива, в зависимости от выбранного процента заполненности
- реализуем начальное заполнение поля, на основе сгенерированных данных
- при смене процента заполненности, меняются данные в поле, работающая кнопка reset

&darr;&darr;&darr;

<!--v-->

### Домашнее задание

Делаем refactoring нашего умного компонента из предыдущего ДЗ, используя полученные знания.
Используем тесты, чтобы бороться к регрессией и отлавливать ошибки

**&plus; 1** <u>балл за подготовленный шаблон приложения</u>  
**&plus; 2** <u>балла за функцию рандомного наполнения</u>   
**&plus; 2** <u>балла если при смене процента заполненности, меняются данные в поле, работающая кнопка reset</u>

<!--v-->

### Что почитать

- [React Patterns](https://reactpatterns.com/)
- [Паттерны React (перевод на русский)](https://habr.com/ru/post/309422/)

<!--v-->

### Спасибо за внимание!

<img src="data:image/png;base64, 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
m70J8Ifl/wNtqpdqGnFGCwAAAABJRU5ErkJggg==">
