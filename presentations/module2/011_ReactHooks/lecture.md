---
title: React hooks
description: React
---

# OTUS

## ReactJS

<!--v-->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!--v-->

### React hooks

<!--v-->

### О вебинаре

- Hooks => State + Lifecycle
- Обзор React Fiber

<!--s-->

### React Hooks

1. Только в функциональных компонентах
2. Нельзя в классовых компонентах
3. Все начинаются с префикса "use"
4. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

<!--v-->

### State

<!--v-->

**useState**

* В компоненте может быть несколько useState
* "array destructuring"
* Перерисовка только когда state изменился (shallowCompare)

&darr;&darr;&darr;

<!--v-->

```ts
import React, { FC, useState } from "react";

export const SmartFunction: FC<{}> = () => {
  const [name, setName] = useState("John");

  return (
    <div>
      <button
        onClick={() => setName("Phil")}
      />
      <p>{name}</p>
    </div>
  )
}
```

<!--s-->

### useEffect == lifecycle

<!--v-->

**useEffect**

- Заменяет собой lifecycle методы
- Вызывается после каждого рендера
- Используется для:
  - Подписки на события
  - I/O вызовы
  - И прочие Side-Effects

&darr;&darr;&darr;

<!--v-->

```js
export const StateComponentWithLifeCycle = () => {
  const [name, setName] = useState("John");

  useEffect(() => {
    console.warn("didMount+didUpdate");
    return () => {
      console.warn("willUnmount");
    };
  }, [name]);

  console.warn("re-render StateComponentWithLifeCycle");
  
  return (
    <div>
      <button onClick={() => setName("Ivan")}>
        State Component with string Click!
      </button>
    </div>
  );
};
```

<!--v-->

**useEffect**

- Render
- Проверка - изменился ли какой-либо элемент из списка зависимостей
- Нет - ничего не делать
- Да 
  - Вызвать effect callback
  - Вызвать callback return

<!--v-->

**useEffect**

1. Вызов setState в useEffect(() => {*тут*, []) - будет вызывать отдельную пере-рисовку
2. Функция всегда синхронная. Если нужно асинхронное то:

```js
useEffect(() => {
  const asyncFunction = async () => {
    const result = await api.call();
    // process result
  }

  asyncFunction();
});
```

<!--v-->

**useEffect**

```js
useEffect(() => {
  const listener = (ev) => {};
  window.addEventlistener("focus", listener);
  return () => {
    window.removeEventListener("focus", listener);
  }
})
```

<!--v-->

### useContext

<!--v-->

**useContext**

1. Для использования контекста (легко несколько в одном компоненте)
2. [Context](https://reactjs.org/docs/context.html) - способ передать “пропсы” минуя несколько слоёв. Обычно для глобальных свойств
3. Пример - задание темы приложения. [пример](https://reactjs.org/docs/hooks-reference.html#usecontext)

&darr;&darr;&darr;

<!--v-->

```js
// some another file
const DeepInnerComponent = () => {
  const { name } = React.useContext(SettingsContext);
  return <h3>{name}</h3>
};
// app.tsx
// defaultValue используется только когда не установили Provider
const appName = "MyAppName";
const SettingsContext = React.createContext({
  name: appName
});

export default function App() {
  const [name, setName] = React.useState(appName);
  return (
    <SettingsContext.Provider value={{ name }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see magic happen!</h2>
        <input onChange={(ev) => setName(ev.currentTarget.value)} value={name} />
        <DeepInnerComponent />
      </div>
    </SettingsContext.Provider>
  )
}
```

<!--v-->

## Вопросы?

<!--s-->

## Additional hooks

<!--v-->

Где (если есть) проблема? 

```js
import React, { useState, useCallback } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const incrementOtherCounter = () => {
    setCount2(count2 + 1)
  }
  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}
```

<!--v-->

**useCallback**

1. Позволяет запоминать созданную функцию, во избежания пере-создание 
2. Массив зависимостей - при изменении каких свойств пере-создавать функцию

<!--v-->

JS и сравнение функций

```js
function factory() {
  return (a, b) => a * b;
}

const function1 = factory();
const function2 = factory();

function1(1, 2); // => 2
function2(1, 2); // => 2

function1 === function2; // => false
function1 === function1; // => true
```

<!--v-->

**useCallback**

```js
const increment = useCallback(() => {
  setCount(count + 1)
}, [count])

const decrement = useCallback(() => {
  setCount(count - 1)
}, [count])

const incrementOtherCounter = useCallback(() => {
  setCount2(count2 + 1)
}, [count2])
```

<!--v-->

**useCallback**

Когда нам не нужен useCallback

```js
import React, { useCallback } from 'react';

function Component() {
  // Каждый раз все равно создается новая функция...
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);

  return <ButtonWrapper onClick={handleClick} />;
}
```

<!--v-->

**useMemo**

1. Почти то же самое, что и useCallback, только запоминается не функция я её возвращаемое значение
2. Используется если нужно произвести какие-либо “тяжёлые” вычисления

```js
const memoizedValue = useMemo(() => 
  computeExpensiveValue(a, b), [a, b]);
```

<!--v-->

**useRef**

Эквивалент React.createRef

* Создает “коробку” которая держит указатель на объект.
* Этот указатель доступен через .current
* Наиболее распространенный вариант использования - создание указателя на элемент [пример](https://reactjs.org/docs/hooks-reference.html#useref)
* Но можно размещать любой объект, на изменение которого не требуется запускать перерисовку

&darr;&darr;&darr;

<!--v-->

```js
function TextInputWithFocusButon() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // 'current' points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

<!--v-->

**useLayoutEffect**

1. То же самое что и useEffect
2. Но, позволяет производить изменения Синхронно 
3. Блокирует визуальные обновления

<!--v-->

**useDebugValue**

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

**useReducer**

1. *const [state, dispatch] = useReducer(reducer, initValue, initFunction)*
2. *reducer = (prevState, action) => newState*
3. Вместо прямого задания нового state, вызывается dispatch. Всё что передано в dispatch -> action в reducer. 
4. Для инициализации может принимать третьим аргументов функцию, который преобразует initValue

[ref](https://reactjs.org/docs/hooks-reference.html#usereducer)

<!--v-->

**useCustomHooks**

1. Функция, к которой применяются те же правила, что и к встроенным в React. **Какие?**
  - Начинается с префикса **use**
  - Используется только в пользовательских hook функциях или функциональных компонентах
  - Вызов всегда происходит на верхнем уровне, без условий, циклов и т.п.
2. Пример в проекте. Функция которая отслеживает состояние фокуса

<!--v-->

## Вопросы?

<!--s-->

### Тестирование

<!--v-->

* [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library)
* **renderHook** - имитация использования хука внутри компонента. Возвращает функции, позволяющие контролировать жизненный цикл и считывать результат

```js
const { result } = renderHook(() => useAppState());
expect(result.current).toBe(true);
```
* **act** - для выполнения любых действий

[ref](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)

<!--s-->

### React Fiber

<!--v-->

### React Fiber

1. Материал ***
2. Представленная в 16 версии React новый подход к работе с virtualDOM
3. [Habr](https://habr.com/ru/post/444276/)
4. [youtube](https://youtu.be/ZCuYPiUIONs)
5. [dive deeper](https://blog.logrocket.com/deep-dive-into-react-fiber-internals/)

<!--v-->

### Stack & event queue

![event queue diagram](images/event-queue-diagram.png)

<!--v-->

### React Fiber

1. Стандарт плавности - 60fps = 16ms на отрисовку следующего frame
2. **Reconciliation** - создание нового дерева, сравнение с предыдущим и определение требуемых обновлений может занять гораздо больше времени
3. **Fiber** - подход в реализации React reconсilation который позволяет приостанавливать и сохранять текущий stack-call, и проверять event queue

<!--v-->

4. Ставит в приоритет запросы по анимации
5. Тяжёлые вычисления стали прерываемыми, не блокирую UI

<!--v-->

**requestAnimationFrame VS requestIdleCallback vs setTimeout**

```js
for (let i = 0; i < 1000; i++) {
  requestIdleCallback(() => console.log("idle"));
  requestAnimationFrame(() => console.log("animation"));
  setTimeout(() => console.log("timeout"), 0);
}
```

(1000) animate  
(1000) timeout  
(1000) idle

<!--v-->

## Вопросы?

<!--s-->

### Ссылки про hooks

1. https://reactjs.org/docs/hooks-intro.html
2. https://medium.com/swlh/built-in-react-hooks-uselayouteffect-and-usedebugvalue-d10efe24d8de
3. https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559
4. https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba
5. https://www.youtube.com/watch?v=dpw9EHDh2bM

<!--v-->

### Спасибо за внимание!
