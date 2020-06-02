import {
  mul,
  div,
  add,
  minus,
  pow,
  sin,
  cos,
  tg,
  ctg,
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

  it("pow 2 ^ 3 to equal 8", () => {
    expect(pow(2, 3)).toBe(8);
  });

  it("3! to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });
});

describe("triginimetric operations test cases", () => {
  it("sin 30", () => {
    expect(sin(30)).toBe(0.5);
  });

  it("sin 0", () => {
    expect(sin(0)).toBe(0);
  });

  it("cos 60", () => {
    expect(cos(60)).toBe(0.5);
  });

  it("cos 0", () => {
    expect(cos(0)).toBe(1);
  });

  it("tg 60", () => {
    expect(tg(60)).toBe(1.73);
  });

  it("tg 0", () => {
    expect(tg(0)).toBe(0);
  });

  it("ctg 90", () => {
    expect(ctg(90)).toBe(0);
  });

  it("ctg 1", () => {
    expect(ctg(1)).toBe(50);
  });
});
