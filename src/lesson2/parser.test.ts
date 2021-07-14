import { parser, isValidNumber, isValidOperator } from "./parser";

describe("isValidNumber correct cases", () => {
  it("prev: +, item: 32", () => {
    expect(isValidNumber("+", 32)).toEqual(true);
  });

  it("prev: undefined, item: 32", () => {
    expect(isValidNumber(undefined, 32)).toEqual(true);
  });

  it("prev: tag, item: 45", () => {
    expect(isValidNumber("tan", 45)).toEqual(true);
  });
});

describe("isValidNumber invalid cases", () => {
  it("prev: 1, item: 32", () => {
    expect(isValidNumber(1, 32)).toEqual(false);
  });

  it("prev: **, item: 32", () => {
    expect(isValidNumber("**", 32)).toEqual(false);
  });

  it("prev: !, item: 45", () => {
    expect(isValidNumber("!", 45)).toEqual(false);
  });
});

describe("isValidOperator correct cases", () => {
  it("prev: 5, item: +", () => {
    expect(isValidOperator(5, "+")).toEqual(true);
  });

  it("prev: [2 + 2], item: *", () => {
    expect(isValidOperator([2, "+", 2], "*")).toEqual(true);
  });

  it("prev: 5, item: !", () => {
    expect(isValidOperator(5, "!")).toEqual(true);
  });

  it("prev: 4, item: **", () => {
    expect(isValidOperator(4, "**")).toEqual(true);
  });
});

describe("isValidOperator invalid cases", () => {
  it("prev: -, item: +", () => {
    expect(isValidOperator("-", "+")).toEqual(false);
  });

  it("prev: sin, item: *", () => {
    expect(isValidOperator("sin", "*")).toEqual(false);
  });

  it("prev: undefined, item: /", () => {
    expect(isValidOperator(undefined, "/")).toEqual(false);
  });
});

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });
});

describe("Parser correct braces cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("(2)", () => {
    expect(parser("( 2 )")).toEqual([[2]]);
  });

  it("(11 + 3) * 2", () => {
    expect(parser("( 11 + 3 ) * 22")).toEqual([[11, "+", 3], "*", 22]);
  });

  it("2 * ((2 + 3) + 6) **", () => {
    expect(parser("2 * ( ( 2 + 3 ) + 6 ) **")).toEqual([
      2,
      "*",
      [[2, "+", 3], "+", 6],
      "**",
    ]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 ! 33 - 2", () => {
    expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
  });

  it("( )", () => {
    expect(() => parser("()")).toThrow(TypeError("Unexpected string"));
  });

  it("2 + 2 )", () => {
    expect(() => parser("2 + 2 )")).toThrow(TypeError("wrong braces amount"));
  });

  it("( 2 + 2 ) )", () => {
    expect(() => parser("( 2 + 2 ) )")).toThrow(
      TypeError("wrong braces amount")
    );
  });

  it("( ( 2 + 2 )", () => {
    expect(() => parser("( ( 2 + 2 )")).toThrow(
      TypeError("wrong braces amount")
    );
  });
});
