import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });

  it("[2, ^, -1] should return [0.5]", () => {
    const result = firstPrioritiesCalc([2, "^", -1]);

    expect(result).toEqual([0.5]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });

  it("[2, ^, 3, -, 4, ^, 2] should return [8, -, 16]", () => {
    const result = firstPrioritiesCalc([2, "^", 3, "-", 4, "^", 2]);

    expect(result).toEqual([8, "-", 16]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  const unexpectedStackError = TypeError("Unexpected stack!");
  it("[32, /, 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      unexpectedStackError
    );
  });

  it("[2, ^, 3] should throw unexpected stack error", () => {
    expect(() => secondPrioritiesCalc([2, "^", 3])).toThrow(
      unexpectedStackError
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, +, 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, -, 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, -, 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
