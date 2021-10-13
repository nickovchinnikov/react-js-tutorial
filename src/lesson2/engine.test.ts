import { secondPrioritiesCalc, thirdPrioritiesCalc, fourthPrioritiesCalc, firstPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[5!]", () => {
    expect(firstPrioritiesCalc([5, "!"])).toEqual([120]);
  });
  it("[3! * 6]", () => {
    expect(firstPrioritiesCalc([3, "!", "*", 6])).toEqual([6, "*", 6]);
  });
})

describe("secondPrioritiesCalc simple cases", () => {
  it("[7 ^ 2]", () => {
    expect(secondPrioritiesCalc([7, "^", 2])).toEqual([49]);
  });

  it("[5 ^ 2]", () => {
    expect(secondPrioritiesCalc([5, "^", 2])).toEqual([25]);
  });

  it("[7 ^ 2 * 7]", () => {
    expect(secondPrioritiesCalc([7, "^", 2, "*", 7])).toEqual([49, "*", 7]);
  });
})

describe("thirdPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(thirdPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(thirdPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(thirdPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("secondPrioritiesCalc mixed with third and fourth priorities cases", () => {
  it("[7 + 5 * 2 ^ 3]", () => {
    expect(secondPrioritiesCalc([7, "+", 5, "*", 2, "^", 3])).toEqual([7, "+", 5, "*", 8])
  });  
})

describe("thirdPrioritiesCalc mixed with fourth priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(thirdPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("fourthPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => fourthPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("fourthPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(fourthPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(fourthPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(fourthPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
