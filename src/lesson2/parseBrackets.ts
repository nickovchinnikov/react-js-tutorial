import { parser } from "./parser";
import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

export const parseBrackets = (line: string): string  => {

var k = 1;

do {
var openBracket = line.lastIndexOf("(");
  if (openBracket < 0) {
    k = 0;
  } 
  else {
    var closeBracket = line.indexOf(")",openBracket);
    var inside = line.slice(openBracket+1,closeBracket);
    var parsed = parser(inside)

    if(parsed === null) {
      throw new TypeError("Unexpected string");
    }

    var zeroPriorities = zeroPrioritiesCalc(parsed)
    var firstPriorities = firstPrioritiesCalc(zeroPriorities)
    var secondPriorities = secondPrioritiesCalc(firstPriorities)

    var changed = secondPriorities

    line = line.substr(0, openBracket) + changed.toString() + line.substr(closeBracket + 1);

  }
} while (k==1)

return line;

}