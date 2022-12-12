import {
  trigonomenticOperators,
  mathOperatorsPriorities,
  mathOperators,
} from "./mathOperators";
import type { MathOperator, TrigonomenticOperator } from "./mathOperators";

export const isOperator = (item: string | number): item is MathOperator =>
  item in mathOperators;

export const isTrigonometricOperator = (
  item: string | number
): item is TrigonomenticOperator => item in trigonomenticOperators;

export const checkMathOperatorsPriorities = (
  operator: string,
  priorities: number | number[]
): boolean => {
  if (!isOperator(operator)) {
    return false;
  }

  const prioritiesForCheck = !Array.isArray(priorities)
    ? [priorities]
    : priorities;

  for (const priority of prioritiesForCheck) {
    if (mathOperatorsPriorities[operator as MathOperator] === priority) {
      return true;
    }
  }
  return false;
};
