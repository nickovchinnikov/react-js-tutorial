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

export const trigFunctions: { [key: string]: UnarOperationType } = {
  sin,
  cos,
  tan,
};
