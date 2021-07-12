import { degToRad } from "./helpers";

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
): number => {
  if (!first && !second) {
    throw new Error("base and power cannot equal zero at once");
  }

  return first ** second;
};

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

const RIGHT_ANGLE = 90;

export const sin: UnarOperationType = (deg: number): number => {
  return Math.sin(degToRad(deg));
};

export const cos: UnarOperationType = (deg: number): number => {
  return Math.cos(degToRad(deg));
};

export const tan: UnarOperationType = (deg: number): number => {
  if (deg && !(deg % RIGHT_ANGLE)) return Infinity;

  return Math.tan(degToRad(deg));
};

export const fib: UnarOperationType = (num: number): number => {
  if (num <= 0) {
    throw new Error("fib function can handle only positive numbers");
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i++) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
};
