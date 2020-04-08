import { solveSimpleExp, simplifyExp } from "./engine";

export const runner = (line: string): number => {
  let expression = simplifyExp(line);
  let expInBrackets = expression.match(/\(([^\(\)]+)\)/);
  while (expInBrackets !== null) {
    const expPart = expInBrackets[1];
    const answer = solveSimpleExp(expPart);
    expression = expression.replace(expInBrackets[0], `${answer}`);
    expInBrackets = expression.match(/\(([^\(\)]+)\)/);
  }
  return solveSimpleExp(expression);
};
