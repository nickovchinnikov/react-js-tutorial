import { trigonomenticOperators, mathOperators } from "./mathOperators";
import type { MathOperator, TrigonomenticOperator } from "./mathOperators";

export const isOperator = (item: string | number): item is MathOperator =>
  item in mathOperators;

export const isTrigonometricOperator = (
  item: string | number
): item is TrigonomenticOperator => item in trigonomenticOperators;
