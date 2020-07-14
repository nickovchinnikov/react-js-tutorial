export type ScalarOperationType = (first: number, second: number) => number;
export type FunctionOperationType = (value: number) => number;

export const mul: ScalarOperationType = (first, second) => first * second;

export const div: ScalarOperationType = (first, second) => first / second;

export const add: ScalarOperationType = (first, second) => first + second;

export const minus: ScalarOperationType = (first, second) => first - second;

export const pow: ScalarOperationType = (first, second) =>
  Math.pow(first, second);

export const factorial: FunctionOperationType = (first) =>
  first ? first * factorial(first - 1) : 1;

export const sin: FunctionOperationType = (value) =>
  parseFloat(Math.sin(value * (Math.PI / 180)).toFixed(2));

export const cos: FunctionOperationType = (value) =>
  parseFloat(Math.cos(value * (Math.PI / 180)).toFixed(2));

export const tg: FunctionOperationType = (value) =>
  parseFloat(Math.tan(value * (Math.PI / 180)).toFixed(2));

export const ctg: FunctionOperationType = (value) =>
  parseFloat((cos(value) / sin(value)).toFixed(2));

export type ScalarOperator = "*" | "/" | "+" | "-" | "^" | "!";

export const scalarOperators: {
  [key in ScalarOperator]: ScalarOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": factorial,
};

export type TrigonomenticOperator = "sin" | "cos" | "tg" | "ctg";

export const trigonomenticOperators: {
  [key in TrigonomenticOperator]: FunctionOperationType;
} = {
  sin: sin,
  cos: cos,
  tg: tg,
  ctg: ctg,
};

export type MathOperator = ScalarOperator | TrigonomenticOperator;

export const mathOperators: {
  [key in MathOperator]: ScalarOperationType | FunctionOperationType;
} = {
  ...scalarOperators,
  ...trigonomenticOperators,
};

export const mathPriorities: number[] = [0, 1, 2, 3, 4];

const [ZERO, FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: {
  [key in MathOperator]: number;
} = {
  "!": ZERO,
  "^": FIRST,
  sin: SECOND,
  cos: SECOND,
  tg: SECOND,
  ctg: SECOND,
  "*": THIRD,
  "/": THIRD,
  "+": FOURTH,
  "-": FOURTH,
};
