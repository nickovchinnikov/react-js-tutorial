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

  it("1 + 8 - 3 ^ 2", () => {
    expect(parser("1 + 8 - 3 ^ 2")).toEqual([1, "+", 8, "-", 3, "^", 2]);
  });

  it("sin 30 + cos 60", () => {
    expect(parser("sin 30 + cos 60")).toEqual(["sin", 30, "+", "cos", 60]);
  });

  it("3! + 7", () => {
    expect(parser("3 ! + 7")).toEqual([3, "!", "+", 7]);
  });

  it("tg 30 + 5 - ctg 7", () => {
    expect(parser("tg 30 + 5 - ctg 7")).toEqual([
      "tg",
      30,
      "+",
      5,
      "-",
      "ctg",
      7,
    ]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 + cos - 2", () => {
    expect(() => parser("1 + cos - 2")).toThrow(TypeError("Unexpected string"));
  });

  it("1 + cos tg 2", () => {
    expect(() => parser("1 + cos tg 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 !+ 33 - 2", () => {
    expect(() => parser("1 !+ 33 - 2")).toThrow(TypeError("Unexpected string"));
  });
});
