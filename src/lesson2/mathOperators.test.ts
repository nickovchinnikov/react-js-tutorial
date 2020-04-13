import {
  mul,
  div,
  add,
  minus,
  power,
  square,
  factorial,
} from "./mathOperators";

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

  it("power 4 ^ 2 to equal 16", () => {
    expect(power(4, 2)).toBe(16);
  });

  it("power 100 ^ 0 to equal 1", () => {
    expect(power(100, 0)).toBe(1);
  });

  it("power 5 ^ -1 to equal 0.2", () => {
    expect(power(5, -1)).toBe(0.2);
  });

  it("square 5 to equal 25", () => {
    expect(square(5)).toBe(25);
  });

  it("square -1 to equal 1", () => {
    expect(square(-1)).toBe(1);
  });

  it("square 0 to equal 0", () => {
    expect(square(0)).toBe(0);
  });

  it("factorial -1 to throw error", () => {
    expect(() => factorial(-1)).toThrow(
      TypeError("The factorial function is only defined for nonnegative values")
    );
  });

  it("factorial 1 to equal 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("factorial 3 to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });

  it("factorial 5 to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });
});
