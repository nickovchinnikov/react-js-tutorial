import mathOperations from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mathOperations["*"](1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mathOperations["*"](2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(mathOperations["/"](2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(mathOperations["/"](4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(mathOperations["+"](4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(mathOperations["-"](4, 2)).toBe(2);
  });
});
