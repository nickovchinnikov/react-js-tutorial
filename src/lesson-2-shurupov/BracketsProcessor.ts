export class BracketsProcessor {
  public openBrackets(expression: string): string {
    return expression.substr(1, expression.length - 2);
  }

  public isInBrackets(expression: string): boolean {
    const containsBrackets =
      expression.indexOf("(") == 0 &&
      expression.lastIndexOf(")") == expression.length - 1;
    if (!containsBrackets) {
      return false;
    }
    let openBrackets = 0;
    for (let i = 0; i < expression.length; i++) {
      const char: string = expression[i];
      if (char == "(") {
        openBrackets++;
      }
      if (char == ")") {
        openBrackets--;
        if (openBrackets == 0 && i < expression.length - 1) {
          return false;
        }
      }
    }
    return true;
  }
}
