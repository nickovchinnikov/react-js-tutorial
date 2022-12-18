// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");
import mathOperation from "./mathOperators";

const GROUP_PATTERN = /\([-+/*0-9\.]{3,}\)/g;
const DIGIT_PATTERN = /[0-9\.]+/g;
// const OPERATOR_PATTERN = /[-+/*]/g;
const ZERO_PRIORITY_PATTERN = /[0-9\.]+[\^][0-9\.]+/g;
const LOW_PRIORITY_PATTERN = /[0-9\.]+[+-][0-9\.]+/g;
const HIGH_PRIORITY_PATTERN = /[0-9\.]+[*/][0-9\.]+/g;
const UNARY_OPERATION = /[\d\.]+(\*{2,}|!)/g;

const priorityOperation: {
  [key: number]: RegExp;
} = {
  0: UNARY_OPERATION,
  1: ZERO_PRIORITY_PATTERN,
  2: HIGH_PRIORITY_PATTERN,
  3: LOW_PRIORITY_PATTERN,
};

const customEval = (subStr: string): number => {
  const res: RegExpMatchArray | null = subStr.match(DIGIT_PATTERN);
  if (res) {
    const operator: string = _.trimEnd(_.trimStart(subStr, res[0]), res[1]);
    return mathOperation(operator, Number(res[0]), Number(res[1]));
  }
  throw new TypeError("Invalid expression");
};

const calculateProcess = (pattern: RegExp, subExp: string): string => {
  while (true) {
    const res = subExp.match(pattern);
    if (!res) break;
    for (const s of res) {
      const mathResult = customEval(s);
      const startI = subExp.indexOf(s);
      const endI = s.length;
      subExp =
        subExp.slice(0, startI) +
        String(mathResult) +
        subExp.slice(startI + endI);
    }
  }
  return subExp;
};

const calculateHighPriority = (subExp: string): string => {
  return calculateProcess(HIGH_PRIORITY_PATTERN, subExp);
};

const calculateLowPriority = (subExp: string): string => {
  return calculateProcess(LOW_PRIORITY_PATTERN, subExp);
};

const calculateSubExp = (subExp: string): string => {
  //return calculateLowPriority(calculateHighPriority(subExp));
  for (const priority in priorityOperation) {
    subExp = calculateProcess(priorityOperation[priority], subExp);
  }
  return subExp;
};

const calculate = (expression: string): number => {
  // очистка выражения от пробелов
  expression = expression.replace(/\s+/g, "");
  // будем находить группы до тех пор пока они есть
  // вычислять значение, и заменять в оригинальном выражении
  while (true) {
    // ищем все выражения в скобках
    const groups = expression.match(GROUP_PATTERN);
    // если ничего не нашли прекращаем
    if (!groups) break;
    for (const group of groups) {
      const subExp = _.trim(group, "()");
      const mathResult = calculateSubExp(subExp);
      const startI = expression.indexOf(group);
      const endI = group.length;
      expression =
        expression.slice(0, startI) +
        String(mathResult) +
        expression.slice(startI + endI);
    }
  }
  return Number(calculateSubExp(expression));
};

export default calculate;
