import fc from "fast-check";

import { mul, div, add, minus, pow } from "./mathOperators";

describe("Basic MathOperators fast-check", () => {
  it("mul check", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => mul(a, b) === a * b)
    );
  });
  it("div check", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => div(a, b) === a / b)
    );
  });
  it("add check", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => add(a, b) === a + b)
    );
  });
  it("minus check", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => minus(a, b) === a - b)
    );
  });
  it("pow check", () => {
    fc.assert(
      fc.property(
        fc.integer(),
        fc.integer(),
        (a, b) => pow(a, b) === Math.pow(a, b)
      )
    );
  });
});
