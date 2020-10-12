import { parser } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  singleOperandCalc,
} from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const singleOperandHandledRes = singleOperandCalc(stack);

  const firstPrioritiesRes = firstPrioritiesCalc(singleOperandHandledRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
