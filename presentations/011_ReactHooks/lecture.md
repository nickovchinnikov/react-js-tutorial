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

<!--v-->

### Ссылки про hooks

1. https://reactjs.org/docs/hooks-intro.html
2. https://medium.com/swlh/built-in-react-hooks-uselayouteffect-and-usedebugvalue-d10efe24d8de
3. https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559
4. https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba
5. https://www.youtube.com/watch?v=dpw9EHDh2bM

<!--v-->

### React Hooks

1. Только в функциональных компонентах
2. Нельзя в классовых компонентах
3. React полагается на порядок определения - только верхнеуровневое объявление
4. Все начинаются с префикса ‘use’
5. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

<!--v-->

### State

<!--v-->

**useState**

1. Может быть любое количество
2. “array destructuring”
3. Обычно каждый стэйт - минимальная ячейка, независимая от других.
4. Перерисовка только когда state изменился (shallowCompare)

&darr;&darr;&darr;

<!--v-->

```ts
import React, { FC, useState } from "react";

interface PersonState {
  name: string;
  num: number;
}

export const SmartFunction: FC<{}> = () => {
  const [person, setPerson] = useState<PersonState>({name: "John", num: 3});

  return (
    <div>
      <button
        onClick={() => {
          setPerson({
            name: "Phil",
            num: 0,
          });
        }}
      />
      <p>{person.toString()}</p>
    </div>
  )
}
```

<!--v-->

**useState**

```js
export const StateComponent = () => {
  const [name, setName] = useState("");
  console.warn("re-render");
  return (
    <div>
      <button onClick={() => setName("")}>
        State Component with string Click!
      </button>
    </div>
  )
}

export const StateComponentWithObj = () => {
  const [name, setName] = useState({name: ""});
  console.warn("re-render");
  return (
    <div>
      <button onClick={() => setName({ name: ""})}>
        State Component with obj Click!!
      </button>
    </div>
  )
}
```

<!--v-->

**useEffect**

- Заменяет собой lifecycle методы
- Вызывается после каждого рендера
- Возвращаемая функция вызывается в момент изменения зависимостей, перед новым выполнение  эффекта. 
- Используется для:
  - Подписки на события
  - I/O вызовы
  - Сторонние вызовы, запуск анимации…

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

1. Вызов setState в useEffect(() => {*тут*, []) - Будет вызывать отдельную пере-рисовку! Если нужно - можно использовать useLayoutEffect о котором позднее
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

## Вопросы?

<!--s-->

**useContext**

1. Для использования контекста (легко несколько в одном компоненте)
2. [Context](https://reactjs.org/docs/context.html) - способ передать “пропсы” минуя несколько слоёв. Обычно для глобальных свойств
3. Популярно использовать для задания темы приложения. [пример](https://reactjs.org/docs/hooks-reference.html#usecontext)

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

**useReducer**

1. *const [state, dispatch] = useReducer(reducer, initValue, initFunction)*
2. *reducer = (prevState, action) => newState*
3. Вместо прямого задания нового state, вызывается dispatch. Всё что передано в dispatch -> action в reducer. 
4. Для инициализации может принимать третьим аргументов функцию, который преобразует initValue

<!--v-->

**useCallback**

Где (если есть) проблема? 

```js
export const StateComponent: FC<{}> = () => {
  const [name, setName] = useState("John");

  return (
    <div>
      <button onClick={() => setName("Phil")}>
        click in state component
      </button>
    </div>
  )
}
```

<!--v-->

**useCallback**

```js
const [name, setName] = useState("John");

const onChange = useCallback(() => setName("Phil"), []);

return (
  <div>
    <button onClick={onChange}>
      click in state component
    </button>
  </div>
)
```
1. Позволяет запоминать созданную функцию, во избежания пере-создание 
2. Массив зависимостей - при изменении каких свойств пере-создавать функцию. 
3. Пустой массив - создается один раз и **до** unmount

<!--v-->

**useCallback**

Что выведется после 2х нажатий на кнопку?

```js
const [name, setName] = useState("John");

const onChange = useCallback(() => setName(`${name} - Phil`), []);

return (
  <div>
    <button onClick={onChange}>
      {name}
    </button>
  </div>
)
```

<!--v-->

**useCallback**

Что выведется после 2х нажатий на кнопку?

```js
const [name, setName] = useState("John");

const onChange = useCallback(() => setName(`${name} - Phil`), [name]);

return (
  <div>
    <button onClick={onChange}>
      {name}
    </button>
  </div>
)
```

<!--v-->

**useCallback**

Что выведется после 2х нажатий на кнопку?

```js
const [name, setName] = useState("John");

const onChange = useCallback(() => setName(`${name} - Phil`), []);

return (
  <div>
    <button onClick={onChange}>
      {name}
    </button>
  </div>
)
```
&rarr; <span style="color: Crimson">John - Phil</span>

<!--v-->

**useCallback**

Что выведется после 2х нажатий на кнопку?

```js
const [name, setName] = useState("John");

const onChange = useCallback(() => setName(`${name} - Phil`), [name]);

return (
  <div>
    <button onClick={onChange}>
      {name}
    </button>
  </div>
)
```
&rarr; <span style="color: Crimson">John - Phil - Phil</span>

<!--v-->

**useMemo**

1. Почти то же самое, что и useCallback, только запоминается не функция я её возвращаемое значение
2. Используется если нужно произвести какие-либо “тяжёлые” вычисления

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

<!--v-->

**useRef**

1. Создает “коробку” которая держит указатель на объект.
2. Этот указатель доступен через .current
3. Наиболее распространенный вариант использования - создание указателя на элемент (пример из документации)
Эквивалент React.createRef
4. Но можно размещать любой объект, на изменение которого не требуется запускать перерисовку
5. [Пример](https://codesandbox.io/s/react-hooks-c3jf4?file=/src/RefComponent.tsx)

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

### Тестирование [ref](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)

1. Основной акцент на custom hooks, т.к. Из всех функциональных компонент можно сделать “презентационные”, с той лишь разницей что они зависят не от props а от возвращаемого значения от хука. 
2. [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library)
3. **renderHook** - имитация использования хука внутри компонента. Возвращает функции, позволяющие контролировать жизненный цикл и считывать результат 
```js
const { result } = renderHook(() => useAppState());
expect(result.current).toBe(true);
```
4. **act** - для выполнения любых действий

<!--v-->

**useCustomHooks**

1. Функция, к которой применяются те же правила, что и к встроенным в React. **Какие?**

<!--v-->

**useCustomHooks**

1. Функция, к которой применяются те же правила, что и к встроенным в React. **Какие?**
  - Начинается с префикса **use**
  - Используется только в пользовательских  hook функциях или функциональных компонентах
  - Вызов всегда происходит на верхнем уровне, без условий, циклов и т.п.
2. Пример в проекте. Функция которая отслеживает состояние фокуса на окне. 


<!--v-->

### React Fiber

1. Материал ***
2. Представленная в 16 версии React новый подход к работе с virtualDOM
3. [Habr](https://habr.com/ru/post/444276/)
4. [youtube](https://youtu.be/ZCuYPiUIONs)
5. [dive deeper](https://blog.logrocket.com/deep-dive-into-react-fiber-internals/)

<!--v-->

### Stack & event queue

<img src="data:image/png;base64, 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
FZuY7Y6sRLfmn7RAm7xaWy650zrWlrc0YsWu14tr/ilswkqoNKXOsLr17XRKpDX/
dCvryd2k9Cjt7khVzXHCBI1NdJ9tbBOp3GyxBgkA47EGy09m3Wvrr/e1+78I8XAj
JLrZPfrwjW6DV1tpIyR+DyMkF+La9YexlrWlt+M3SRo/3ae47HPoql8tQiKORNqB
DrF2VzL/ZGyP2OOXRoyvn8+6BvXVAYuVlrVfj7Xrh1zP2iMZR/S60sATyTpnfdSv
d+4vDrjUwUJ70L52JWQyFjB3+XecPQ1P+coItf712v6cuYWTRNwdC21/YKydH/h6
GjTzBAo1+bRPzWveoO6Vk27r/jLz1+2WhfbQWFsCZYaCkndtytocWmPhZSxvqIOs
2KJt/9Lpl/cZCyi30B4Wa0uw5SQ3FpBdQs1lR7iM7gKUNWCVtWebFP2VkK+rH4nb
Rpa1WRkkaxfcLcQXahhR5wgLhCniqoZVRdiWIXypv/S/orH+5MC3Fto9ZO1rMv+q
gBtLssi4AkFWXy+ztvRZ4tlTGkRN//qestLi4yvn0eg+rG0z//qT+VfFQ5lxJaxV
3ku0Kfc3Ye0qfAupCnMta9fsgs38a4UTKj02888LiuLMZ44gilUqiUzr49oypLpf
Lp2LMmt7ly3khU1NyUooVXnqhpLkhJ6rHIlaiTOdG47SuxInWNzH2kSCtjufuXJb
Vbf82NZm/om/X//qRVnV47j6q4Z2ycqhZEqlWSuH0fTISRVuqP6wkiSIcPSm6jNC
raQ5TrjU1iYalWolN3skqgoL63//rwfl36v6JbD0vnZ3vny745B06VaE0pDbXUaq
eW7970UPyr9W9Utg6X3twV5G9m9htGueG6lm7WXny4RBuzFrDzb4N6y4tpq1J5Nn
Q/diqbK23tceOrR7F9e+ZeafwNqT7hfO2ka/FtqWtQvW7nqxrF0zEsvar8DaS8va
1ZFY1n4F1p5Y1q6OxLK2Ze2qTaj0ytC2rN0X1ra+ds1IhsTa9YfRsnbVJlTqy5SN
OBJpBzrE2h3K/BsMa9fbhEqmk8otGeoOE+2NWFs1ku7YpLwwmqteaKq2OJcy/3oE
bXPWvmyX0iJgxgXToyQ1pt3mbT7OnU7bdGuBE9qtvU3alFHg5gsCBmQ+IyixLUEQ
OPQd/GMS3eq4AV1vkHaELkNk7UC2CbWEw2zCrMcSOJ3cmB6tyezMDJvZVlACjcLA
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
Q20ykhO7hRRzUskOFxq6pVsR2rK2VDbLzbX317QrjVnbqbOJadq9zrCYLyEqkW8A
UCohyNrKkaiVVG5FUO9OO5xobKLZndvYROtrP/beSHCPr729pmW5ja9dySExcwnv
4Gub5pBoFyG+kEOiGklLm5B7+NpS1VPX/Fsa+xD1zVpT/qAjJOJIpB3oUFz7NhGS
dlM2t2DtBqWe3Vtzvo1r14xkSHHtuiHfeR2SyqUhDaZMNvGmpmndVsOPsbOR1ZF0
ibU1I+nobOQFwCEPL/l/MfDBZi55YCVvzm5muAbalrXFhpa178faOOmypJMvGDlZ
UE98iVsYtGkgm0ezaaTvamhb1hYbWta+G2svVkkUHWOcROd3i+2TwxG3HPAuseUy
PmZ3iC0X6+P+EJ1p/l97aFvWFhta1r4Ta2OmVHTA28Ym+2gf0xsRUoDyIYpWgPl9
PDlEKW7ebDC7ah/FaxBaLmBiWbtmJJa178Tayywt9QC/4HaglETxhKawokOyQbDT
VNdVlB6Quektw9dA27K22PClWLtLz7JZApAxPype07wSmhiI99TQNzHP3Y5XNGEb
M2OhbW99bZv593qZfxqw4f027OawfQHt42aSQxtdayxA6ZsjTYh9fISkO0/buknm
n/ETyHQ4uUnm342eQOYWhcxnviB7Yl3guTVScLcIyZLdHIbEzO4xK0EbWRtKvMJF
GqLjGvk8bjkh2eK5kRqb0OJ4IRFEyZQ6w7qhpFLdTZbwuZHKY6XuBqwtjFKzO7IS
Ag6JSuUFm6jgdQebaDP/1EJe3Ds97XdJ2RoRjTjG9RlWMrTx5jCA8xHfwcVl8lBf
+3Lemf7JthrD6p5sGyillk/7LWX+GT9buDlOWE2oaXlzm2gfiWp+GXkHXxuuDlfx
MVpvzhFSN0ZIzhzaAOYVXFgeVnEUbTa4+A5bbydZPdrXrrcJlXpxK0JnntF+7/So
buWQxGca116scN2GBLyTJOXQxlsnlzTcndIlpRaT9fG4BhcmsXHt6khshIQ27Exc
e4K3jeGSlXQ1y3hN59qzm2wmdMHKyZquZJmvRsy3tof2syIkYrd+QNvGta9i7WV2
ExlbYlhk4yVLKlmIN5ldUyxr14zEsvY9M/+Km8Mq94/Vb277OZa1qyOxrG2fQFa1
CZVeGdqWta9l7UcVy9o1I7GsbVm7ahMqvTK0LWtb1jY4An2EtmVty9oGR6CP0O4d
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">

<!--v-->

### React Fiber

1. Стандарт плавности - 60fps = 16ms на отрисовку следующего frame
2. **Reconciliation** - создание нового дерева, сравнение с предыдущим и определение требуемых обновлений может занять гораздо больше времени
3. **Fiber** - подход в реализации React reconсilation который позволяет приостанавливать и сохранять текущий stack-call, и проверять event queue
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

<!--v-->

### Спасибо за внимание!

<img src="data:image/png;base64, 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
m70J8Ifl/wNtqpdqGnFGCwAAAABJRU5ErkJggg==">
