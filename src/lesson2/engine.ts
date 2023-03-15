import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import { calc } from "./runner";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  functionMathOperators,
  trigonometryMathOperators,
} from "./mathOperators";

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const bracketsProcessing = (stack: ParsedLineType): ParsedLineType => {
  let indexOpenBrackets: number;
  stack.forEach((item, index) => {
    if (item === "(") {
      indexOpenBrackets = index;
    }
    if (item === ")") {
      stack.splice(
        indexOpenBrackets,
        index - indexOpenBrackets + 1,
        calc(stack.slice(indexOpenBrackets + 1, index))
      );
      bracketsProcessing(stack);
    }
  });

  return stack;
};

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      result = [
        ...result.slice(0, -1),
        trigonometryMathOperators[item](Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = [
        ...result.slice(0, -1),
        functionMathOperators[item](Number(prevItem)),
      ];
    } else {
      result.push(item);
    }
    return result;
  }, []);
export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);
export const fourthPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];
    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FOURTH) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return Number(result.toFixed(2));
  }, Number(stack[0]));
