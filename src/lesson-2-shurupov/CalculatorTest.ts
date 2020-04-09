import { Calculator } from "./Calculator";

const calculator: Calculator = new Calculator();

describe("Calculator calculate method", () => {
  it("Addition 4 + 5", () => {
    expect(calculator.calculate("4 + 5")).toEqual(9);
  });
  it("Multiplication 8 - 6", () => {
    expect(calculator.calculate("8 - 6")).toEqual(2);
  });
  it("Multiplication 8 * 6", () => {
    expect(calculator.calculate("8*6")).toEqual(48);
  });
  it("Multiplication 25 / 10", () => {
    expect(calculator.calculate("   25    /    10")).toEqual(2.5);
  });
  it("Complicated expression 5*6-7/2", () => {
    expect(calculator.calculate("5*6-7/2")).toEqual(26.5);
  });
  it("Just number 25.001", () => {
    expect(calculator.calculate("  25.001 ")).toEqual(25.001);
  });
  it("Complicated expression with brackets (10 + 30) / (12 - 4)", () => {
    expect(calculator.calculate("(10 + 30) / (12 - 4)")).toEqual(5);
  });
  it("Complicated expression with brackets  (3+3)*11+5*(5+5)", () => {
    expect(calculator.calculate(" (3+3)*11+5*(5+5)")).toEqual(116);
  });
  it("Complicated expression with brackets (6+4)^4", () => {
    expect(calculator.calculate("(6+4)^4")).toEqual(10000);
  });
  it("Factorial 6!", () => {
    expect(calculator.calculate("6!")).toEqual(6 * 5 * 4 * 3 * 2);
  });
  it("Complicated expression (3+3)!", () => {
    expect(calculator.calculate("(3+3)!")).toEqual(6 * 5 * 4 * 3 * 2);
  });
  it("Complicated expression (2+1)!^2", () => {
    expect(calculator.calculate("(2+1)!^2")).toEqual(36);
  });
  it("Complicated expression sqr(6)+sqrt(4)", () => {
    expect(calculator.calculate("sqr(6)+sqrt(4)")).toEqual(38);
  });
});
