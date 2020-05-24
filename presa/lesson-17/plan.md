# Занятие "Redux middlewares and side effects"

## Вступление

## Постановка проблемы

### Придумываем как вызвать асихнронный запрос в Redux

### Передача dispatch в функцию

## Redux thunk

### Теория

### Практика redux thunk

```typescript
dispatch({ type: "LOADING" });

return getTodos()
    .then(data => dispatch({ type: "SUCCESS", data }))
    .catch(error => dispatch({ type: "ERROR", error }));
```

## Концепция middleware

## Как работает middleware в Redux

### Middleware как место для сайд эффектов

## Юзкейсы

## Практика analytics middleware
  console.group("action");
  console.log("before", getState());
  console.log("action", action);

  const resultAction = next(action);

  console.log("after", getState());
  console.groupEnd();

  return resultAction;

## Ducks

## Материалы

Middlewares are awesome / Никита Мостовой (HeadHunter) - https://youtu.be/tV76RapGubo
Redux thunk docs - https://github.com/reduxjs/redux-thunk
https://daveceddia.com/what-is-a-thunk/
https://redux.js.org/advanced/middleware
https://redux.js.org/advanced/async-actions
https://redux.js.org/advanced/async-flow