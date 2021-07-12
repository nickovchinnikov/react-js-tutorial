import { isNumber, isOpeningBrace, isClosingBrace } from "./helpers";
import { mathOperators, unarOperators, trigOperators } from "./mathOperators";

export type ParsedLineType = (number | string | ParsedLineType)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  let closingBraceIndex: number; // helper

  const parserIter = (
    chunk: ParsedLineType,
    isRoot = true,
    startKey = 0
  ): ParsedLineType => {
    let braceFlag = true;
    const result = [];

    for (let key = 0; key < chunk.length && braceFlag; key++) {
      const item = chunk[key];

      if (isOpeningBrace(String(item))) {
        const chunkItem: ParsedLineType = parserIter(
          chunk.slice(key + 1),
          false,
          key + 1
        );

        result.push(chunkItem);
        key += closingBraceIndex - key;
      } else if (isClosingBrace(String(item))) {
        if (isRoot) {
          throw new TypeError("wrong braces amount");
        }

        closingBraceIndex = key + startKey;
        braceFlag = false;
      } else {
        const prevItem = result[result.length - 1];

        const isValidNumberPush =
          !isNumber(String(prevItem)) &&
          !Array.isArray(prevItem) &&
          !unarOperators.includes(String(prevItem)) &&
          isNumber(String(item));
        const isValidOperatorPush =
          ((isNumber(String(prevItem)) || Array.isArray(prevItem)) &&
            mathOperators.hasOwnProperty(String(item))) ||
          (trigOperators.includes(String(item)) && !isNumber(String(prevItem)));

        if (isValidNumberPush) {
          result.push(Number(item));
        } else if (isValidOperatorPush) {
          result.push(item);
        } else {
          throw new TypeError("Unexpected string");
        }
      }
    }

    if (!isRoot && braceFlag) {
      throw new TypeError("wrong braces amount");
    }

    return result;
  };

  return parserIter(stack);
};
