export type ScalarOperationType = (first: number, second: number) => number;

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

export const square: ScalarOperationType = (first: number): number =>
  first * first;

export const power: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const factorial = (base: number): number =>
  base != 1 ? base * factorial(base - 1) : 1;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": square,
  "^": power,
  "!": factorial,
};

export const mathPriorities: number[] = [1, 2, 3];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
  "**": ZERO,
  "^": FIRST,
  "!": ZERO,
};
