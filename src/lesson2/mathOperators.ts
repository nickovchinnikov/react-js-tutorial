export type ScalarOperationType = (first: number, second: number) => number;
export type NumberOperationType = (argument: number) => number;

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

export const power: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const square: NumberOperationType = (
  argument: number
): number => power(argument, 2);

export const mathOperators: { [key: string]: ScalarOperationType | NumberOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": power,
  "**": square,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": ZERO,
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "+": SECOND,
  "-": SECOND,
};
