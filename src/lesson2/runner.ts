import { parser } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zeroPrioritiesCalc,
} from "./engine";

const calculateBlock = (block: string): number => {
  const stack = parser(block.trim());

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const zeroPrioritiesRes = zeroPrioritiesCalc(stack);
  const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};

const calculateBrackets = (line: string): string => {
  const openBracket = "(";
  const closeBracket = ")";
  let blocksCount = 0;
  let result = "";
  let block = "";

  for (const letter of line) {
    result += letter;

    if (letter === openBracket) {
      blocksCount++;
      block = "";
    } else if (letter === closeBracket) {
      blocksCount--;
      if (blocksCount < 0) {
        throw TypeError("Unexpected bracket sequence");
      }

      const blockResult = calculateBlock(block);
      const blockWithBrackets = "(" + block + ")";
      if (result.endsWith(blockWithBrackets)) {
        result = result.slice(0, blockWithBrackets.length * -1);
        result += blockResult;
      } else {
        throw TypeError("Unexpected error");
      }
    } else {
      block += letter;
    }
  }

  if (blocksCount !== 0) {
    throw TypeError("Unexpected bracket sequence");
  }
  return result;
};

export const runner = (line: string): number => {
  const calculateBracketsResult = calculateBrackets(line);
  return calculateBlock(calculateBracketsResult);
};
