import { checkMathOperatorsPriorities, isOperator } from "./helpers";
import { MathPrioritiesList } from "./mathOperators";

export type ParsedLineType = (number | string)[];

const { zero, second } = MathPrioritiesList;

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumber =
      (isOperator(prevItem) || prevItem === undefined) && !isNaN(Number(item));

    const isValidOperator =
      (!isOperator(prevItem) || checkMathOperatorsPriorities(prevItem, zero)) &&
      isOperator(item);

    const isValidTrigOperator =
      checkMathOperatorsPriorities(item, second) &&
      (key === 0 || !checkMathOperatorsPriorities(prevItem, second));

    const isValidMathOperator = isValidOperator || isValidTrigOperator;

    if (isValidNumber || isValidMathOperator) {
      const resultedItem = isValidNumber ? Number(item) : item;
      result = [...result, resultedItem];
      return result;
    }

    throw new TypeError("Unexpected string");
  }, []);
};
