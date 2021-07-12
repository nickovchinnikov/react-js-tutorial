import { parser } from "./parser";

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
