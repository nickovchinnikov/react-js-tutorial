import {
  bracketsProcessing,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
} from "./engine";

describe("brackets processing simple cases", () => {
  it("(5, +, 4, ), /, (, 5, -, 3, )", () => {
    expect(
      bracketsProcessing(["(", 5, "+", 4, ")", "/", "(", 5, "-", 3, ")"])
    ).toEqual([9, "/", 2]);
  });
});

describe("brackets processing simple cases", () => {
  it("(5+5)", () => {
    expect(bracketsProcessing(["(", 5, "+", 5, ")"])).toEqual([10]);
  });
});

describe("brackets processing simple cases", () => {
  it("sin ( 45 + 1 )", () => {
    expect(bracketsProcessing(["sin", "(", 45, "+", 1, ")"])).toEqual([
      "sin",
      46,
    ]);
  });
});

describe("brackets processing simple cases", () => {
  it("1 + (3 + 2 * (3 + 4))", () => {
    expect(
      bracketsProcessing([
        1,
        "+",
        "(",
        3,
        "+",
        2,
        "*",
        "(",
        3,
        "+",
        4,
        ")",
        ")",
      ])
    ).toEqual([1, "+", 17]);
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("sin 45", () => {
    expect(firstPrioritiesCalc(["sin", 45])).toEqual([0.85]);
  });
  it("cos 45", () => {
    expect(firstPrioritiesCalc(["cos", 45])).toEqual([0.53]);
  });
  it("tan 45", () => {
    expect(firstPrioritiesCalc(["tan", 45])).toEqual([1.62]);
  });
  it("sin 45 + 2", () => {
    expect(firstPrioritiesCalc(["sin", 45, "+", 2])).toEqual([0.85, "+", 2]);
  });
});
describe("secondPrioritiesCalc simple cases", () => {
  it("5, +, 4, /, 1, -, 3, **", () => {
    expect(secondPrioritiesCalc([5, "+", 4, "/", 1, "-", 3, "**"])).toEqual([
      5,
      "+",
      4,
      "/",
      1,
      "-",
      9,
    ]);
  });
  it("3, **", () => {
    expect(secondPrioritiesCalc([3, "**", "+", 4, "^", 3])).toEqual([
      9,
      "+",
      4,
      "^",
      3,
    ]);
  });
});

describe("thirdPrioritiesCalc simple cases", () => {
  it("2, '*', 4, '/', 1", () => {
    expect(thirdPrioritiesCalc([2, "*", 4, "/", 1])).toEqual([8]);
  });
  it("2, '*', 4, '/', 1, -, 2, ^, 4", () => {
    expect(
      thirdPrioritiesCalc([2, "*", 4, "/", 1, "-", 2, "^", 4, "+", 1])
    ).toEqual([8, "-", 16, "+", 1]);
  });
  it("2, '*', 4, '/', 1 - 2", () => {
    expect(thirdPrioritiesCalc([2, "*", 4, "/", 1, "-", 2])).toEqual([
      8,
      "-",
      2,
    ]);
  });
});

describe("fourthPrioritiesCalc simple cases", () => {
  it("2, '+', 4, '-', 1", () => {
    expect(fourthPrioritiesCalc([2, "+", 4, "-", 1])).toEqual(5);
  });
  it("2, '-', 4, '-', 10", () => {
    expect(fourthPrioritiesCalc([2, "-", 4, "-", 10.5])).toEqual(-12.5);
  });
});
