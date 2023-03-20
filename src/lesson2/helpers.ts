import { mathOperators,
unionOperators } from "./mathOperators";

import { zeroPrioritiesCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc } from "./engine";

import { parser } from "./parser";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isOperator = (item: string): boolean => item in mathOperators;

export const isUnionOperator = (item: string): boolean => item in unionOperators;