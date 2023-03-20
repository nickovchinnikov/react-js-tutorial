import { parseBrackets } from "./parseBrackets";

describe("parseBrackets correct cases", () => {
  it("(1 + 32) * 2", () => {
    expect(parseBrackets("(1 + 32) * 2")).toEqual("33 * 2");
  });

  it("66 / (6 + 2 * 20)", () => {
    expect(parseBrackets("66 / (6 + 2 * 20)")).toEqual("66 / 46");
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parseBrackets("(1 + 32) - (2 + 2)")).toEqual("33 - 4");
  });

  it("1 + (4 * (2 + 2))", () => {
    expect(parseBrackets("1 + (4 * (2 + 2))")).toEqual("1 + 16");
  });
});

describe("parseBrackets invalid cases", () => {
  it("2 + ((1 + 33 - 2)", () => {
    expect(() => parseBrackets("2 + ((1 + 33 - 2)")).toThrow(
      RangeError("Invalid string length")
    );
  });
});