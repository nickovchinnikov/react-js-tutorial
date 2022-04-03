import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
} from "./engine";

test("firstPrioritiesCalc: [4, ^, 2]", () => {
  expect(firstPrioritiesCalc([4, "^", 2])).toEqual([16]);
});

test("firstPrioritiesCalc: [2, ^, 2, +, 4]", () => {
  expect(firstPrioritiesCalc([2, "^", 2, "+", 4])).toEqual([4, "+", 4]);
});

test("secondPrioritiesCalc: [1, * 32]", () => {
  expect(secondPrioritiesCalc([1, "*", 32])).toEqual([32]);
});

test("secondPrioritiesCalc: [32, / 32]", () => {
  expect(secondPrioritiesCalc([32, "/", 32])).toEqual([1]);
});

test("thirdPrioritiesCalc: [32, + 32]", () => {
  expect(thirdPrioritiesCalc([32, "+", 32])).toEqual(64);
});

test("thirdPrioritiesCalc: [32, - 32]", () => {
  expect(thirdPrioritiesCalc([32, "-", 32])).toEqual(0);
});
