import { mul, div, add, minus, square, fact, exp } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("exp 3 ^ 2 to equal 9", () => {
    expect(exp(3, 2)).toBe(9);
  });

  it("exp 2 ^ -1 to equal 0.5", () => {
    expect(exp(2, -1)).toBe(0.5);
  });

  it("exp 2 ^ 0 to equal 1", () => {
    expect(exp(2, 0)).toBe(1);
  });
  it("exp 0 ^ 0 to throw error", () => {
    expect(() => exp(0, 0)).toThrowError(
      "base and power cannot equal zero at once"
    );
  });
});

describe("unarOperators test cases", () => {
  it("square 5 to equal 25", () => {
    expect(square(5)).toBe(25);
  });

  it("square to equal 0", () => {
    expect(square(0)).toBe(0);
  });

  it("square to equal 0", () => {
    expect(square(0)).toBe(0);
  });

  it("fact 4 to equal 24", () => {
    expect(fact(4)).toBe(24);
  });

  it("fact 0 to equal 1", () => {
    expect(fact(0)).toBe(1);
  });

  it("fact -4 to throw Error", () => {
    expect(() => fact(-4)).toThrow(Error("cannot handle negative number"));
  });

  it("fact 171 to throw Error", () => {
    expect(() => fact(171)).toThrow(
      Error("too large number for factorial operation")
    );
  });
});
