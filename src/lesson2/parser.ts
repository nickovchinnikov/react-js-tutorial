import { isNumber } from "./helpers";
import { mathOperators, singleOperandMathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export function checkSingleOperator(item: string): boolean {
  if (!item || isNumber(item)) return false;

  return Object.keys(singleOperandMathOperators).some((operator) =>
    item.endsWith(operator)
  );
}

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      (isNumber(prevItem) || checkSingleOperator(prevItem)) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    const isValidSingleOperator = checkSingleOperator(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush || isValidSingleOperator) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
