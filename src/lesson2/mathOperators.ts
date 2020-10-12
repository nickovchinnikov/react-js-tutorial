export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperandType = (operand: number) => number;

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

export const toSquare: SingleOperandType = (operand: number): number =>
  operand * operand;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const singleOperandMathOperators: {
  [key: string]: SingleOperandType;
} = {
  "**": toSquare,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
  "**": FIRST,
};
