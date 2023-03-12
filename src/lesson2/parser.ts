import { isNumber } from "./helpers";
import { mathOperators, singleOperators } from "./mathOperators";
import { openBracket, closeBracker } from "./bracketChecker";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    // for numbers
    const isValidNumberPush =
      !isNumber(prevItem) &&
      isNumber(item) &&
      prevItem !== closeBracker &&
      !singleOperators.hasOwnProperty(prevItem);

    // for binary operators
    const isValidOperatorPush =
      isNumber(prevItem) && mathOperators.hasOwnProperty(item);

    // for singleOperator
    const isValidZeroOperator =
      isNumber(prevItem) && singleOperators.hasOwnProperty(item);
    const isSequenceOfZeroOperator =
      singleOperators.hasOwnProperty(item) &&
      singleOperators.hasOwnProperty(prevItem);
    const isOperatorAfterZeroOperator =
      mathOperators.hasOwnProperty(item) &&
      singleOperators.hasOwnProperty(prevItem);

    // for bracket
    const isValidOpenBracket =
      item === openBracket &&
      (mathOperators.hasOwnProperty(prevItem) || prevItem === undefined);
    const isValidCloseBracket =
      item === closeBracker &&
      (isNumber(prevItem) || singleOperators.hasOwnProperty(prevItem));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (
      isValidOperatorPush ||
      isValidZeroOperator ||
      isSequenceOfZeroOperator ||
      isOperatorAfterZeroOperator ||
      isValidOpenBracket ||
      isValidCloseBracket
    ) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }

    return result;
  }, []);
};
