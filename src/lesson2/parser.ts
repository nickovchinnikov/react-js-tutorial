import { isNumber } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");
  if (stack.includes("**")) {
    const index = stack.indexOf("**");
    stack.splice(index, 1, "^", "2");
  }
  if (stack.includes("!")) {
    const index = stack.indexOf("!");
    const currentValue = parseInt(stack[index + 1]);
    const res = rFact(currentValue).toString();
    stack.splice(index, 2, res);
  }
 
  console.log("-> stack", stack);
  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];
    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);

  function rFact(num: number): number {
    if (num === 0) {
      return 1;
    } else {
      return num * rFact(num - 1);
    }
  }
};