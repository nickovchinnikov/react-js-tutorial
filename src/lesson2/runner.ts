import { parser, ParsedLineType, ParsedLineIterType } from "./parser";

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

  const calcChunk = (chunk: ParsedLineIterType): ParsedLineIterType => {
    return calcFuncs.reduce<ParsedLineIterType>((acc, calc) => {
      if (acc.length === 1) return acc;

      acc = calc(acc);

      return acc;
    }, chunk);
  };

  const calc = (chunk: ParsedLineType): ParsedLineIterType => {
    const result = chunk.reduce<ParsedLineIterType>((acc, cur) => {
      if (Array.isArray(cur)) {
        acc.push(calc(cur)[0]);
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
