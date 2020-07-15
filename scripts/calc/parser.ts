import { isOperator } from "./helpers";
import {
  mathOperators,
  mathOperatorsPriorities,
  mathPriorities,
} from "./mathOperators";

export type ParsedLineType = (number | string)[];

const [ZERO, , SECOND] = mathPriorities;

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush =
      (isOperator(prevItem) || prevItem == undefined) && !isOperator(item);
    const isValidOperatorPush =
      (!isOperator(prevItem) || mathOperatorsPriorities[prevItem] === ZERO) &&
      isOperator(item) &&
      mathOperators.hasOwnProperty(item);
    const isValidTrigOperatorsPush =
      isOperator(item) &&
      mathOperatorsPriorities[item] === SECOND &&
      (key === 0 ||
        (isOperator(prevItem) && mathOperatorsPriorities[prevItem] !== SECOND));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush || isValidTrigOperatorsPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
