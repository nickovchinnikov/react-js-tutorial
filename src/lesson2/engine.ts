import { ParsedLineIterType } from "./parser";
import { isNumber } from "./helpers";
import { mathOperators, priorities } from "./mathOperators";

export type CalcUnarType = (stack: ParsedLineIterType) => ParsedLineIterType;
export type CalcType = (
  stack: ParsedLineIterType,
  num: number
) => ParsedLineIterType;

const calc = (
  stack: ParsedLineIterType,
  priority: number
): ParsedLineIterType => {
  return stack.reduce<ParsedLineIterType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (
      !isNumber(String(item)) &&
      priorities[priority].includes(String(item))
    ) {
      if (!mathOperators[String(item)]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[String(item)](Number(prevItem), Number(nextItem)),
      ];
    } else if (
      priority === priorities.length - 1 &&
      !isNumber(String(item)) &&
      mathOperators.hasOwnProperty(String(item)) &&
      !priorities[priority].includes(String(item))
    ) {
      throw new TypeError("Unexpected stack!");
    } else {
      result.push(nextItem);
    }

    return result;
  }, []);
};

export const unarOperatorsCalc: CalcType = (
  stack: ParsedLineIterType,
  priority: number
): ParsedLineIterType => {
  return stack.reduce<ParsedLineIterType>((acc, currentItem) => {
    const prevItem = acc[acc.length - 1];

    if (
      isNumber(String(prevItem)) &&
      priorities[priority].includes(String(currentItem))
    ) {
      acc = [
        ...acc.slice(0, -1),
        mathOperators[String(currentItem)](Number(prevItem), 0),
      ];
    } else {
      acc.push(currentItem);
    }

    return acc;
  }, []);
};

export const trigFuncsCalc: CalcType = (
  stack: ParsedLineIterType,
  priority: number
): ParsedLineIterType => {
  return stack.reduce<ParsedLineIterType>((acc, currentItem) => {
    const prevItem = acc[acc.length - 1];

    if (
      isNumber(String(currentItem)) &&
      priorities[priority].includes(String(prevItem))
    ) {
      acc = [
        ...acc.slice(0, -1),
        mathOperators[String(prevItem)](Number(currentItem), 0),
      ];
    } else {
      acc.push(currentItem);
    }

    return acc;
  }, []);
};

const [FIRST, SECOND, THIRD, FOURTH, FIFTH] = Array.from<void, number>(
  { length: priorities.length },
  (_, index) => index
);

export const [
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
  lastPrioritiesCalc,
] = [
  (stack: ParsedLineIterType): ParsedLineIterType =>
    unarOperatorsCalc(stack, FIRST),
  (stack: ParsedLineIterType): ParsedLineIterType =>
    trigFuncsCalc(stack, SECOND),
  (stack: ParsedLineIterType): ParsedLineIterType => calc(stack, THIRD),
  (stack: ParsedLineIterType): ParsedLineIterType => calc(stack, FOURTH),
  (stack: ParsedLineIterType): ParsedLineIterType => calc(stack, FIFTH),
];
