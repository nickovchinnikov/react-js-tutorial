export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (number: number) => number;

const binaryOperations: {
  [key: string]: ScalarOperationType;
} = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
  "^": (a: number, b: number): number => Math.pow(a, b),
};

const unaryOperations: {
  [key: string]: UnaryOperationType;
} = {
  "**": (a: number): number => binaryOperations["*"](a, a),
  "!": (a: number): number => {
    let f = 1;
    for (let i = 1; i <= a; i++) {
      f *= i;
    }
    return f;
  },
};

const mathOperation = (operator: string, a: number, b?: number): number => {
  if (b) {
    return binaryOperations[operator](a, b);
  } else {
    console.log(operator);
    console.log(a);
    console.log(unaryOperations[operator]);
    return unaryOperations[operator](a);
  }
};

export default mathOperation;
