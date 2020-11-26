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

## Практика

<!--v-->

### Exercise 1

```js

const cars = [{
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}]

// isLastInStock :: [Car] -> Boolean
const isLastInStock = (cars) => {
  const lastCar = last(cars);
  return prop('in_stock', lastCar);
};

```

<!--v-->

### Solution

```js

// isLastInStock :: [Car] -> Boolean
const isLastInStock = compose(prop('in_stock'), last)

```

<!--v-->

### Exercise 2

```js

const cars = [{
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}]

// averageDollarValue :: [Car] -> Int
const averageDollarValue = (cars) => {
  const dollarValues = map(c => c.dollar_value, cars);
  return average(dollarValues);
};

```

<!--v-->

### Solution

```js

// averageDollarValue :: [Car] -> Int
const averageDollarValue = compose(average, map(prop("dollar_value")))

```

<!--v-->

### Exercise 3

```js

const cars = [{
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}]

// Hint, the `append` function may come in handy.
// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
  const sorted = sortBy(car => car.horsepower, cars);
  const fastest = last(sorted);
  return concat(fastest.name, ' is the fastest');
};

```

<!--v-->

### Solution

```js

// fastestCar :: [Car] -> String
const fastestCar = compose(
  append(' is the fastest'),
  prop('name'),
  last,
  sortBy(prop('horsepower')),
);

```
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

<!--v-->

## Refactoring

```js
// map's composition law
// compose(map(f), map(g)) === map(compose(f, g));

// original code
const mediaUrl = compose(prop('m'), prop('media'));
const mediaUrls = compose(map(mediaUrl), prop('items'));
const images = compose(map(img), mediaUrls);

```
<!--v-->

## Refactoring

```js
// map's composition law
// compose(map(f), map(g)) === map(compose(f, g));

const mediaUrl = compose(prop('m'), prop('media'));

const images = compose(map(img), map(mediaUrl), prop('items'));

```

<!--v-->

## Refactoring

```js
/*
compose(map(f), map(g)) === map(compose(f, g));
compose(map(img), map(mediaUrl)) === map(compose(img, mediaUrl));
*/

const mediaUrl = compose(prop('m'), prop('media'));

const images = compose(map(compose(img, mediaUrl)), prop('items'));

```
<!--v-->

### Вопросы?

<!--s-->

## Signatures

<!--v-->

### Hindley-Milner type signatures

a function from **String** to **String**

```js
// capitalize :: String -> String
const capitalize = s => toUpperCase(head(s)) + toLowerCase(tail(s));

capitalize('smurf'); // 'Smurf'
```

<!--v-->

### Помним, что такое каррирование!

```js
const f = (a, b) => a + b

// g :: a -> b -> c
const g = a => b => a + b
// OR
const g = curry(f)
```

<!--v-->

### Example

You could always just view the last type as the return value

```js

// strLength :: String -> Number
const strLength = s => s.length;

// join :: String -> [String] -> String
const join = curry((what, xs) => xs.join(what));

// match :: Regex -> String -> [String]
const match = curry((reg, s) => s.match(reg));

// replace :: Regex -> String -> String -> String
const replace = curry((reg, sub, s) => s.replace(reg, sub));

```

<!--v-->

### we are free to group the signature like so:

```js

// match :: Regex -> (String -> [String])
const match = curry((reg, s) => s.match(reg));

// match :: Regex -> (String -> [String])
// onHoliday :: String -> [String]
const onHoliday = match(/holiday/ig);

```

<!--v-->

We can give all the arguments at once if we choose so it's easier to just think of it as: replace takes a __Regex__, a __String__, another __String__ and returns you a __String__

```js

// replace :: Regex -> (String -> (String -> String))
const replace = curry((reg, sub, s) => s.replace(reg, sub));

```

<!--v-->

__a -> a__ means it has to be the same type, may be __String -> String__ or __Number -> Number__, but not __String -> Bool__.

```js

// id :: a -> a
const id = x => x;

// map :: (a -> b) -> [a] -> [b]
const map = curry((f, xs) => xs.map(f));
// f :: (a -> b)
// xs :: [a]
// return :: [b]

```

<!--v-->

```js

// head :: [a] -> a
const head = xs => xs[0];

// filter :: (a -> Bool) -> [a] -> [a]
const filter = curry((f, xs) => xs.filter(f));

// reduce :: ((b, a) -> b) -> b -> [a] -> b
const reduce = curry((f, x, xs) => xs.reduce(f, x));

```

<!--v-->

### Параметризованная типизация

```js

a -> any type

// head :: [a] -> a

// reverse :: [a] -> [a]

```

<!--v-->

### Find your function


[Hoogle](https://hoogle.haskell.org)


<!--v-->

## Free theorems

```js

// head :: [a] -> a
compose(f, head) === compose(head, map(f));

// filter :: (a -> Bool) -> [a] -> [a]
compose(map(f), filter(compose(p, f))) === compose(filter(p), map(f));

```

<!--v-->

## Constraints

__a__ must implement the __Ord__ interface

```js

// sort :: Ord a => [a] -> [a]

```

Here, we have two constraints: __Eq__ and __Show__

```js

// assertEqual :: (Eq a, Show a) => a -> a -> Assertion

```

<!--v-->

### Вопросы?

<!--s-->
