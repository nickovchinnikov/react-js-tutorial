import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
  lastPrioritiesCalc,
  calcChunk,
} from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[3 !]", () => {
    expect(firstPrioritiesCalc([3, "!"])).toEqual([6]);
  });

  it("[4 **]", () => {
    expect(firstPrioritiesCalc([4, "**"])).toEqual([16]);
  });

  it("[3 ! !]", () => {
    expect(firstPrioritiesCalc([3, "!", "!"])).toEqual([720]);
  });

  it("[2 ** **]", () => {
    expect(firstPrioritiesCalc([2, "**", "**"])).toEqual([16]);
  });

  it("[3 ! **]", () => {
    expect(firstPrioritiesCalc([3, "!", "**"])).toEqual([36]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[sin 0]", () => {
    expect(secondPrioritiesCalc(["sin", 0])).toEqual([0]);
  });

  it("[tan 0]", () => {
    expect(secondPrioritiesCalc(["tan", 0])).toEqual([0]);
  });
});

describe("secondPrioritiesCalc mixed with different priorities", () => {
  it("[3 + 2 * tan 0 ]", () => {
    expect(secondPrioritiesCalc([3, "+", 2, "*", "tan", 0])).toEqual([
      3,
      "+",
      2,
      "*",
      0,
    ]);
  });
});

describe("thirdPrioritiesCalc simple cases", () => {
  it("[3, ^ 4]", () => {
    expect(thirdPrioritiesCalc([3, "^", 4])).toEqual([81]);
  });

  it("[3, ^, 0]", () => {
    expect(thirdPrioritiesCalc([3, "^", 0])).toEqual([1]);
  });
});

describe("secondPrioritiesCalc mixed with different priorities", () => {
  it("[3, ^ 2 * 2]", () => {
    expect(thirdPrioritiesCalc([3, "^", 2, "*", 2])).toEqual([9, "*", 2]);
  });

  it("[25, / 5 ^ 2]", () => {
    expect(thirdPrioritiesCalc([25, "/", 5, "^", 2])).toEqual([25, "/", 25]);
  });

  it("[5, + 10 ^ 2 / 2]", () => {
    expect(thirdPrioritiesCalc([5, "+", 10, "^", 2, "/", 2])).toEqual([
      5,
      "+",
      100,
      "/",
      2,
    ]);
  });
});

describe("fourthPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(fourthPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(fourthPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(fourthPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("fourthPrioritiesCalc mixed with third priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(fourthPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("lastPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => lastPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("lastPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(lastPrioritiesCalc([32, "+", 32])).toEqual([64]);
  });

  it("[32, - 32]", () => {
    expect(lastPrioritiesCalc([32, "-", 32])).toEqual([0]);
  });

  it("[32, - 32, +, 10]", () => {
    expect(lastPrioritiesCalc([32, "-", 32, "+", 10])).toEqual([10]);
  });
});

describe("calcChunk mixed cases", () => {
  it("[2 + 2 * 2 **]", () => {
    expect(calcChunk([2, "+", 2, "*", 2, "**"])).toEqual([10]);
  });

  it("[3 + sin 90 * 2**]", () => {
    expect(calcChunk([3, "+", "sin", 90, "*", 2, "**"])).toEqual([7]);
  });
});
