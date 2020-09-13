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

const convertFromDegreeToRadians: FunctionOperationType = (value) =>
  value * (Math.PI / 180);

export const sin: FunctionOperationType = (value) =>
  parseFloat(Math.sin(convertFromDegreeToRadians(value)).toFixed(2));

export const cos: FunctionOperationType = (value) =>
  parseFloat(Math.cos(convertFromDegreeToRadians(value)).toFixed(2));

export const tg: FunctionOperationType = (value) =>
  parseFloat(Math.tan(convertFromDegreeToRadians(value)).toFixed(2));

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
  sin,
  cos,
  tg,
  ctg,
};

export type MathOperator = ScalarOperator | TrigonomenticOperator;

export const mathOperators: {
  [key in MathOperator]: ScalarOperationType | FunctionOperationType;
} = {
  ...scalarOperators,
  ...trigonomenticOperators,
};

export const mathPriorities: number[] = [0, 1, 2, 3, 4];

const [zero, first, second, third, fourth] = mathPriorities;

export const MathPrioritiesList = {
  zero,
  first,
  second,
  third,
  fourth,
};

export const mathOperatorsPriorities: {
  [key in MathOperator]: number;
} = {
  "!": zero,
  "^": first,
  sin: second,
  cos: second,
  tg: second,
  ctg: second,
  "*": third,
  "/": third,
  "+": fourth,
  "-": fourth,
};
