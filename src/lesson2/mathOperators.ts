export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperationType = (first: number) => number;

export const factorial: SingleOperationType = function (first: number): number {
  if (first < 0) {
    throw console.error("Попытка вычислить факториал отрицательного числа");
  }

  if (first === 0) {
    return 1;
  }
  return first * factorial(first - 1);
};

export const squire: SingleOperationType = (first: number): number =>
  first ** 2;

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

export const power: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": power,
};

export const singleOperators: { [key: string]: SingleOperationType } = {
  "!": factorial,
  "**": squire,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": ZERO,
  "!": ZERO,
  "^": FIRST,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
