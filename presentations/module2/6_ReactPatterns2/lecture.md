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
