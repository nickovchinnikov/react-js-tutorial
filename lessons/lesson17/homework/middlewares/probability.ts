/*

Курс React, урок 17: Middlewares

Домашнее задание 3
src/lesson17/homework/probability.ts

Напишите свой probablity middleware:
Если action имеет поле `meta.probability` то пусть он исполнится с этой вероятностью
probablity это число от 0 до 1

// Пример с 50% вероятностью
`dispatch({ type: 'ANALYTICS_CLICK', meta: { probability: 0.5 }})` 

+1 балл за свой probablity middleware и подключение в приложение
+1 балл за тесты

*/
import { MiddlewareAPI, Dispatch, Middleware } from "redux";

export const probability: Middleware = ({
  dispatch,
  getState,
}: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (action.meta && action.meta.probability) {
    if (action.meta.probability > 0.5) {
      return next(action);
    }
    throw new Error("Bad Luck Today!");
  } else {
    return next(action);
  }
};
