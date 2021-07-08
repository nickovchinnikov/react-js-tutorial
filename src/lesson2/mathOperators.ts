export type ScalarOperationType = (first: number, second: number) => number;
export type UnarOperationType = (num: number) => number;

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

export const exp: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const square: UnarOperationType = (num: number): number => exp(num, 2);
export const fact: UnarOperationType = (num: number): number => {
  const MAX_INPUT = 170;

  if (num < 0) {
    throw new Error("cannot handle negative number");
  }

  if (num > MAX_INPUT) {
    throw new Error("too large number for factorial operation");
  }

  if (num === 0) return 1;

  const items: number = Array.from<number, number>(
    { length: num },
    (_, index) => index + 1
  ).reduce<number>((acc, cur) => acc * cur, 1);

  return items;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": exp,
};

export const mathPriorities: number[] = [1, 2, 3];

const [FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};

export const unarOperators: { [key: string]: UnarOperationType } = {
  "**": square,
  "!": fact,
};
