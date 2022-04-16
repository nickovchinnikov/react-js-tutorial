import {
  getValueFunctionMul,
  getValueFunctionDiv,
  getValueFunctionAdd,
  getValueFunctionMinus,
  getValueFunctionExponentiation,
  getValueFunctionSquaring,
  getValueFunctionFactorial,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("getValueFunctionMul 1 * 2 to equal 2", () => {
    expect(getValueFunctionMul(1, 2)).toBe(2);
  });

  it("getValueFunctionMul 2 * 2 to equal 4", () => {
    expect(getValueFunctionMul(2, 2)).toBe(4);
  });

  it("getValueFunctionDiv 2 / 2 to equal 1", () => {
    expect(getValueFunctionDiv(2, 2)).toBe(1);
  });

  it("getValueFunctionDiv 4 / 2 to equal 2", () => {
    expect(getValueFunctionDiv(4, 2)).toBe(2);
  });

  it("getValueFunctionAdd 4 + 2 to equal 6", () => {
    expect(getValueFunctionAdd(4, 2)).toBe(6);
  });

  it("getValueFunctionMinus 4 - 2 to equal 2", () => {
    expect(getValueFunctionMinus(4, 2)).toBe(2);
  });

  it("getValueFunctionExponentiation 2 ^ 3 to equal 8", () => {
    expect(getValueFunctionExponentiation(2, 3)).toBe(8);
  });

  it("getValueFunctionSquaring 5 ** to equal 25", () => {
    expect(getValueFunctionSquaring(5)).toBe(25);
  });

  it("getValueFunctionFactorial ! 5 to equal 120", function () {
    expect(getValueFunctionFactorial(5)).toBe(120);
  });
});
