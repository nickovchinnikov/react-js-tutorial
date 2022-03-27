import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const { FIRST, SECOND } = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  let result: ParsedLineType = [];

  for (let key = 0; key < stack.length; key++) {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];
    const nextItem = stack[key];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
  }

  return result;
};

export const secondPrioritiesCalc = (stack: ParsedLineType): number => {
  let result = 0;
  for (let key = 0; key < stack.length; key++) {
    if (key === 0) {
      result = Number(stack[key]);
    }

    const prevItem = result;
    const item = stack[key - 1];
    const nextItem = stack[key];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(prevItem), Number(nextItem));
    }
  }
  return result;
};
