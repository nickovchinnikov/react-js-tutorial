import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zeroPrioritiesCalc,
} from "./engine";

const unexpectedStackError = TypeError("Unexpected stack!");

describe("zeroPrioritiesCalc", () => {
  it("[1, **] should return [1]", () => {
    const result = zeroPrioritiesCalc([1, "**"]);

    expect(result).toEqual([1]);
  });

  it("[2, **] should return [4]", () => {
    const result = zeroPrioritiesCalc([2, "**"]);

    expect(result).toEqual([4]);
  });

  it("[3, !] should return [6]", () => {
    const result = zeroPrioritiesCalc([3, "!"]);

    expect(result).toEqual([6]);
  });

  it("[2, **, +, 3] should return [4, +, 3]", () => {
    const result = zeroPrioritiesCalc([2, "**", "+", 3]);

    expect(result).toEqual([4, "+", 3]);
  });

  it("[8, +, 2, **, /, 5] should return [8, +, 4, /, 5]", () => {
    const result = zeroPrioritiesCalc([8, "+", 2, "**", "/", 5]);

    expect(result).toEqual([8, "+", 4, "/", 5]);
  });

  it("[3, !, +, 4, **, /, 2, !] should return [6, +, 16, /, 2]", () => {
    const result = zeroPrioritiesCalc([3, "!", "+", 4, "**", "/", 2, "!"]);

    expect(result).toEqual([6, "+", 16, "/", 2]);
  });
});

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

  it("[2, **, +, 3] should throw unexpected stack error", () => {
    expect(() => secondPrioritiesCalc([2, "**", "+", 3])).toThrow(
      unexpectedStackError
    );
  });

  it("[2, !, +, 3] should throw unexpected stack error", () => {
    expect(() => secondPrioritiesCalc([2, "!", "+", 3])).toThrow(
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
