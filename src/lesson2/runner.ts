import calculate from "./parser";

export const runner = (line: string): number => {
  return calculate(line);
};
