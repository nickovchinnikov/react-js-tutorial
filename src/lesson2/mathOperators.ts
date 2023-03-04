export type ScalarOperationType = (first: number, second: number) => number;
export type FunctionOperationType = (value: number) => number

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
):number => Math.pow(first, second);

export const square: FunctionOperationType = (value: number): number => pow(value, 2);
export const factorial: FunctionOperationType = (value: number): number => pow(value, 2);
export const scalarMathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const functionMathOperators: { [key: string]: FunctionOperationType } = {
  "**": square,
  "!" : factorial
};

export const mathOperators: {
  [key: string]: FunctionOperationType | ScalarOperationType
} =
  {
    ...scalarMathOperators,
    ...functionMathOperators
  };

export const mathPriorities: number[] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": THIRD,
  "/": THIRD,
  "+": FOURTH,
  "-": FOURTH,
  "^": THIRD,
  "**": FIRST,
  "!": FIRST,
  "sin": SECOND,
  "cos": SECOND
};
