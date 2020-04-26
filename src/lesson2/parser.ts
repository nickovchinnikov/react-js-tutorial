import { isNumber } from "./helpers";
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

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      (isNumber(prevItem) || mathOperatorsPriorities[prevItem] === ZERO) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);
    const isValidTrigOperatorsPush =
      mathOperatorsPriorities[item] === SECOND &&
      mathOperators.hasOwnProperty(item) &&
      (key === 0 ||
        (mathOperators.hasOwnProperty(prevItem) &&
          mathOperatorsPriorities[prevItem] !== SECOND));

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
