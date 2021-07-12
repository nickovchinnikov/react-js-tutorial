import {
  sin,
  cos,
  tan,
  fib,
  add,
  minus,
  mul,
  div,
  exp,
  square,
  fact,
  ScalarOperationType,
  UnarOperationType,
} from "./mathFunctions";

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
