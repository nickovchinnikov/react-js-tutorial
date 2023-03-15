import { isNumber } from "./helpers";
import {
  functionMathOperators,
  scalarMathOperators,
  trigonometryMathOperators,
  mathOperators,
} from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType => {
  let _countOpenBrackets = 0;
  let _countCloseBrackets = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === ")") {
      _countCloseBrackets++;
    }
    if (line[i] === "(") {
      _countOpenBrackets++;
    }
  }
  if (_countOpenBrackets !== _countCloseBrackets) {
    throw new TypeError("Unexpected string");
  }
  const stack = line.split(" ");
  return stack.reduce<ParsedLineType>((result, item, key) => {
    if (
      key === 0 &&
      mathOperators.hasOwnProperty(item) &&
      !trigonometryMathOperators.hasOwnProperty(item)
    ) {
      throw new TypeError("Unexpected string");
    }

    if (key === stack.length - 1 && scalarMathOperators.hasOwnProperty(item)) {
      throw new TypeError("Unexpected string");
    }
    const prevItem = stack[key - 1];
    const nextItem = stack[key + 1];
    let itemHasCloseBrackets = false;
    let countOpenBrackets = 0;
    let countCloseBrackets = 0;

    if (item.length > 1 && (item.includes("(") || item.includes(")"))) {
      let numberInsideBrackets = false;
      const itemLength = item.length;
      const oldItem = item;

      for (let i = 0; i < itemLength; i++) {
        const curSymbol = oldItem[i];
        if (curSymbol === "(") {
          countOpenBrackets++;
          item = item.replace("(", "");
        }
        if (curSymbol === ")") {
          if (i == 0) {
            throw new TypeError("Unexpected string");
          }
          if (countOpenBrackets !== 0 && !numberInsideBrackets) {
            throw new TypeError("Unexpected string");
          }
          countCloseBrackets++;
          item = item.replace(")", "");
          itemHasCloseBrackets = true;
        }
        if (isNumber(curSymbol)) {
          numberInsideBrackets = true;
        }
      }

      if (countOpenBrackets > 0) {
        for (let i = 0; i < countOpenBrackets; i++) {
          result.push("(");
        }
      }

      if (isNumber(item)) {
        stack[key] = item;
      }
    }

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidFunctionalOperatorPush =
      isNumber(prevItem) && functionMathOperators.hasOwnProperty(item);

    const isValidTrigonometryOperatorPush =
      (isNumber(nextItem) && trigonometryMathOperators.hasOwnProperty(item)) ||
      ((String(nextItem).indexOf("(") !== -1 ||
        String(nextItem).indexOf(")") !== -1) &&
        trigonometryMathOperators.hasOwnProperty(item));

    const isValidScalarOperatorPush =
      (isNumber(prevItem) && scalarMathOperators.hasOwnProperty(item)) ||
      (functionMathOperators.hasOwnProperty(prevItem) &&
        scalarMathOperators.hasOwnProperty(item));

    const isValidOperatorPush =
      isValidScalarOperatorPush ||
      isValidFunctionalOperatorPush ||
      isValidTrigonometryOperatorPush;

    const isValidBrackets = item.length === 1 && (item === "(" || item === ")");

    if (isValidNumberPush) {
      result.push(Number(item));
      if (itemHasCloseBrackets) {
        for (let i = 0; i < countCloseBrackets; i++) {
          result.push(")");
        }
      }
    } else if (isValidOperatorPush) {
      result.push(item);
    } else if (isValidBrackets) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
