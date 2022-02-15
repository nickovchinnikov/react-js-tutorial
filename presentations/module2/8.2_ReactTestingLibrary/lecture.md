---
title: Обзор React testing library
description: TDD and React part 2
---

# OTUS

## ReactJS

<!-- v -->

### Меня хорошо слышно и видно?

![Не забыл?](https://www.meme-arsenal.com/memes/1bc94af1680d8ec9c2053b076d5f7990.jpg)

### Не забыл включить запись?

<!-- v -->

### Вопросы?

<!-- s -->

### TST — Total System Testing

<!-- v -->

### Как не сломать приложение после каждого исправления?

> После каждого исправления ошибки нужно прогнать весь набор контрольных примеров, по которым система проверялась раньше

Ф. Брукс, Мифический человеко-месяц 1975

Англоязычный журнал PC World поместил книгу Брукса на первое место в списке «Десять IT-книг, которые стыдно признать, что не читал»

<!-- v -->

### Изучаем доки Jest

[Matchers](https://jestjs.io/docs/using-matchers)

[Asynchronous](https://jestjs.io/docs/asynchronous)

[Setup-teardown](https://jestjs.io/docs/setup-teardown)

[Mock-functions](https://jestjs.io/docs/mock-functions)

<!-- v -->

### Вопросы?

<!-- s -->

## Полезные советы

<!-- v -->

### Тестирование ошибок

```js
it("When no product name, it throws error 400", async () => {
 let errorWeExceptFor = null;
 try {
   const result = await addNewProduct({ name: 'nest' });
 }
 catch (error) {
   expect(error.code).to.equal('InvalidInput');
   errorWeExceptFor = error;
 }
 expect(errorWeExceptFor).not.to.be.null;
 //if this assertion fails, the tests results/reports will only show
 //that some value is null, there won't be a word about a missing Exception
});
```

<!-- v -->

### Тестирование ошибок

```js
it.only("When no product name, it throws error 400", async () => {
 expect(addNewProduct)).to.eventually.throw(AppError).with.property('code', "InvalidInput");
});
```

<!-- v -->

### Вопросы?

<!-- s -->

### Что такое custom hook и как это тестировать?

* Создание пользовательских хуков позволяет вам перенести логику компонентов в функции, которые можно повторно использовать

* Пользовательский хук — это JavaScript-функция, имя которой начинается с «use», и которая может вызывать другие хуки

[custom hooks](https://ru.reactjs.org/docs/hooks-custom.html)

<!-- v -->

### Пример custom hook

```js
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

<!-- v -->

### Как тестировать custom hook?

```js
import { renderHook } from '@testing-library/react-hooks';

it('Render hook by default', () => {
  const { result } = renderHook(useUser);
  const [isOnline, isAdmin] = result.current;

  expect(isOnline).toBe(true);
  expect(isAdmin).toBe(false);

  // The same
  expect([isOnline, isAdmin]).toEqual([true, false]);
});
```

<!-- v -->

### Как тестировать -> act

```js
import { renderHook, act } from '@testing-library/react-hooks';

it('Render hook by default', () => {
  const { result } = renderHook(useUserOnline);
  const [isOnline, setOnline] = result.current;

  expect(isOnline).toEqual(false);

  act(() => setOnline(true));

  const [isOnline] = result.current;

  expect(isOnline).toEqual(true);
});
```

<!-- v -->

## useCustomHooks. Примеры

- [hook useGame](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useGame.ts)
- [hook useSettings](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useSettings.ts)
- [hook useStatus](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useStatus.ts)
- [hook useTime](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useTime.ts)
- [тесты](https://github.com/nickovchinnikov/minesweeper/blob/2ad019ff5be521f4e42f0793f69437f31a5a3555/src/modules/GameWithHooks/useGame.test.ts) для hook'а useGame

<!-- v -->

### Вопросы?

<!-- s -->

## Спасибо за внимание!
