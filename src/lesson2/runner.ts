import { parser, ParsedLineType } from "./parser";
import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  fourthPrioritiesCalc,
  thirdPrioritiesCalc,
  bracketsProcessing,
} from "./engine";

export const calc = (stack: ParsedLineType): number => {

  const bracketsProcessingRes = bracketsProcessing(stack);

  const firstPrioritiesRes = firstPrioritiesCalc(bracketsProcessingRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes);

  if (secondPrioritiesRes.length === 1) {
    return Number(secondPrioritiesRes[0]);
  }

  const thirdPrioritiesRes = thirdPrioritiesCalc(secondPrioritiesRes);

  if (thirdPrioritiesRes.length === 1) {
    return Number(thirdPrioritiesRes[0]);
  }

  return fourthPrioritiesCalc(thirdPrioritiesRes);
};
export const runner = (line: string): number => {
  const stack = parser(line);

  console.log(stack);

  return calc(stack);
};
