import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  singleOperandMathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

export const singleOperandCalc = (stack: ParsedLineType): ParsedLineType => {
  const countOfOperations = new Map();
  stack.forEach((stackItem, index) => {
    Object.keys(singleOperandMathOperators).forEach((operator) => {
      if (String(stackItem).endsWith(operator)) {
        if (countOfOperations.has(operator)) {
          const value = countOfOperations.get(operator);
          value.push(index);
        } else {
          countOfOperations.set(operator, [index]);
        }
      }
    });
  });

  if (countOfOperations.size === 0) return stack;

  for (const data of countOfOperations) {
    data[1].forEach((indexInStack: number) => {
      const value = String(stack[indexInStack]).replace(data[0], "");
      const calcValue = singleOperandMathOperators[data[0]](Number(value));
      stack[indexInStack] = calcValue;
    });
  }

  return stack;
};
