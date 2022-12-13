export type ScalarOperationType = (first: number, second: number) => number;

const mathOperations: { [key: string]: ScalarOperationType } = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
};

export default mathOperations;
