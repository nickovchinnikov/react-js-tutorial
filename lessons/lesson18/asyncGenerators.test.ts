import {
  createSimpleIterator,
  createSimpleIteratorWithGenerator,
  createSimpleAsyncIterator,
  generateSequence,
} from "./asyncGenerators";

describe("asyncGenerators", () => {
  it("for..of simpleIterator", () => {
    const simpleIterator = createSimpleIterator(1, 5);
    let iterator = 1;
    for (const value of simpleIterator) {
      expect(value).toBe(iterator);
      iterator++;
    }
  });
  it("Spread simpleIterator", () => {
    const simpleIterator = createSimpleIterator(5, 10);
    expect([...simpleIterator]).toStrictEqual([5, 6, 7, 8, 9, 10]);
  });
  it("createSimpleIteratorWithGenerator", () => {
    const simpleIteratorWithGenerator = createSimpleIteratorWithGenerator(
      5,
      10
    );
    expect([...simpleIteratorWithGenerator]).toStrictEqual([5, 6, 7, 8, 9, 10]);
  });
  it("createSimpleAsyncIterator", async () => {
    const simpleIterator = createSimpleAsyncIterator(1, 5);
    let iterator = 1;
    for await (const value of simpleIterator) {
      expect(value).toBe(iterator);
      iterator++;
    }
  });
  it("generateSequence", async () => {
    const simpleAsyncGenerator = generateSequence(1, 5);
    let iterator = 1;
    for await (const value of simpleAsyncGenerator) {
      expect(value).toBe(iterator);
      iterator++;
    }
  });
});
