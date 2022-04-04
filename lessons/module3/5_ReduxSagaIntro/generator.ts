import { dictionary } from "./dictionary";

export function* generateSequence(): Generator<number> {
  yield 1;
  yield 2;
  return 3;
}

export function* generateSequenceYieldOnly(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

export function* longIterator(): Generator<number> {
  let i = 0;
  while (true) {
    yield ++i;
    if (i > 100) {
      return i;
    }
  }
}

export function* generateRange(start: number, end: number): Generator<number> {
  for (let i = start; i <= end; i++) yield i;
}

export function* smallRange(): Generator<number> {
  yield* generateRange(1, 3);
}

export function* middleRange(): Generator<number> {
  yield* generateRange(3, 10);
}

export function* middleRange2(): Generator<number> {
  yield* generateRange(3, 5);
  yield* generateRange(6, 10);
}

export const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export function* wordGenerator(): Generator<string> {
  const { length } = dictionary;

  while (true) {
    const wordNumber = rand(0, length - 1);
    yield dictionary[wordNumber];
  }
}

export function* getWord(): Generator<string | number[]> {
  const idx = yield [...dictionary.keys()];
  yield dictionary[idx as number];
}

export function* dataConsumer(): Generator<undefined, string[]> {
  const result = ["Started"];
  // console.warn(result);
  result.push(`1. ${yield}`); // (A)
  result.push(`2. ${yield}`);
  return result;
}

export const passwordGenerator = (countWords: number): string => {
  const generator = wordGenerator();
  let password = "";
  for (let i = 0; i < countWords; i++) {
    const { value: nextWord } = generator.next();
    password = `${password}${nextWord}`;
  }
  return password;
};

// Time complexity O(N)
export function* fibonacciSequense(length: number): Generator<number> {
  let [prev, current, next] = [0, 0, 1];
  while (length > 0) {
    yield current;
    prev = current;
    current = next;
    next = prev + next;
    length--;
  }
}

// Time complexity https://www.desmos.com/calculator/g8ojgsx31c
export function* strangeZeroOneSequence(length: number): Generator<number> {
  for (let counter = 0; counter < length; counter++) {
    let iterator = 0;
    yield iterator;

    while (iterator <= counter) {
      yield 1;
      iterator++;
    }
  }
}

// Linear memory consumption
export const strangeZeroOneSequence2 = (length: number): string => {
  let [result, chunk] = ["", 0];
  // One single loop till the end O(N)
  for (let i = 0; i < length; i++) {
    chunk += Math.pow(2, i);
    // Just binary data casting, that's O(1)
    result += `0${chunk.toString(2)}`;
  }
  return result;
};

export class BinaryTree {
  constructor(
    private value: string,
    private left?: BinaryTree,
    private right?: BinaryTree
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  /** Prefix iteration */
  *[Symbol.iterator](): Generator<string> {
    yield this.value;
    if (this.left) {
      yield* this.left;
    }
    if (this.right) {
      yield* this.right;
    }
  }
}

type CouroutineType<T> = (
  generatorFunction: (...args: T[]) => Generator
) => (...args: T[]) => Generator<T>;

/**
 * Returns a function that, when called,
 * returns a generator object that is immediately
 * ready for input via `next()`
 */
export const coroutine: CouroutineType<unknown> = (generatorFunction) => (
  ...args
) => {
  const generatorObject = generatorFunction(...args);
  generatorObject.next();
  return generatorObject;
};

const gen = function* () {
  const result = `First input: ${yield}`;
  return result;
};

export const wrapped = coroutine(gen);

wrapped().next("hello!");
