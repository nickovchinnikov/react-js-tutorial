---
title: Advanced React Hooks
description: Advanced React Hooks
---

# OTUS

## ReactJS

<!--v-->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!--v-->

## Advanced React Hooks

<!--v-->

## О вебинаре

- Дополнительные хуки - useReducer, useDebugValue, useCustomHook
- Еще раз про тестирование
- Пример хуков из учебного проекта


<!--v-->

## useReducer

```js
const [state, dispatch] = useReducer(reducer, initValue, initFunction);
reducer = (prevState, action) => newState;
```
1. Вместо прямого задания нового state, вызывается dispatch. Всё что передано в dispatch -> action в reducer
2. Для инициализации может принимать третьим аргументом функцию, который преобразует initValue

<!--v-->

## useReducer. Пример

```js
function todosReducer(state, action) {
  switch (action.type) {
    case "load":
      return {
        books: [],
        loading: true,
      };
    // ... остальные действия ...
    default:
      return state;
  }
}
```

<!--v-->

## useReducer. Пример

```js
function TodosList() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleLoadClick() {
    dispatch({ type: "load" });
  }

  // ...
}
```

<!--v-->

## useReducer. Упрощенная реализация

```js
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
```

<!--v-->

## useReducer. Примеры

1. Рассмотрим CounterReducer:
   - [пример](https://github.com/nickovchinnikov/react-js-tutorial/blob/ce3a3fe6fb565377beb6a06041e49531f47ceb78/lessons/module2/7_ReactHooks/CounterReducer.tsx) использования useReducer
   - [тестирование](https://github.com/nickovchinnikov/react-js-tutorial/blob/ce3a3fe6fb565377beb6a06041e49531f47ceb78/lessons/module2/7_ReactHooks/CounterReducer.test.tsx) reducer'а

2. Реализуем:
   - дополнительные action'ы для CounterReducer
   - и соответствующие тесты для reducer'а

<!--v-->

## Вопросы

<!--v-->

## useDebugValue

1. Добавляет некое строковое значение пользовательским Hooks, которое будет отображаться в react-devtools
2. Вторым аргументов (опционально) передается функция трансформации из объекта в строку. Вызов произойдет когда hook инспектируется

```js
const useCustomhook = () => {
  const [state, setState] = useState("name");
  useDebugValue(
    `custom hook, ${state}`,
    str => `${str}, ${new Date().toDateString()}`
  );
  return [state, setState];
};
```

<!--v-->

## useDebugValue. Пример
1. Рассмотрим hook [useMouseDown](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/components/hooks/useMouseDown.ts):
   - его реализацию
   - для чего используется
   - тесты
   - пример использования useDebugValue

<!--v-->

## useCustomHooks

Функция, к которой применяются те же правила, что и к встроенным в React. **Какие?**
- Начинается с префикса **use**
- Используется только в пользовательских hook функциях или функциональных компонентах
- Вызов всегда происходит на верхнем уровне, без условий, циклов и т.п.

<!--v-->

## useCustomHooks. Примеры
Более сложные примеры из проекта Minesweeper:
- [hook useGame](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useGame.ts)
- [hook useSettings](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useSettings.ts)
- [hook useStatus](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useStatus.ts)
- [hook useTime](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useTime.ts)
- [тесты](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useGame.test.ts) для hook'а useGame

<!--v-->

## Вопросы

<!--v-->

## Ссылка на опрос

<!--v-->

## Спасибо за внимание!
