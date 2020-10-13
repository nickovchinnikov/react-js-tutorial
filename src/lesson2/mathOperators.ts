export type ScalarOperationType = (first: number, second: number) => number;
export type AssociativeOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
    first: number,
    second: number
): number => first * second;

export const div: ScalarOperationType = (
    first: number,
    second: number
): number => first / second;

export const add: ScalarOperationType = (
    first: number,
    second: number
): number => first + second;

export const minus: ScalarOperationType = (
    first: number,
    second: number
): number => first - second;

export const exp: ScalarOperationType = (
    first: number,
    second: number
): number => Math.pow(first, second);

export const sqr: AssociativeOperationType = (first: number): number =>
    first * first;

export const fact: AssociativeOperationType = (first: number): number =>
    first != 1 ? first * fact(first - 1) : 1;

export const mathScalarOperators: {
    [key: string]: ScalarOperationType;
} = {
    '*': mul,
    '/': div,
    '+': add,
    '-': minus,
    '^': exp,
};

export const mathAssociativeOperators: {
    [key: string]: AssociativeOperationType;
} = {
    '**': sqr,
    '!': fact,
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
    '**': FIRST,
    '!': FIRST,
    '^': SECOND,
    '*': THIRD,
    '/': THIRD,
    '+': FOURTH,
    '-': FOURTH,
};
