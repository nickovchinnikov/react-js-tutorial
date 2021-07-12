import { sin, cos, tan, fib } from "./mathFunctions";

enum MathOperator {
  ADD = "+",
  MINUS = "-",
  MULT = "*",
  DIV = "/",
  POWER = "^",
  SQUARE = "**",
  FACT = "!",
  SIN = "sin",
  COS = "cos",
  TAN = "tan",
  FIB = "fib",
}

export type ScalarOperationType = (first: number, second: number) => number;
export type UnarOperationType = (num: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const exp: ScalarOperationType = (
  first: number,
  second: number
): number => {
  if (!first && !second) {
    throw new Error("base and power cannot equal zero at once");
  }

  return first ** second;
};

export const square: UnarOperationType = (num: number): number => exp(num, 2);
export const fact: UnarOperationType = (num: number): number => {
  const MAX_INPUT = 170;

  if (num < 0) {
    throw new Error("cannot handle negative number");
  }

  if (num > MAX_INPUT) {
    throw new Error("too large number for factorial operation");
  }

  if (num === 0) return 1;

  const items: number = Array.from<number, number>(
    { length: num },
    (_, index) => index + 1
  ).reduce<number>((acc, cur) => acc * cur, 1);

  return items;
};

export const mathOperators: {
  [key: string]: ScalarOperationType | UnarOperationType;
} = {
  [MathOperator.ADD]: add,
  [MathOperator.MINUS]: minus,
  [MathOperator.MULT]: mul,
  [MathOperator.DIV]: div,
  [MathOperator.POWER]: exp,
  [MathOperator.SQUARE]: square,
  [MathOperator.FACT]: fact,
  [MathOperator.SIN]: sin,
  [MathOperator.COS]: cos,
  [MathOperator.TAN]: tan,
  [MathOperator.FIB]: fib,
};

export const priorities: Array<Array<string>> = [
  [MathOperator.SQUARE, MathOperator.FACT],
  [MathOperator.SIN, MathOperator.COS, MathOperator.TAN, MathOperator.FIB],
  [MathOperator.POWER],
  [MathOperator.MULT, MathOperator.DIV],
  [MathOperator.ADD, MathOperator.MINUS],
];

export const [unarOperators, trigOperators] = priorities;
