import {
  mul,
  div,
  add,
  minus,
  pow,
  square,
  factorial,
  sin,
  cos,
  tan,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 3)).toBe(3);
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

  it("pow 2 in 3 equal 8", () => {
    expect(pow(2, 3)).toBe(8);
  });

  it("square 4 equal 16", () => {
    expect(square(4)).toBe(16);
  });

  it("square 2 equal 4", () => {
    expect(square(2)).toBe(4);
  });

  it("factorial 5 equal 25", () => {
    expect(factorial(5)).toBe(25);
  });

  it("sin 45 equal 0.82", () => {
    expect(sin(45)).toBe(0.85);
  });

  it("sin 45 equal 0.82", () => {
    expect(sin(45)).toBe(0.85);
  });

  it("cos 45 equal 0.53", () => {
    expect(cos(45)).toBe(0.53);
  });

  it("tan 45 equal 0.53", () => {
    expect(tan(45)).toBe(1.62);
  });
});
