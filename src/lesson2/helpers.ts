import {
  mathOperators,
} from "./mathOperators";

export const isNumber = (item: string): boolean => !isNaN(Number(item));


export const isOperator = (item: string): boolean => item in mathOperators