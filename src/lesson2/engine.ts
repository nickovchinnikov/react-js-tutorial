import { ParsedLineType, parser } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  trigonomenticOperators,
} from "./mathOperators";

const [ZERO, FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === ZERO) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -1),
        mathOperators[item](Number(prevItem)),
      ];
    } else {
      result.push(item);
    }
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      if (nextItem === '!') {
        console.log('here')
        result = [
          ...result.slice(0, -1),
          mathOperators[nextItem](Number(item)),
        ];
        console.log(result)
      } else {
        result = [
          ...result.slice(0, -2),
          mathOperators[item](Number(prevItem), Number(nextItem)),
        ];
      }
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (
      !isNumber(String(prevItem)) &&
      mathOperatorsPriorities[prevItem] === SECOND
    ) {
      if (!isNumber(String(item))) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -1),
        trigonomenticOperators[prevItem](Number(item)),
      ];
    } else {
      result.push(item);
    }
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
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

export const fourthPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      mathOperatorsPriorities[item] === SECOND ||
      mathOperatorsPriorities[item] === THIRD
    ) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FOURTH) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

export const solveSimpleExp = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const zeroPrioritiesRes = zeroPrioritiesCalc(stack);

  if (zeroPrioritiesRes.length === 1) {
    return Number(zeroPrioritiesRes[0]);
  }

  const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes);

  if (secondPrioritiesRes.length === 1) {
    return Number(secondPrioritiesRes[0]);
  }

  const thirdPrioritiesRes = thirdPrioritiesCalc(secondPrioritiesRes);

  if (thirdPrioritiesRes.length === 1) {
    return Number(thirdPrioritiesRes[0]);
  }

  return fourthPrioritiesCalc(thirdPrioritiesRes);
};

export const simplifyExp = (line: string): string => {
  let newLine = line.replace(/\*\*/g, "^ 2");
  newLine = newLine.replace(/.\(/g, " (");
  newLine = newLine.replace(/\!/g, " !");
  // newLine = newLine.replace(/(\d+)\!/g, (exp, numMatch) => {
  //   const num = parseInt(numMatch, 10);
  //   let count = 1;
  //   let result = "";
  //   while (count <= num) {
  //     result = `${result} ${count === 1 ? "" : "*"} ${count}`;
  //     count++;
  //   }
  //   return result.trim();
  // });
  return newLine;
};

export const polishNotationSimplify = (line: string): string => {
  let newLine = line.replace(/\*\*/g, "2 ^");
  newLine = newLine.replace("0!", "1");
  newLine = newLine.replace(/(\d+)\!/g, (exp, numMatch) => {
    const num = parseInt(numMatch, 10);
    let count = 1;
    let result = "";
    while (count <= num) {
      result = `${count} ${result} ${count === 1 ? "" : "*"}`;
      count++;
    }
    return result.trim();
  });
  return newLine;
};
