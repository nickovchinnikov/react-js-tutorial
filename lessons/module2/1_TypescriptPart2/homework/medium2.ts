// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import React from "react";
type FIXME<T> = T extends infer I ? I : never;
// Hint: infer
export const getDefaultProps = <T,>(
  component: React.ComponentType<T>
): FIXME<T> => {
  return component.defaultProps;
};