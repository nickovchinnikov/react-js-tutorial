import { UnarOperationType } from "./mathOperators";
import { degToRad } from "./helpers";

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

export const trigFunctions: { [key: string]: UnarOperationType } = {
  sin,
  cos,
  tan,
};
