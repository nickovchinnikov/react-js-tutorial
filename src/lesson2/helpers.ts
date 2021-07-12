enum BraceType {
  OPENING = "(",
  CLOSING = ")",
}

export const isOpeningBrace = (item: string): boolean =>
  item === BraceType.OPENING;
export const isClosingBrace = (item: string): boolean =>
  item === BraceType.CLOSING;

export const isNumber = (item: string): boolean => !isNaN(Number(item));

const FLAT_ANGLE = 180;
export const degToRad = (degrees: number): number =>
  (Math.PI * degrees) / FLAT_ANGLE;

const EPSILON = 0.000000001;
export const isFloatEqual = (num1: number, num2: number): boolean =>
  Math.abs(num1 - num2) < EPSILON;
