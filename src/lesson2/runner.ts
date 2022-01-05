import { parser } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zeroPrioritiesCalc,
} from "./engine";

const coparser = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
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

export const runner = (line: string): number => {
  let expression = line;
  const brackets: number[] = [];

  for (let i = 0; ; ) {
    if (expression.charAt(i) === ")") {
      const start = brackets.pop();
      if (typeof start === "undefined") {
        throw new TypeError("Unexpected end of expression");
      }
      const sub = coparser(expression.substring(start + 2, i - 1)).toString();
      expression =
        expression.substring(0, start) + sub + expression.substring(i + 1);
      i = start;
    } else if (expression.charAt(i) === "(") {
      brackets.push(i);
      i = i + 1;
    } else {
      i = i + 1;
    }
    if (i === expression.length) {
      if (brackets.length > 1) {
        throw new TypeError("Unexpected end of expression");
      }
      break;
    }
  }
  return coparser(expression);
};
