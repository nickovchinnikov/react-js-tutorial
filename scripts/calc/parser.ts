import { checkerMathOperatorsPriorities, isOperator } from "./helpers";
import { MathPrioritiesList } from "./mathOperators";

export type ParsedLineType = (number | string)[];

const { ZERO, SECOND } = MathPrioritiesList;

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumber =
      (isOperator(prevItem) || prevItem === undefined) && !isNaN(Number(item));

    const isValidOperator =
      (!isOperator(prevItem) ||
        checkerMathOperatorsPriorities(prevItem, ZERO)) &&
      isOperator(item);

    const isValidTrigOperator =
      checkerMathOperatorsPriorities(item, SECOND) &&
      (key === 0 || !checkerMathOperatorsPriorities(prevItem, SECOND));

    const isValidMathOperator = isValidOperator || isValidTrigOperator;

    if (isValidNumber || isValidMathOperator) {
      const resultedItem = isValidNumber ? Number(item) : item;
      result = [...result, resultedItem];
      return result;
    }

    throw new TypeError("Unexpected string");
  }, []);
};
