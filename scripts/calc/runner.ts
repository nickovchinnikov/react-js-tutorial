import { solveSimpleExp, simplifyExp } from "./engine";
import { scalarOperators, trigonomenticOperators } from "./mathOperators";

export const makepolishNotationReg = (): RegExp => {
  const scalarPart = Object.keys(scalarOperators).reduce(
    (reg, value, index) => {
      return `${reg}${index !== 0 ? "|" : ""}\\${value}`;
    },
    ""
  );
  const trigonometricPart = Object.keys(trigonomenticOperators).reduce(
    (reg, value, index) => {
      return `${reg}${index !== 0 ? "|" : ""}${value}`;
    },
    ""
  );
  const reg = `(((\\d+|\\d+\\.\\d+)\\s(\\d+|\\d+\\.\\d+)\\s(${scalarPart}))|((\\d+|\\d+\\.\\d+)\\s(${trigonometricPart})))`;
  return new RegExp(reg);
};

export const pnMode = (
  line: string,
  pnReg: RegExp = makepolishNotationReg()
): number => {
  const pnSolve = (pnExp: Array<string> | null, exp: string): number => {
    if (pnExp === null) {
      return Number(exp);
    }
    const expPart = pnExp[1].trim();

    const pnArray = expPart.split(" ");
    let normalExpression = "";
    if (pnArray.length === 2) {
      normalExpression = pnArray.reverse().join(" ");
    } else {
      normalExpression = [pnArray[0], pnArray[2], pnArray[1]].join(" ");
    }

    const answer = solveSimpleExp(normalExpression);
    const expression = exp.replace(pnExp[0], `${answer}`);
    return pnSolve(expression.match(pnReg), expression);
  };
  const expression = simplifyExp(line, false);
  const pnExpression = expression.match(pnReg);
  return pnSolve(pnExpression, expression);
};

export const normalMode = (line: string): number => {
  const solveBreackets = (
    expInBrackets: Array<string> | null,
    exp: string
  ): number => {
    if (expInBrackets === null) {
      return solveSimpleExp(exp);
    }
    const expPart = expInBrackets[1].trim();
    const answer = solveSimpleExp(expPart);
    return solveBreackets(
      exp.match(/\(([^\(\)]+)\)/),
      exp.replace(expInBrackets[0], `${answer}`)
    );
  };
  const expression = simplifyExp(line);
  const expInBrackets = expression.match(/\(([^\(\)]+)\)/);
  return solveBreackets(expInBrackets, expression);
};

export const runner = (line: string): number => {
  const pnReg = makepolishNotationReg();
  if (line.match(pnReg) !== null) {
    return pnMode(line, pnReg);
  }
  return normalMode(line);
};
