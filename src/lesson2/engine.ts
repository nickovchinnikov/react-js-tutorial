import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathPriorities,
  mathOperatorsPriorities,
  scalarMathOperators,
  numberMathOperators,
} from "./mathOperators";

const [ZERO, FIRST, SECOND] = mathPriorities;

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === ZERO) {
      if (!numberMathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      if (prevItem) {
        result = [
          ...result.slice(0, -1),
          numberMathOperators[item](Number(prevItem)),
        ];
      }
    } else {
      result.push(item);
    }

    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!scalarMathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        scalarMathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (item) {

      if (!isNumber(String(item))) {
        
        if (mathOperatorsPriorities[item] !== SECOND) {
          throw new TypeError("Unexpected stack!");
        }

        result = scalarMathOperators[item](Number(result), Number(nextItem));
      }
    }

    return result;
  }, Number(stack[0]));
