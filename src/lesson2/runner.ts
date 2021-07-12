import { parser, ParsedLineType } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
  lastPrioritiesCalc,
  CalcUnarType,
} from "./engine";

const calcFuncs: Array<CalcUnarType> = [
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
  lastPrioritiesCalc,
];

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const calcChunk = (chunk: ParsedLineType): ParsedLineType => {
    return calcFuncs.reduce<ParsedLineType>((acc, calc) => {
      if (acc.length === 1) return acc;

      acc = calc(acc);

      return acc;
    }, chunk);
  };

  const calc = (chunk: ParsedLineType): ParsedLineType => {
    const result = chunk.reduce<ParsedLineType>((acc, cur) => {
      if (Array.isArray(cur)) {
        acc.push(calc(cur));
      } else {
        acc.push(cur);
      }

      return acc;
    }, []);

    return calcChunk(result);
  };

  const result = calc(stack);

  return Number(result[0]);
};
