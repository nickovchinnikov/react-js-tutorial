export type ScalarOperationType = (first: number, second: number) => number;
export type FunctionOperationType = (first: number, second?: number) => number;

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

export const pow: FunctionOperationType = (
  first: number,
  second?: number
): number => Math.pow(first, Number(second));

export const square: FunctionOperationType = (value: number): number =>
  pow(value, 2);
export const factorial: FunctionOperationType = (value: number): number =>
  pow(value, 2);
export const sin: FunctionOperationType = (value: number): number =>
  Number(Math.sin(value).toFixed(2));
export const cos: FunctionOperationType = (value: number): number =>
  Number(Math.cos(value).toFixed(2));
export const tan: FunctionOperationType = (value: number): number =>
  Number(Math.tan(value).toFixed(2));
export const scalarMathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const functionMathOperators: { [key: string]: FunctionOperationType } = {
  "**": square,
  "!": factorial,
};

export const trigonometryMathOperators: {
  [key: string]: FunctionOperationType;
} = {
  sin: sin,
  cos: cos,
  tan: tan,
};

export const mathOperators: {
  [key: string]: FunctionOperationType | ScalarOperationType;
} = {
  ...scalarMathOperators,
  ...functionMathOperators,
  ...trigonometryMathOperators,
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": THIRD,
  "/": THIRD,
  "+": FOURTH,
  "-": FOURTH,
  "^": THIRD,
  "**": SECOND,
  "!": SECOND,
  sin: FIRST,
  cos: FIRST,
  tan: FIRST,
};
