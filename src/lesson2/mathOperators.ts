export type ScalarOperationType = (first: number, second: number) => number;
export type UnionOperationType = (first: number) => number;

export type MathOperationType = UnionOperationType | ScalarOperationType;

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

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial: UnionOperationType = (first: number): number => {
  return first ? first * factorial(first - 1) : 1;
};

export const sqr: UnionOperationType = (first: number): number => pow(first, 2);

export const unionOperators: { [key: string]: MathOperationType } = {
  "!": factorial,
  "**": sqr,
};

export const mathOperators: { [key: string]: MathOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": ZERO,
  "**": ZERO,
  "*": FIRST,
  "^": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
