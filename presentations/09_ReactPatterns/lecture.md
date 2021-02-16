---
title: React паттерны
description: React
---

# OTUS

## ReactJS

<!-- v -->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!-- v -->

### Вопросы?

<!-- v -->

### Кто этот парень?

1. Громов Фёдор
2. Открытие, Альфа, Leroy Merlin, Wildberries
3. Начал работать с React 3 года назад
4. Начинал изучать frontend с онлайн-курсов 

<!-- v -->

### React patterns #1

<!-- v -->

### О вебинаре

* Писать на React лаконичнее и быстрее
* [React Patterns](https://reactpatterns.com/)

<!-- v -->

1. function component;
2. destructuring props;
3. JSX spread attributes;
4. merge destructured props with other values;
5. conditional rendering;
6. children types;
7. array as children;
8. function as children;
9. render prop;
10. children pass-through;
11. proxy component;
12. style component.

<!-- v -->

### Functional component

```js
export const Cell: FC<CellProps> = ({ children, x, y, onClick }) => {
  const isFilled = Boolean(children);
  
  return (
    <CellItem
      isFilled={isFilled}
      onClick={() => !isFilled && onClick(x || 0, y || 0)}
    >
      {children}
    </CellItem>
  );
};
```

<!-- v -->

### Functional component

- Любая функция, возвращающая JSX
- PureComponent ~ React.memo
- React.memo только для props, PureComponent ещё и для state.
- Нельзя полагаться на React.memo - только производительность

[Полный обзор](https://www.robinwieruch.de/react-function-component)

<!-- v -->

### Destructuring props

- Паттерн позволяющий избегать излишнего имени props.

Объекты
```js
let person = { name: "chantastic" };
let { name } = person;
```
Массивы
```js
let things = ["one", "two", “3”];
let [first, second, ...restElement] = things;
```

<!-- v -->
### Default props

Паттерн, позволяющий задавать значения по умолчанию для props. 

Объекты
```js
let person = { name: "Ted" };
let { name = "" } = person;
```

Массивы
```js
let things = ["one", "two", "3"];
let [first = "", second = "2", ...restElement] = things;
```

<!-- v -->

### JSX spread attributes 

- Быстро пропустить от родителя к детям пропсы

```js
const RichComponent: FC<ManyProps> = ({ one, ...rest}) => {
  return (
    <div>
      <p>{one}</p>
      <PoorComponent {...rest}>
    </div>
  )
}
```
Проходит по всем ключам объекта, и передаётся свойства парами `<key>`:`<value>` из исходного объекта

<!-- v -->

### Опасность: props drilling [more](https://ru.reactjs.org/docs/lifting-state-up.html) [and even more](https://kentcdodds.com/blog/prop-drilling)

<span style="color:DarkRed">Component1</span> &rarr; <span style="color:FireBrick">Component2</span> &rarr; <span style="color:IndianRed">Component3</span> &rarr; <span style="color:LightCoral">Component4</span>

{...restProps} &rarr; {...restProps}  &rarr; {...restProps} &rarr; {...restProps}

- Объявляем state и его управление как можно ближе к месту его использования
- В случае совместного использования - ближайший родитель
- [код](https://codesandbox.io/s/react-patterns-5huin?file=/src/PropsDrilling.tsx)

<!-- v -->

### Merge destructuring props with other values

<span style="color:green">**&plus;**</span> Помогает при пробросе props ребёнку задавать default значения  
<span style="color:red">**&minus;**</span> Нужно всегда помнить о порядке! Что идёт позднее, переписывает предыдущие свойства  

<!-- v -->

### Conditional rendering

Что вернется?
1. true && "string"
2. true || "string"
3. false && "string"
4. false  || "string"
5. true ? "val1" : "val2"
6. false ? "val1" : "val2"

<!-- v -->

### Conditional rendering

Что вернется?
1. true && "string" &rarr; <span style="color:Crimson">string</span>
2. true || "string" &rarr; <span style="color:Crimson">true</span>
3. false && "string" &rarr; <span style="color:Crimson">false</span>
4. false  || "string" &rarr; <span style="color:Crimson">string</span>
5. true ? "val1" : "val2" &rarr; <span style="color:Crimson">val1</span>
6. false ? "val1" : "val2" &rarr; <span style="color:Crimson">val2</span>

<!-- v -->

### Conditional rendering

- Всё что находиться внутри <span style="color:red">{}</span> - парситься как обычный JS
- **IF**:{condition && `<span>`Rendered when `'truthy'` `</span>`;}
- **Unless**: {condition || `<span>`Rendered when `'falsy'` `</span>`;}
- **If-else**:
```js
{
    condition ? (
      <span>Rendered when 'truthy'</span>
    ) : (
      <span>Rendered when 'falsy'</span>
    );
}
```

<!-- v -->

### Children types

- Children - это такой же props, только передается как значение внутри тэга. 
- `<div>`**children**`</div>`
- В элемент можно передавать...что?
- В компонент можно передавать...что?

<!-- v -->

### Array as children

- Классика для создания любого вида списков
- Каждый из элементов - валиден для отрисовки

```js
export default function App() {
  return (
    <ul>
      {["first", "second"].map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function App() {
  return <ul>{[<li>first</li>, <li>second</li>]}</ul>
}
```

<!-- v -->

### Function as children

- Возможно передавать только в компонент
- Пример из жизни: https://final-form.org/docs/react-final-form/getting-started
- Очень полезно когда отрисовка зависит от данных

```ts 
interface IPops {
  children: () => string;
}

const GetFunction: FC<IProps> = ({ children }) => {
  return <div>{children()}</div>
}

export default function App() {
  return <GetFunction>{() => "some"}</GetFunction>;
}
```

<!-- v -->

### Render prop #1

Элемент
```ts
interface IProps2 {
  render: React.ReactNode;
}

const GetFunction2: FC<IProps2> = ({ render }) => {
  return <div>{render}</div>
};  

export default function App() {
  return (
    <div>
      <GetFunction2 render={<span>some - 2</span>} />
    </div>
  );
}
```

<!-- v -->

### Render prop #2

Функция
```ts
interface IProps {
  render: () => React.ReactNode;
}

const GetFunction2: FC<IProps> = ({ render }) => {
  return <div>{render()}</div>
};  

export default function App() {
  return (
    <div>
      <GetFunction2 render={() => <span>some - 2</span>} />
    </div>
  );
}
```

<!-- v -->

### Pass children [info](https://frontarm.com/james-k-nelson/passing-data-props-children/)

- При отрисовке ребёнка - как передать ему новые props? Например className? 

Можем ли сделать так?

```js
children.props.className = "bold text";
return <div>{children}</div>;
```

<!-- v -->

**React.cloneElement**  [doc](https://ru.reactjs.org/docs/react-api.html#cloneelement)

Меняем

```js
children.props.className = "bold text";
return <div>{children}</div>;
```

на

```js
const newEl = React.cloneElement(children, {className: "bold text"});
return <div>{newEl}</div>;
```

<!-- v -->

### More about children [doc](https://ru.reactjs.org/docs/react-api.html#reactchildren) [deepdive](https://mxstbr.blog/2017/02/react-children-deepdive/)


- Как итерироваться по детям? 
- Как удостовериться что передан всего один ребёнок?
- Как вычислить количество детей? 

(в условиях что у нас у children задан не один тип)

<!-- v -->

### More about children

- Как итерироваться по детям? &rarr; <span style="color:Crimson">React.children.map/forEach</span>
- Как удостовериться что передан всего один ребёнок? &rarr; <span style="color:Crimson">React.children.only</span>
- Как вычислить количество детей? &rarr; <span style="color:Crimson">React.children.count</span>

**(не полностью подходит в условиях TS, но полезно знать)** 

[про ключи](https://stackoverflow.com/questions/50303465/does-react-handle-keys-automatically-when-using-react-children-map)

<!-- v -->

### Proxy component

- Спасение от бесконечного повторения одних и тех же props
- Классический пример:
```js
const Button = props => <button type="button" {...props}> 
```

<!-- v -->

### Style component

- Создание компонента, который в качестве props принимает некоторое обозначение о том, как стилизовать компонент

```js
import classnames from "classnames";

const PrimaryBtn = props => <Btn {...props} primary />

const Btn = ({ className, primary, ...props }) => {
  <button>
    type="button"
    className={classnames("btn", primary && "btn-primary", className)}
    {...props}
  </button>
};
```

<!-- v -->

# Вопросы?

----

# Поищем паттерны!

<!-- v -->

### Ищем паттерны

```js
import React from "react";

const MyComponent = ({ isActive, text = "", red, ...restProps } = isActive && ({text} ));
const MyComponent1 = (props) => <MyComponent red {...props} />;
const Field = ({ children, ...restProps }) => ({children});

export class Example extends React.Component {
  render() {
    const { items, restProps, children } = this.props;

    if (!items) {
      return null;
    }
    
    return (
      <>
        {items.map((item) => (<MyComponent key={item} {...restProps}>{item}</MyComponent>))}
        <MyComponent1 />
        <Field>{({ input, meta }) => <input {...input} {...meta} />}</Field>
      </>
    );
  }
}
```

<!-- v -->  

# Вопросы?

<!-- v -->

## Спасибо за внимание!
