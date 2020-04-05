import { parser } from "./parser";

test("parser: 1 + 32", () => {
  expect(parser("1 + 32")).toEqual([1, "+", 32]);
});

test("parser: 11 + 3 * 22", () => {
  expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
});

test("parser: 1 + 32 - 2 + 2", () => {
  expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
});

test("parser: 1 + + 33 - 2", () => {
  expect(() => parser("1 + + 33 - 2")).toThrow(TypeError("Unexpected string"));
});

test("parser: 1 ! 33 - 2", () => {
  expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
});
