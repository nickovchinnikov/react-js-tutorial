export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (first, second): number => first * second;

export const div: ScalarOperationType = (first, second): number => first / second;

export const add: ScalarOperationType = (first, second): number => first + second;

export const minus: ScalarOperationType = (first, second): number => first - second;

export const pow: ScalarOperationType = (first, second) => Math.pow(first, second);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": pow
};

export const mathPriorities: Array<number> = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "**": FIRST,
  "+": SECOND,
  "-": SECOND,
};
