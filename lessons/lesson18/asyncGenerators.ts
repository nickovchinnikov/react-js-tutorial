type SimpleIterator<T> = (from: number, to: number) => T;

export const createSimpleIterator: SimpleIterator<{
  from: number;
  to: number;
  [Symbol.iterator]: () => { next: () => { done: boolean; value?: number } };
}> = (from, to) => ({
  from,
  to,
  [Symbol.iterator]: () => ({
    next: () => {
      return from <= to ? { done: false, value: from++ } : { done: true };
    },
  }),
});

export const createSimpleIteratorWithGenerator: SimpleIterator<{
  [Symbol.iterator]: () => Generator<number>;
}> = (from, to) => ({
  *[Symbol.iterator]() {
    for (let value = from; value <= to; value++) {
      yield value;
    }
  },
});

export const createSimpleAsyncIterator: SimpleIterator<{
  [Symbol.asyncIterator]: () => {
    next: () => Promise<{ done: boolean; value?: number }>;
  };
}> = (from, to) => ({
  [Symbol.asyncIterator]() {
    return {
      async next() {
        await new Promise((resolve) => setTimeout(resolve, 100));

        return from <= to ? { done: false, value: from++ } : { done: true };
      },
    };
  },
});

export async function* generateSequence(
  from: number,
  to: number
): AsyncGenerator<{
  [Symbol.asyncIterator](): AsyncGenerator<number, void, unknown>;
}> {
  return {
    async *[Symbol.asyncIterator]() {
      for (let i = from; i <= to; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        yield i;
      }
    },
  };
}
