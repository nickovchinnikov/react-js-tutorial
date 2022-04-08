export type ScalarOperationType = (first: number, second: number) => number;

export const getValueFunctionMul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const getValueFunctionDiv: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const getValueFunctionAdd: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const getValueFunctionMinus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const getValueFunctionSquaring = (single: number): number => single ** 2;

export const getValueFunctionExponentiation: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const getValueFunctionFactorial = (single: number): number => {
  let res = 1;
  for (let i = 2; i <= single; i++) {
    res = res * i;
  }
  return res;
};

export const getValueFunctionFibonacci: ScalarOperationType = (
  first: number,
): number => Math.pow(first);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": getValueFunctionMul,
  "/": getValueFunctionDiv,
  "+": getValueFunctionAdd,
  "-": getValueFunctionMinus,
  "**": getValueFunctionSquaring,
  "^": getValueFunctionExponentiation,
  "!": getValueFunctionFactorial,
  "fib": getValueFunctionFibonacci,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "**": FIRST,
  "!": FIRST,
  "+": SECOND,
  "-": SECOND,
}