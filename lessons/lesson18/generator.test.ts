import {
  generateSequence,
  generateSequenceYieldOnly,
  longIterator,
  generateRange,
  smallRange,
  middleRange,
  middleRange2,
  rand,
  wordGenerator,
  getWord,
  passwordGenerator,
  fibonacciSequense,
  strangeZeroOneSequence,
  BinaryTree,
  dataConsumer,
} from "./generator";
import { dictionary } from "./dictionary";

describe("Generators Intro", () => {
  it("Step by step run", () => {
    const generator = generateSequence();

    const firstStep = generator.next();
    const secondStep = generator.next();
    const thirdStep = generator.next();

    expect(firstStep.value).toBe(1);
    expect(firstStep.done).toBe(false);

    expect(secondStep.value).toBe(2);
    expect(firstStep.done).toBe(false);

    expect(thirdStep.value).toBe(3);
    expect(thirdStep.done).toBe(true);
  });

  it("spread generateSequence", () => {
    const generator = generateSequence();
    expect([...generator]).toStrictEqual([1, 2]);
  });

  it("spread generateSequenceYieldOnly", () => {
    const generator = generateSequenceYieldOnly();
    expect([...generator]).toStrictEqual([1, 2, 3]);
  });

  it("for..of run", () => {
    const generator = generateSequence();
    let iterator = 1;
    for (const value of generator) {
      expect(value).toBe(iterator);
      iterator++;
    }
  });
  it("infifityIterator run", () => {
    const generator = longIterator();

    const firstStep = generator.next();
    generator.next();
    generator.next();
    const fourthStep = generator.next();

    expect(firstStep.value).toBe(1);
    expect(firstStep.done).toBe(false);

    expect(fourthStep.value).toBe(4);
    expect(fourthStep.done).toBe(false);

    let iterator = 4;
    for (const value of generator) {
      iterator++;
      expect(value).toBe(iterator);
    }

    expect(iterator).toBe(101);
  });
  it("generateRange run", () => {
    const generator = generateRange(10, 15);
    expect([...generator]).toStrictEqual([10, 11, 12, 13, 14, 15]);
  });
  it("smallRange run", () => {
    const generator = smallRange();
    expect([...generator]).toStrictEqual([1, 2, 3]);
  });
  it("middleRange run", () => {
    const generator = middleRange();
    expect([...generator]).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("middleRange2 run", () => {
    const generator = middleRange2();
    expect([...generator]).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("rand between range", () => {
    const randNumber = rand(0, 3);
    const result = [0, 1, 2, 3].includes(randNumber);
    expect(result).toBe(true);
  });
  it("wordGenerator", () => {
    const generator = wordGenerator();
    const firstResult = generator.next();
    const firstResultCheck = dictionary.includes(firstResult.value);

    const secondResult = generator.next();
    const secondResultCheck = dictionary.includes(secondResult.value);

    expect(firstResultCheck && secondResultCheck).toBe(true);
  });
  it("getWord", () => {
    const generator = getWord();
    const { value: listKeys } = generator.next();
    const { value: word } = generator.next(listKeys[5]);
    expect(word).toBe("Actons");
  });
  it("dataConsumer", () => {
    const generator = dataConsumer();
    expect(generator.next()).toStrictEqual({ value: undefined, done: false });
    expect(generator.next("a")).toStrictEqual({
      value: undefined,
      done: false,
    });
    expect(generator.next("b")).toStrictEqual({
      value: ["Started", "1. a", "2. b"],
      done: true,
    });
  });
  it("passwordGenerator", () => {
    const oneWord = passwordGenerator(1);
    const fourWord = passwordGenerator(4);
    expect(/([A-Z]{1}[a-z]+){1}/.test(oneWord)).toBe(true);
    expect(/([A-Z]{1}[a-z]+){4}/.test(fourWord)).toBe(true);
  });
  it("fibonacciSequense", () => {
    const generator = fibonacciSequense(10);
    const array = [...generator];
    expect(array).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  it("01 sequence", () => {
    const generator = strangeZeroOneSequence(1);
    const array = [...generator];
    expect(array).toStrictEqual([0, 1]);
  });
  it("01011011101111 sequence", () => {
    const generator = strangeZeroOneSequence(4);
    const array = [...generator];
    expect(array.join("")).toBe("01011011101111");
  });
  it("BinaryTree", () => {
    const tree = new BinaryTree(
      "a",
      new BinaryTree("b", new BinaryTree("c"), new BinaryTree("d")),
      new BinaryTree("e")
    );
    const array = [...tree];
    expect(array).toStrictEqual(["a", "b", "c", "d", "e"]);
  });
});
