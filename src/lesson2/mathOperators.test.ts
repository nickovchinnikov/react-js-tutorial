import { mul, div, add, minus, factorial, pow, sqr } from "./mathOperators";

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

  it("add 10 + 12 to equal 22", () => {
    expect(add(10, 12)).toBe(22);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("minus 34 - 20 to equal 14", () => {
    expect(minus(34, 20)).toBe(14);
  });

  it("factorial 5 to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("factorial 3 to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });

  it("power 3 * 4 to equal 81", () => {
    expect(pow(3, 4)).toBe(81);
  });

  it("power 5 * 6 to equal 15625", () => {
    expect(pow(5, 6)).toBe(15625);
  });

  it("sqr 6 to equal 36", () => {
    expect(sqr(6)).toBe(36);
  });

  it("sqr 10 to equal 100", () => {
    expect(sqr(10)).toBe(100);
  });
});
