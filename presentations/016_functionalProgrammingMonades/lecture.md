---
title: Функциональное программирование и загадочные монады
description: Monades
---

# OTUS

## ReactJS

<!--v-->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!--v-->

### Что сегодня пройдём?

* Поработаем с композицией
* Пример приложения с композицией
* Сигнатуры типов
* Functors
* Monades

<!--v-->

### Вопросы?

<!--s-->

## Больше информации о композиции

<!--v-->

### Pointfree

Ваши функции никогда не должны упомянать о данных

```js

// not pointfree because we mention the data: word
const snakeCase = word => word.toLowerCase().replace(/\s+/ig, '_');

// pointfree
const snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

```

<!--v-->

### Example 2

Получить инициалы из полного имени

```js
// not pointfree because we mention the data: name
const initials = name => name
  .split(' ')
  .map(compose(toUpperCase, head))
  .join('. ');

// pointfree
// NOTE! we use 'intercalate' from the appendix instead of 'join'
const initials = compose(
  intercalate('. '),
  map(compose(toUpperCase, head)),
  split(' ')
);

initials('hunter stockton thompson'); // 'H. S. T'
```

<!--v-->

### Debugging

```js
// wrong - we end up giving angry an array and we partially applied map with who knows what.
const latin = compose(map, angry, reverse);

latin(['frog', 'eyes']); // error

// right - each function expects 1 argument.
const latin = compose(map(angry), reverse);

latin(['frog', 'eyes']); // ['EYES!', 'FROG!'])
```

<!--v-->

### Trace

```js
const dasherize = compose(
  intercalate('-'),
  toLower,
  split(' '),
  replace(/\s{2,}/ig, ' '),
);

dasherize('The world is a vampire');
// TypeError: Cannot read property 'apply' of undefined
```

<!--v-->

```js
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const dasherize = compose(
  intercalate('-'),
  toLower,
  trace('after split'),
  split(' '),
  replace(/\s{2,}/ig, ' '),
);

dasherize('The world is a vampire');
// after split [ 'The', 'world', 'is', 'a', 'vampire' ]
```

<!--v-->

### Fix

```js
const dasherize = compose(
  intercalate('-'),
  map(toLower),
  split(' '),
  replace(/\s{2,}/ig, ' '),
);

dasherize('The world is a vampire'); // 'the-world-is-a-vampire'
```

<!--v-->

### Вопросы?

<!--s-->

## Gentle Intro to Category Theory

<!--v-->

![Categories](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/images/cat_comp1.png)
![Morphism](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/images/cat_comp2.png)

<!--v-->

```js
// const g = x => x.length;
const g = prop("length")

// const f = x => x === 4;
const f = equals(4)

const isFourLetterWord = compose(f, g);

```

<!--v-->

## Неразличимый морфизм называется identity

```js

// Algebraic examples => x + 0 or x * 1
// Linear algebra example => A*I
const id = x => x;

// identity
compose(id, f) === compose(f, id) === f;
// true

```

<!--v-->

## Isomorphism example 

![Morphism example](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkrossovochkin.github.io%2Fimg%2F1_k-3eIAYBfxFITeTcXa-FSw.png&f=1&nofb=1)

<!--v-->

### Вопросы?

<!--s-->

## Композиция, снова

<!--v-->

### Есть два пути писать программный код

1. указывать компьютеру, как ему делать свою работу **императивный подход**
1. описать, что мы хотим в итоге получить **декларативный подход**

<!--v-->

### Пример

```js
// imperative
const makes = [];
for (let i = 0; i < cars.length; i += 1) {
  makes.push(cars[i].make);
}

// declarative
const makes = cars.map(car => car.make);

```

<!--v-->

### Пример

```js
// imperative
const authenticate = (form) => {
  const user = toUser(form);
  return logIn(user);
};

// declarative
const authenticate = compose(logIn, toUser);

```

<!--v-->

### Параллелизация из коробки

Используя **декларативный подход** не нужно думать о порядке исполнения.
Декларативный подход с _чистыми функциями_ может работать параллельно по умолчанию.

<!--v-->

### Полезные функции

```js
// Point-free syntax
const prop = curry((property, object) => object[property]);

```

<!--v-->

## Пример приложения

<!--s-->