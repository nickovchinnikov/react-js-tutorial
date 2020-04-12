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

  it("100 ^ -1 + 10 ^ 2", () => {
    const parserResult = parser("100 ^ -1 + 10 ^ 2")

    expect(parserResult).toEqual([100, "^", -1, "+", 10, "^", 2])
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

  it("1^6-8 should throw unexpected string error", () => {
    const parserCall = () => parser("1^6-8")
    const typeError = TypeError("Unexpected string")

    expect(parserCall).toThrow(typeError)
  })
});
