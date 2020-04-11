export type ScalarOperationType = (first: number, second: number) => number;
export type TrigonometricOperationType = (value: number) => number;

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

export const sin: TrigonometricOperationType = (value: number): number =>
  parseFloat(Math.sin(value * (Math.PI / 180)).toFixed(2));

export const cos: TrigonometricOperationType = (value: number): number =>
  parseFloat(Math.cos(value * (Math.PI / 180)).toFixed(2));

export const tg: TrigonometricOperationType = (value: number): number =>
  parseFloat(Math.tan(value * (Math.PI / 180)).toFixed(2));

export const ctg: TrigonometricOperationType = (value: number): number =>
  parseFloat((cos(value) / sin(value)).toFixed(2));

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  sin: sin,
  cos: cos,
  tg: tg,
  ctg: ctg,
};

export const mathPriorities: number[] = [0, 1, 2, 3];

const [ZERO, FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": ZERO,
  sin: FIRST,
  cos: FIRST,
  tg: FIRST,
  ctg: FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};
