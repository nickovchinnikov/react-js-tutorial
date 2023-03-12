import { parser } from "./parser";
import { bracketChecker, closeBracker, openBracket } from "./bracketChecker";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zeroPrioritiesCalc,
} from "./engine";

export const runner = (line: string): number => {
  const isBracketCorrect = bracketChecker(line);

  if (!isBracketCorrect) {
    throw console.error("bad format for bracket");
  }

  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const bracerStack = stack;
  while (bracerStack.find((index) => index == openBracket)) {
    const startIndex = bracerStack.findIndex((index) => index == openBracket);
    const stack = [];
    let lastIndex = startIndex;
    stack.push(openBracket);
    while (stack.length > 0) {
      lastIndex++;
      if (bracerStack[lastIndex] == openBracket) {
        stack.push(openBracket);
      } else if (bracerStack[lastIndex] == closeBracker) {
        stack.pop();
      }
    }
    const startBracer = startIndex + 1;
    const bracerExpression = bracerStack.slice(startBracer, lastIndex);
    const str = bracerExpression.join(" ");
    const number = runner(str);

    bracerStack.splice(startIndex, lastIndex - startIndex + 1, number);
  }

  const zeroPrioritiesRes = zeroPrioritiesCalc(stack);

  if (zeroPrioritiesRes.length === 1) {
    return Number(zeroPrioritiesRes[0]);
  }

  const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
