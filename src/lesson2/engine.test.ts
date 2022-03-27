import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

test("firstPrioritiesCalc: [1, * 32]", () => {
  expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
});

test("firstPrioritiesCalc: [32, / 32]", () => {
  expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
});

test("firstPrioritiesCalc: [32, + 32]", () => {
  expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
});

test("secondPrioritiesCalc: [32, + 32]", () => {
  expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
});

test("secondPrioritiesCalc: [32, - 32]", () => {
  expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
});
