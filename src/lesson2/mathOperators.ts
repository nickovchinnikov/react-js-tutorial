export type DualOperationType = (first: number, second: number) => number;
export type SingleOperationType = (single: number) => number;

export const mul: DualOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: DualOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: DualOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: DualOperationType = (
  first: number,
  second: number
): number => first - second;

export const exp: DualOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial: SingleOperationType = (single : number): number => {
  let result : number;
  result = single > 1 ? single * factorial(single - 1) : 1;
  return result;
}

export const mathOperators: { [key: string]: DualOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": exp,
  "!": factorial 
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": FIRST, 
  "^": SECOND,
  "*": THIRD,
  "/": THIRD,  
  "+": FOURTH,
  "-": FOURTH,
};
