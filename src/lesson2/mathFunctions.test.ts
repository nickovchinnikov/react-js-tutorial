import { sin, cos, tan, fib } from "./mathFunctions";
import { isFloatEqual } from "./helpers";

describe("Trigonometric functions", () => {
  it("sin(0) to equal 0", () => {
    expect(isFloatEqual(sin(0), 0)).toBe(true);
  });

  it("sin(90) to equal 1", () => {
    expect(isFloatEqual(sin(90), 1)).toBe(true);
  });

  it("cos(0) to equal 1", () => {
    expect(isFloatEqual(cos(0), 1)).toBe(true);
  });

  it("cos(90) to equal 0", () => {
    expect(isFloatEqual(cos(90), 0)).toBe(true);
  });

  it("tan(0) to equal 0", () => {
    expect(isFloatEqual(tan(0), 0)).toBe(true);
  });

  it("tan(90) to equal Infinity", () => {
    expect(tan(90)).toBe(Infinity);
  });
});

describe("fib function", () => {
  it("fib 3 equal 2", () => {
    expect(fib(3)).toBe(2);
  });

  it("fib 6 equal 8", () => {
    expect(fib(6)).toBe(8);
  });

  it("fib -1 to throw Error", () => {
    expect(() => fib(-1)).toThrowError(
      "fib function can handle only positive numbers"
    );
  });
});
