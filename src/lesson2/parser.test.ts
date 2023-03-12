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
  it("sequence of two single operator", () => {
    expect(parser("3 ! **")).toEqual([3, "!", "**"]);
  });
  it("Expression with pracket", () => {
    expect(parser("5 + ( 6 + 5 )")).toEqual([5, "+", "(", 6, "+", 5, ")"]);
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

  it("Incorrect bracket", () => {
    expect(() => parser("1 ( 4 + 4 )")).toThrow(TypeError("Unexpected string"));
  });
});
