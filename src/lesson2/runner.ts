import { solveSimpleExp, simplifyExp, polishNotationSimplify } from "./engine";
import { scalarOperators, trigonomenticOperators } from "./mathOperators";

const makepolishNotationReg = (): string => {
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
export const runner = (line: string): number => {
  const pnReg = makepolishNotationReg();
  let pnExpression = line.match(pnReg);
  if (pnExpression !== null) {
    let expression = polishNotationSimplify(line);
    pnExpression = expression.match(pnReg);
    while (pnExpression !== null) {
      const expPart = pnExpression[1].trim();
      const pnArray = expPart.split(" ");
      let normalExpression = "";
      if (pnArray.length === 2) {
        normalExpression = pnArray.reverse().join(" ");
      } else {
        normalExpression = [pnArray[0], pnArray[2], pnArray[1]].join(" ");
      }
      const answer = solveSimpleExp(normalExpression);

      expression = expression.replace(pnExpression[0], `${answer}`);
      pnExpression = expression.match(pnReg);
    }
    if (/\s+/g.test(expression)) {
      return solveSimpleExp(expression);
    } else {
      return Number(expression);
    }
  }

  let expression = simplifyExp(line);
  let expInBrackets = expression.match(/\(([^\(\)]+)\)/);
  while (expInBrackets !== null) {
    const expPart = expInBrackets[1].trim();
    const answer = solveSimpleExp(expPart);
    expression = expression.replace(expInBrackets[0], `${answer}`);
    expInBrackets = expression.match(/\(([^\(\)]+)\)/);
  }
  return solveSimpleExp(expression);
};
