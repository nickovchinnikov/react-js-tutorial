import {
  mul,
  div,
  add,
  minus,
  factorial,
  square,
  power,
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

  it("5 factorial to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("5 square to equal 25", () => {
    expect(square(5, 0)).toBe(25);
  });

  it("7 power 2 to equal 49", () => {
    expect(power(7, 2)).toBe(49);
  });
});
