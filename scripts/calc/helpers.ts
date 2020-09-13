import { without } from "ramda";

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

export const checkerMathOperatorsPriorities = (
  operator: string,
  priorities: number | number[]
) => {
  if (!isOperator(operator)) {
    return false;
  }

  if (!Array.isArray(priorities)) {
    return mathOperatorsPriorities[operator as MathOperator] === priorities;
  }

  for (const priority of priorities) {
    if (mathOperatorsPriorities[operator as MathOperator] === priority) {
      return true;
    }
  }
  return false;
};
