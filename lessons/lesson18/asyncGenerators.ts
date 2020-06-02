export const createSimpleIterator = (from: number, to: number) => ({
  from,
  to,
  [Symbol.iterator]: () => ({
    next: () => {
      return from <= to ? { done: false, value: from++ } : { done: true };
    },
  }),
});

export const createSimpleIteratorWithGenerator = (
  from: number,
  to: number
) => ({
  *[Symbol.iterator]() {
    for (let value = from; value <= to; value++) {
      yield value;
    }
  },
});

export const createSimpleAsyncIterator = (from: number, to: number) => ({
  [Symbol.asyncIterator]() {
    return {
      async next() {
        await new Promise((resolve) => setTimeout(resolve, 100));

        return from <= to ? { done: false, value: from++ } : { done: true };
      },
    };
  },
});

export async function* generateSequence(start: number, end: number) {
  return {
    async *[Symbol.asyncIterator]() {
      for (let i = start; i <= end; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        yield i;
      }
    },
  };
}
