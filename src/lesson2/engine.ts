import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import { mathOperators, priorities } from "./mathOperators";

export type CalcUnarType = (stack: ParsedLineType) => ParsedLineType;
export type CalcType = (stack: ParsedLineType, num: number) => ParsedLineType;

const calc = (stack: ParsedLineType, priority: number): ParsedLineType => {
  return stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (Array.isArray(nextItem)) {
      const chunkPiece = calc(nextItem, priority);

      result.push(chunkPiece.length === 1 ? chunkPiece[0] : chunkPiece);
    } else if (
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
  stack: ParsedLineType,
  priority: number
): ParsedLineType => {
  return stack.reduce<ParsedLineType>((acc, currentItem) => {
    const prevItem = acc[acc.length - 1];

    if (Array.isArray(currentItem)) {
      const chunkPiece = calc(currentItem, priority);

      acc.push(chunkPiece.length === 1 ? chunkPiece[0] : chunkPiece);
    } else if (
      isNumber(String(prevItem)) &&
      priorities[priority].includes(String(currentItem))
    ) {
      acc = [
        ...acc.slice(0, -1),
        mathOperators[currentItem](Number(prevItem), 0),
      ];
    } else {
      acc.push(currentItem);
    }

    return acc;
  }, []);
};

export const trigFuncsCalc: CalcType = (
  stack: ParsedLineType,
  priority: number
): ParsedLineType => {
  return stack.reduce<ParsedLineType>((acc, currentItem) => {
    const prevItem = acc[acc.length - 1];

    if (Array.isArray(currentItem)) {
      const chunkPiece = calc(currentItem, priority);

      acc.push(chunkPiece.length === 1 ? chunkPiece[0] : chunkPiece);
    } else if (
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
  (stack: ParsedLineType): ParsedLineType => unarOperatorsCalc(stack, FIRST),
  (stack: ParsedLineType): ParsedLineType => trigFuncsCalc(stack, SECOND),
  (stack: ParsedLineType): ParsedLineType => calc(stack, THIRD),
  (stack: ParsedLineType): ParsedLineType => calc(stack, FOURTH),
  (stack: ParsedLineType): ParsedLineType => calc(stack, FIFTH),
];
