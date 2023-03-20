import { isNumber, isOperator, isUnionOperator } from "./helpers";
import { mathOperators,
unionOperators } from "./mathOperators";

import { parseBrackets } from "./parseBrackets";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const parsedBrackets = parseBrackets(line)
  const stack = parsedBrackets.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item) && !unionOperators.hasOwnProperty(prevItem);
    const isValidOperatorPush =
      (isNumber(prevItem) || isUnionOperator(prevItem))  &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item) &&
      isOperator(item);

    const isValidUnionOperatorPush =
      (isNumber(prevItem) || isUnionOperator(prevItem)) &&
      !isNumber(item) &&
      unionOperators.hasOwnProperty(item) &&
      isUnionOperator(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else if(isValidUnionOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }

    return result;
  }, []);
};