import { solveExpression, changeExp } from "./engine";
import jestConfig from "../../jest.config";

const openBracket = "(";
const closeBracket = ")";

export const runner = (line: string): number => {
  line = changeExp(line);
  //console.log ('line = ' + line); 
  let arrLine: string[] = line.split(" ");    
  if (arrLine.includes(openBracket)) {     
     let expInBrackets: string[] = arrLine.slice(arrLine.lastIndexOf(openBracket)+1, arrLine.indexOf(closeBracket));
     let result = solveExpression(expInBrackets.join(' '));     
     arrLine.splice(arrLine.lastIndexOf(openBracket), arrLine.indexOf(closeBracket) - arrLine.lastIndexOf(openBracket) + 1, result.toString());     
     return solveExpression(arrLine.join(' '));
  } else {
    return solveExpression(line);
  }    
};
