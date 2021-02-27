---
title: React and Redux
description: React
---

# OTUS

## ReactJS

<!-- v -->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!-- v -->

## Вопросы?

<!-- s -->

### Что мы уже знаем?

1. React, устройство компонентов, HOOKs & HOCs
2. Redux и его API

<!-- v -->

## Вопросы?

<!-- s -->

### Принципы redux?

<!-- v -->

### Что такое редьюсер?

<!-- v -->

### Что такое action?

<!-- v -->

### Как создать store?

<!-- v -->

### Какой API у store?

<!-- v -->

## React + Redux

<!-- v -->

### Action creators

<p style="text-align:left">
  <b>Генераторы экшенов (Action Creators)</b> — не что иное, как функции, которые создают экшены. Довольно просто путать термины “action” и “action creator,” поэтому постарайтесь использовать правильный термин.
</p>

https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html#%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D1%8D%D0%BA%D1%88%D0%B5%D0%BD%D0%BE%D0%B2-action-creators
<!-- v -->

### Action creators

```js
export function xMove(payload: Coordinates) {
  return {
    type: X_MOVE,
    payload,
  };
}

/*
dispatch({
  type: X_MOVE,
  payload: { x: 1, y: 2}
})
*/

dispatch(xMove({x: 1, y: 23}));
```

<!-- v -->

### Action creators

<p style="text-align:left">
  Кроме того, вы можете создать <b>связанный генератор экшена (bound action creator)</b>, который автоматически запускает отправку экшена
</p>

```js
const boundAddTodo = (text) => dispatch(addTodo(text));
const boundCompleteTodo = (index) => dispatch(completeTodo(index));
```

<!-- v -->

## Вопросы?

<!-- s -->

## react-redux

<!-- v -->

Используем redux в <u>три</u> шага
- устанавливаем пакет **react-redux**
- оборачиваем приложение в **`<Provider>`**
- подключаем компоненты с помощью **connect**

https://react-redux.js.org/introduction/quick-start

<!-- v -->

### react-redux - Provider

```ts
/**
* Makes the Redux store available to the connect() calls in the componet hierarchy below.
*/
export class Provider<A extends Action = AnyAction> extends Component<ProviderProps<A>> { }

export interface ProviderProps<A Extends Action = AnyAction> {
  /**
  * The single Redux store in your applicaton.
  */
  store: Store<any, A>;
  /**
  * Optional context to be used internally in react-redux. Use React.createContext()
  to create a context to be used
  * If this is used, generate own connect HOC by using connectAdvanced,
  supplying the same context provided to the 
  * Provider. Initial value doesn't matter,
  as it is overwritten with the internal state of Provider.
  */
  context?: Context<ReactReduxContextValue>
}
```

https://react-redux.js.org/api/provider

<!-- v -->

### react-redux - connect

```js
/*
mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object
*/

function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-redux/index.d.ts#L192  
https://react-redux.js.org/api/connect

<!-- v -->

## Код

<!-- v -->

## Вопросы?

<!-- s -->

## reselect

<!-- v -->

### Reselect

<p style="text-align:left">
  <b>Мемоизация</b> — сохранение результатов выполнения функций для предотвращения повторных вычислений. Это один из способов оптимизации, применяемый для увеличения скорости выполнения компьютерных программ.
</p>

<!-- v -->

**Когда нужна мемоизация?**
- Для **чистых** функций, т. е. функций, которые возвращают один и тот же результат  для одних и тех же входных данных
- Для **дорогостоящих** функций, т. е. функций, которые выполняют тяжелые вычисления.
- Для функций **с ограниченным и повторяющимся диапазоном входных данных**. При этом все возможные значения очень быстро попадают в кэш и функция вообще перестает работать.
- Для **рекурсивных** функций с повторяющимися входными значениями.

https://habr.com/ru/company/ruvds/blog/332384/  
https://underscorejs.org/docs/underscore.html#section-82

<!-- v -->

<p style="text-align:left">
  <b>Селектор</b> - функция (чистая), которая вытягивает из state определенные данные
</p>

```js
const selectNextState = state => state.nextMove;
```

<u>Имеет смысл выносить часть логики в селекторы, потому что:</u>

- селекторы, как чистые функции легко тестировать
- селекторы могут быть переиспользованы между компонентами
- на уровне селекторов можно включать дополнительные оптимизации (в т.ч. мемоизацию)

<!-- v -->

<p style="text-align:left">
  <b>Reselect</b> позволяет создавать селекторы, которые обладают следующими свойствами:
</p>

- Селекторы могут вычислять производные данные, позволяя Redux сохранять минимально возможное состояние.
- Селекторы эффективны. Селектор не пересчитывается, если не изменяется один из его аргументов.
- Селекторы являются составными. Их можно использовать как вход для других селекторов.

https://redux.js.org/recipes/computing-derived-data/

<!-- v -->

### Reselect - createSelector

```ts
/* one selector */
export function createSelector<S, R1, T> (
  selector: Selector<S, R1>,
  combiner: (res: R1) => T,
): OutputSelector<S, T, (res: R1) => T>;

export function createSelector<S, P, R1, T> (
  selector: ParametricSelector<S, P, R1>,
  combiner: (res: R1) => T,
): OutputParametricSelector<S, P, T, (res: R1) => T>;
```

<!-- v -->

```ts
/* two selectors */
export function createSelector<S, R1, R2, T> (
  selector: Selector<S, R1>,
  selector: Selector<S, R2>,
  combiner: (res1: R1, res2: R2) => T,
): OutputSelector<S, T, (res1: R1, res2: R2) => T>;

export function createSelector<S, P, R1, R2, T> (
  selector: ParametricSelector<S, P, R1>,
  selector: ParametricSelector<S, P, R2>,
  combiner: (res1: R1, res2: R2) => T,
): OutputParametricSelector<S, P, T, (res1: R1, res2: R2) => T>;
```

https://github.com/reduxjs/reselect#api

<!-- v -->

```js
const getFilledCellsCount = state => countFiledCells(state.gameField);

const getFilledCellsCountFactorial = createSelector(
  getFilledCellsCount, 
  count => getFactorial(count),
);
```

https://github.com/reduxjs/reselect#api

<!-- v -->

При этом можно использовать параметризованные селекторы: 

```ts
export const getOrderById = createSelector(
  getAllOrders, // { [key: number] : OrderDetails }
  // https://github.com/reduxjs/reselect/blob/v4.0.0/typescript_test/test.ts#L107
  (_state, orderId: number) => orderId,
  (ordersByid, orderId): Optional<OrderDetails> => ordersById[orderId],
);
```

**НО!** нужно помнить, что размер кэша у селекторов из createSelector === **1** 

https://github.com/reduxjs/reselect#api  
https://github.com/reduxjs/reselect#use-memoize-function-from-lodash-for-an-unbounded-cache

<!-- v -->

## Вопросы?

<!-- s -->

## Код

<!-- v -->

## Вопросы?

<!-- s -->

### Назовите, что можно тестировать в приложении на React + Redux ?

<!-- v -->

### Дополнительные материалы

1. https://www.youtube.com/watch?v=6Xwo5mVxDqI Reselect with Redux and React.js
2. https://github.com/Zveroboev/The-Complete-Redux-Book Перевод книги по Redux
3. https://egghead.io/courses/getting-started-with-redux Мини-курс от Дэна Абрамова
4. https://egghead.io/courses/building-react-applications-with-idiomatic-redux Продвинутое продолжение курса
5. https://habr.com/ru/post/439104/ Как написать свой редакс

<!-- v -->

### Опрос

https://otus.ru/polls/17006/

<!-- v -->

## Спасибо за внимание!
