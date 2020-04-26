export type ScalarOperationType = (first: number, second?: number) => number;
export type TrigonometricOperationType = (value: number) => number;

export const mul: ScalarOperationType = (first, second) => first * second;

export const div: ScalarOperationType = (first, second) => first / second;

export const add: ScalarOperationType = (first, second) => first + second;

export const minus: ScalarOperationType = (first, second) => first - second;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial: ScalarOperationType = (first: number): number =>
  first ? first * factorial(first - 1) : 1;

export const sin: TrigonometricOperationType = (value: number): number =>
  parseFloat(Math.sin(value * (Math.PI / 180)).toFixed(2));

export const cos: TrigonometricOperationType = (value: number): number =>
  parseFloat(Math.cos(value * (Math.PI / 180)).toFixed(2));

export const tg: TrigonometricOperationType = (value: number): number =>
  parseFloat(Math.tan(value * (Math.PI / 180)).toFixed(2));

export const ctg: TrigonometricOperationType = (value: number): number =>
  parseFloat((cos(value) / sin(value)).toFixed(2));

export const scalarOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": factorial,
};

export const trigonomenticOperators: {
  [key: string]: TrigonometricOperationType;
} = {
  sin: sin,
  cos: cos,
  tg: tg,
  ctg: ctg,
};
export const mathOperators: {
  [key: string]: ScalarOperationType | TrigonometricOperationType;
} = {
  ...scalarOperators,
  ...trigonomenticOperators,
};

export const mathPriorities: number[] = [0, 1, 2, 3, 4];

const [ZERO, FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
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
