import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  solveSimpleExp,
  simplifyExp,
} from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[2, ^ 3]", () => {
    expect(firstPrioritiesCalc([2, "^", 3])).toEqual([8]);
  });

  it("[3, ^ 2]", () => {
    expect(firstPrioritiesCalc([3, "^", 2])).toEqual([9]);
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

describe("secondrioritiesCalc mixed with second priorities cases", () => {
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

describe("solve simple expressions", () => {
  it("2 + 3 * 5", () => {
    expect(solveSimpleExp("2 + 3 * 5")).toEqual(17);
  });

  it("4 ^ 2 + 4", () => {
    expect(solveSimpleExp("4 ^ 2 + 4")).toEqual(20);
  });
});

describe("simplify expression", () => {
  it("2 **", () => {
    expect(simplifyExp("2 **")).toEqual("2 ^ 2");
  });

  it("2 ** + 4", () => {
    expect(simplifyExp("2 ** + 4")).toEqual("2 ^ 2 + 4");
  });
  it("(2 ** + 4) * 1", () => {
    expect(simplifyExp("(2 ** + 4) * 1")).toEqual("(2 ^ 2 + 4) * 1");
  });
});
