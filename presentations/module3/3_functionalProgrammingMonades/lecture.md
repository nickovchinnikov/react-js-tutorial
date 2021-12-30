[//]: # (TODO: Is this actual?)
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

## Gentle Intro to the Category Theory

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
## !Проходили на прошлом уроке!

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
## Functors
### Control flow, error handling, asynchronous actions, state and side-effects

<!--v-->

### Container

We will use __Container.of__ instean of __new__

```js
class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}
```

<!--v-->

### What do we have?

```js
Container.of(3);
// Container(3)

Container.of('hotdogs');
// Container("hotdogs")

Container.of(Container.of({ name: 'yoda' }));
// Container(Container({ name: 'yoda' }))
```

<!--v-->

### Давайте определим некоторые вещи

1. __Container__ - это объект с одним свойством
1. __$value__ - не может быть значением определенного типа
1. Данные, которые попали в __Container__ остаются там. Мы можем получить данные, используя __$value__, но мы так делать не будем 

<!--v-->

### Functor

```js
// (a -> b) -> Container a -> Container b
Container.prototype.map = function (f) {
  return Container.of(f(this.$value));
};
```

<!--v-->

### Example

```js
Container.of(2).map(two => two + 2); 
// Container(4)

Container.of('flamethrowers').map(s => s.toUpperCase()); 
// Container('FLAMETHROWERS')

Container.of('bombs').map(append(' away')).map(prop('length')); 
// Container(10)
```

<!--v-->

### Functor

* Позволяет манипулировать с данными внутри через __map__
* Данные внутри контейнера можно менять безопасным путём
* Математическая магия продолжает работать
* Можно использовать в __compose__ (morphism)
* __Container__ <- самый простой пример. Это __Identity__ Functor

<!--v-->

### Maybe

```js
class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  constructor(x) {
    this.$value = x;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
  }
}
```

<!--v-->

### Example

```js
Maybe.of('Malkovich Malkovich').map(match(/a/ig));
// Just(True)

Maybe.of(null).map(match(/a/ig));
// Nothing

Maybe.of({ name: 'Boris' }).map(prop('age')).map(add(10));
// Nothing

Maybe.of({ name: 'Dinah', age: 14 }).map(prop('age')).map(add(10));
// Just(24)
```

<!--v-->

### Map

```js
// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((f, anyFunctor) => anyFunctor.map(f));
```

<!--v-->

### Example

```js

// safeHead :: [a] -> Maybe(a)
const safeHead = xs => Maybe.of(xs[0]);

// streetName :: Object -> Maybe String
const streetName = compose(map(prop('street')), safeHead, prop('addresses'));

streetName({ addresses: [] });
// Nothing

streetName({ addresses: [{ street: 'Shady Ln.', number: 4201 }] });
// Just('Shady Ln.')

```

<!--v-->

### Nothing is a signal value

```js

// withdraw :: Number -> Account -> Maybe(Account)
const withdraw = curry((amount, { balance }) =>
  Maybe.of(balance >= amount ? { balance: balance - amount } : null));

// This function is hypothetical, not implemented here... nor anywhere else.
// updateLedger :: Account -> Account
const updateLedger = account => account;

// remainingBalance :: Account -> String
const remainingBalance = ({ balance }) => `Your balance is $${balance}`;

// finishTransaction :: Account -> String
const finishTransaction = compose(remainingBalance, updateLedger);

// getTwenty :: Account -> Maybe(String)
const getTwenty = compose(map(finishTransaction), withdraw(20));

getTwenty({ balance: 200.00 }); 
// Just('Your balance is $180')
getTwenty({ balance: 10.00 });
// Nothing

```

<!--v-->

### Releasing the Value

```js
// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }

  return f(m.$value);
});

// getTwenty :: Account -> String
const getTwenty = compose(maybe('You\'re broke!', finishTransaction), withdraw(20));

getTwenty({ balance: 200.00 }); 
// 'Your balance is $180.00'

getTwenty({ balance: 10.00 }); 
// 'You\'re broke!'

```

<!--v-->

__maybe__ можно сравнить с __if/else__

Часто можно увидеть типы как __Some(x) / None__ or __Just(x) / Nothing__ вместо __Maybe__ который делает проверку на значение __null__

<!--v-->

### Pure Error Handling

```js
class Either {
  static of(x) {
    return new Right(x);
  }

  constructor(x) {
    this.$value = x;
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this.$value));
  }

  inspect() {
    return `Right(${inspect(this.$value)})`;
  }
}

```

<!--v-->

```js
class Left extends Either {
  map(f) {
    return this;
  }

  inspect() {
    return `Left(${inspect(this.$value)})`;
  }
}

const left = x => new Left(x);
```

<!--v-->

```js
Either.of('rain').map(str => `b${str}`); 
// Right('brain')

left('rain').map(str => `It's gonna ${str}, better bring your umbrella!`); 
// Left('rain')

Either.of({ host: 'localhost', port: 80 }).map(prop('host'));
// Right('localhost')

left('rolls eyes...').map(prop('host'));
// Left('rolls eyes...')
```

__Left__ <- игнорирует обращения __map__
__Right__ <- работает как __Container__ (aka *Identity*)


<!--v-->

## Pure error handling

```js
const moment = require('moment');

// getAge :: Date -> User -> Either(String, Number)
const getAge = curry((now, user) => {
  const birthDate = moment(user.birthDate, 'YYYY-MM-DD');

  return birthDate.isValid()
    ? Either.of(now.diff(birthDate, 'years'))
    : left('Birth date could not be parsed');
});

getAge(moment(), { birthDate: '2005-12-12' });
// Right(9)

getAge(moment(), { birthDate: 'July 4, 2001' });
// Left('Birth date could not be parsed')
```

Теперь мы можем видеть причину, почему программа прекратила своё выполнение

<!--v-->

```js
// fortune :: Number -> String
const fortune = compose(append('If you survive, you will be '), toString, add(1));

// zoltar :: User -> Either(String, _)
const zoltar = compose(map(console.log), map(fortune), getAge(moment()));

zoltar({ birthDate: '2005-12-12' });
// 'If you survive, you will be 10'
// Right(undefined)

zoltar({ birthDate: 'balloons!' });
// Left('Birth date could not be parsed')
```

<!--v-->
## Either

```js
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = curry((f, g, e) => {
  let result;

  switch (e.constructor) {
    case Left:
      result = f(e.$value);
      break;

    case Right:
      result = g(e.$value);
      break;

    // No Default
  }

  return result;
});
```

<!--v-->

```js
// zoltar :: User -> _
const zoltar = compose(console.log, either(id, fortune), getAge(moment()));

zoltar({ birthDate: '2005-12-12' });
// 'If you survive, you will be 10'
// undefined

zoltar({ birthDate: 'balloons!' });
// 'Birth date could not be parsed'
// undefined
```

<!--v-->

### Вопросы?

<!--s-->

## Side-effects

<!--v-->

### Pure function, но как использовать?

```js
// getFromStorage :: String -> (_ -> String)
const getFromStorage = key => () => localStorage[key];
```

<!--v-->

## IO

```js
class IO {
  static of(x) {
    return new IO(() => x);
  }

  constructor(fn) {
    this.$value = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.$value));
  }

  inspect() {
    return `IO(${inspect(this.$value)})`;
  }
}
```

<!--v-->

### Example

```js
// ioWindow :: IO Window
const ioWindow = new IO(() => window);

ioWindow.map(win => win.innerWidth);
// IO(1430)

ioWindow
  .map(prop('location'))
  .map(prop('href'))
  .map(split('/'));
// IO(['http:', '', 'localhost:8000', 'blog', 'posts'])


// $ :: String -> IO [DOM]
const $ = selector => new IO(() => document.querySelectorAll(selector));

$('#myDiv').map(head).map(div => div.innerHTML);
// IO('I am some inner html')
```

<!--v-->

```js
// url :: IO String
const url = new IO(() => window.location.href);

// toPairs :: String -> [[String]]
const toPairs = compose(map(split('=')), split('&'));

// params :: String -> [[String]]
const params = compose(toPairs, last, split('?'));

// findParam :: String -> IO Maybe [String]
const findParam = key => map(compose(Maybe.of, find(compose(eq(key), head)), params), url);

// -- Impure calling code ----------------------------------------------

// run it by calling $value()!
findParam('searchTerm').$value();
// Just(['searchTerm', 'wafflehouse'])
```

<!--v-->

### Мы никогда не будем использовать $value за пределами функциональной композиции

```js
class IO {
  constructor(io) {
    this.unsafePerformIO = io;
  }

  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO));
  }
}
```
<!--v-->

### Asynchronous Tasks

[Folktale](https://folktale.origamitower.com/)

```js
// -- Node readFile example ------------------------------------------

const fs = require('fs');

// readFile :: String -> Task Error String
const readFile = filename => new Task((reject, result) => {
  fs.readFile(filename, (err, data) => (err ? reject(err) : result(data)));
});

readFile('metamorphosis').map(split('\n')).map(head);
// Task('One morning, as Gregor Samsa was waking up from anxious dreams, he discovered that
// in bed he had been changed into a monstrous verminous bug.')

// -- jQuery getJSON example -----------------------------------------

// getJSON :: String -> {} -> Task Error JSON
const getJSON = curry((url, params) => new Task((reject, result) => {
  $.getJSON(url, params, result).fail(reject);
}));
```

<!--v-->

### Result

```js
getJSON('/video', { id: 10 }).map(prop('title'));
// Task('Family Matters ep 15')

// -- Default Minimal Context ----------------------------------------

// We can put normal, non futuristic values inside as well
Task.of(3).map(three => three + 1);
// Task(4)
```

<!--v-->

### Вопросы?

<!--s-->

### Monades

<!--v-->

pointed функтор это функтор с методом _of_

```js
const fs = require('fs');

// readFile :: String -> IO String
const readFile = filename => new IO(() => fs.readFileSync(filename, 'utf-8'));

// print :: String -> IO String
const print = x => new IO(() => {
  console.log(x);
  return x;
});

// cat :: String -> IO (IO String)
const cat = compose(map(print), readFile);

cat('.git/config');
// IO(IO('[core]\nrepositoryformatversion = 0\n'))
```

<!--v-->

## map(map(head))

```js
// cat :: String -> IO (IO String)
const cat = compose(map(print), readFile);

// catFirstChar :: String -> IO (IO String)
const catFirstChar = compose(map(map(head)), cat);

catFirstChar('.git/config');
// IO(IO('['))
```

<!--v-->

### Ситуация ухудшается

```js
// safeProp :: Key -> {Key: a} -> Maybe a
const safeProp = curry((x, obj) => Maybe.of(obj[x]));

// safeHead :: [a] -> Maybe a
const safeHead = safeProp(0);

// firstAddressStreet :: User -> Maybe (Maybe (Maybe Street))
const firstAddressStreet = compose(
  map(map(safeProp('street'))),
  map(safeHead),
  safeProp('addresses'),
);

firstAddressStreet({
  addresses: [{ street: { name: 'Mulburry', number: 8402 }, postcode: 'WC2N' }],
});
// Maybe(Maybe(Maybe({name: 'Mulburry', number: 8402})))
```

<!--v-->

### join

```js
const mmo = Maybe.of(Maybe.of('nunchucks'));
// Maybe(Maybe('nunchucks'))

mmo.join();
// Maybe('nunchucks')

const ioio = IO.of(IO.of('pizza'));
// IO(IO('pizza'))

ioio.join();
// IO('pizza')

const ttt = Task.of(Task.of(Task.of('sewers')));
// Task(Task(Task('sewers')));

ttt.join();
// Task(Task('sewers'))
```

<!--v-->

### Монады — это pointed функторы, которые могут быть выровнены

```js
Maybe.prototype.join = function join() {
  return this.isNothing() ? Maybe.of(null) : this.$value;
};
```

<!--v-->

### Example

```js
// join :: Monad m => m (m a) -> m a
const join = mma => mma.join();

// firstAddressStreet :: User -> Maybe Street
const firstAddressStreet = compose(
  join,
  map(safeProp('street')),
  join,
  map(safeHead),
  safeProp('addresses')
);

firstAddressStreet({
  addresses: [{ street: { name: 'Mulburry', number: 8402 }, postcode: 'WC2N' }],
});
// Maybe({name: 'Mulburry', number: 8402})
```

<!--v-->

### Вопросы?

<!--s-->

Дополнительные материалы:

Для дальнейшего изучения
[mostly-adequate-guide](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/)

Серьезный подход
[Теория категорий by Bartosz Milewski](https://www.youtube.com/playlist?list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_)
