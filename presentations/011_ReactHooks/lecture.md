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
