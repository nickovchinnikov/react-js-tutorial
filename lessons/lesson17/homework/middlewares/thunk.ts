/*

Курс React, урок 17: Middlewares

Домашнее задание 2
src/lesson17/homework/thunk.ts

Напишите свой thunk middleware и подключите в приложение

+1 балл за свой thunk middleware и подключение в приложение
+1 балл за тесты

*/
import { MiddlewareAPI, Dispatch, Middleware } from "redux";

export const thunk: Middleware = ({ dispatch, getState }: MiddlewareAPI) => (
  next: Dispatch
) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  return next(action);
};
