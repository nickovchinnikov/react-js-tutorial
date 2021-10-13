import { isNumber } from "./helpers";
import { mathOperators, mathPriorities, mathOperatorsPriorities } from "./mathOperators";

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumber = ((prevItem in mathOperators)&&(mathOperatorsPriorities[prevItem] != FIRST) || prevItem === undefined) && isNumber(item);
    const isValidOperator =
      (isNumber(prevItem) || (prevItem in mathOperators) && (mathOperatorsPriorities[prevItem] === FIRST) ) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);
    
    if (isValidNumber || isValidOperator) {
      const resultedItem = isValidNumber ? Number(item) : item;
      result = [...result, resultedItem];
      return result;
    }  
    
    throw new TypeError("Unexpected string");   
  }, []);
};
