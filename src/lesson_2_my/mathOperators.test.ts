import mathOperation from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mathOperation("*", 1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mathOperation("*", 2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(mathOperation("/", 2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(mathOperation("/", 4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(mathOperation("+", 4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(mathOperation("-", 4, 2)).toBe(2);
  });

  it("factorial 5! to equal 120", () => {
    expect(mathOperation("!", 5)).toBe(120);
  });

  it("exponentiation 2 ^ 5 to equal 32", () => {
    expect(mathOperation("^", 2, 5)).toBe(32);
  });

  it("squaring 5** to equal 525", () => {
    expect(mathOperation("**", 5)).toBe(25);
  });
});
