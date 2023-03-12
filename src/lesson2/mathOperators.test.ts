import {
  mul,
  div,
  add,
  minus,
  factorial,
  power,
  squire,
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
  it("factorial 5 to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });
  it("power 3 ^ 3 to equal 27", () => {
    expect(power(3, 3)).toBe(27);
  });
  it("squire 3  to equal 9", () => {
    expect(squire(3)).toBe(9);
  });
});
