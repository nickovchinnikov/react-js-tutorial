import { unaryMathOperators } from "./mathOperators";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isUnaryOperation = (item: string): boolean =>
  unaryMathOperators[item] !== undefined;
