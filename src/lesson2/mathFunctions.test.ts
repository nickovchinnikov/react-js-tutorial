import { sin, cos, tan } from "./mathFunctions";
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
