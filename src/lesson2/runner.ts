import { parser, ParsedLineType } from "./parser";
import {
  fourthPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  bracketsProcessing,
} from "./engine";

export const calc = (stack: ParsedLineType | null): number => {
  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const bracketsProcessingRes = bracketsProcessing(stack);

  /* const firstPrioritiesRes = firstPrioritiesCalc(stack);

   if (firstPrioritiesRes.length === 1) {
     return Number(firstPrioritiesRes[0]);
   }*/

  const secondPrioritiesRes = secondPrioritiesCalc(bracketsProcessingRes);

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

  return calc(stack);
};
