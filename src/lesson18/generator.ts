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

export const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export function* wordGenerator(): Generator<string> {
  const { length } = dictionary;

  while (true) {
    const wordNumber = rand(0, length);
    yield dictionary[wordNumber];
  }
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

export function* fibonacciSequense(length: number) {
  let [prev, current, next] = [0, 0, 1];
  while (length > 0) {
    yield current;
    prev = current;
    current = next;
    next = prev + next;
    length--;
  }
}
