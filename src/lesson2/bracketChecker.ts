export const openBracket = "(";
export const closeBracker = ")";

export const bracketChecker = function (line: string): boolean {
  const stackForBracketCheckArray = line.split(" ");
  const stackForBreaket: string[] = [];

  let correctOrder = true;

  stackForBracketCheckArray.forEach((item) => {
    if (item === openBracket) {
      console.log("bracket push", item);
      stackForBreaket.push(item);
    } else if (item === closeBracker) {
      const bracket = stackForBreaket.pop();
      console.log("bracket pop", bracket);
      if (bracket !== openBracket) {
        correctOrder = false;
      }
    }
  });

  return stackForBreaket.length === 0 && correctOrder;
};
