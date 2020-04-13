export type BinaryOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (argument: number) => number;

export const mul: BinaryOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: BinaryOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: BinaryOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: BinaryOperationType = (
  first: number,
  second: number
): number => first - second;

export const power: BinaryOperationType = (
  first: number,
  second: number
): number => first ** second;

export const square: UnaryOperationType = (argument: number): number =>
  power(argument, 2);

export const binaryMathOperators: {
  [key: string]: BinaryOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": power,
};

export const unaryMathOperators: {
  [key: string]: UnaryOperationType;
} = {
  "**": square,
};

export const mathOperators: {
  [key: string]: UnaryOperationType | BinaryOperationType;
} = { ...unaryMathOperators, ...binaryMathOperators };

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
