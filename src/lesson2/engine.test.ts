import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
} from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[3, ^ 4]", () => {
    expect(firstPrioritiesCalc([3, "^", 4])).toEqual([81]);
  });

  it("[3, ^, 0]", () => {
    expect(firstPrioritiesCalc([3, "^", 0])).toEqual([1]);
  });
});

describe("firstPrioritiesCalc mixed with different priorities", () => {
  it("[3, ^ 2 * 2]", () => {
    expect(firstPrioritiesCalc([3, "^", 2, "*", 2])).toEqual([9, "*", 2]);
  });

  it("[25, / 5 ^ 2]", () => {
    expect(firstPrioritiesCalc([25, "/", 5, "^", 2])).toEqual([25, "/", 25]);
  });

  it("[5, + 10 ^ 2 / 2]", () => {
    expect(firstPrioritiesCalc([5, "+", 10, "^", 2, "/", 2])).toEqual([
      5,
      "+",
      100,
      "/",
      2,
    ]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(secondPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(secondPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("secondPrioritiesCalc mixed with third priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(secondPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("thirdPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => thirdPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("thirdPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(thirdPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(thirdPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(thirdPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
