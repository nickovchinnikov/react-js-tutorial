// import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

// test("firstPrioritiesCalc: [1, * 32]", () => {
//     expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
// });

// test("firstPrioritiesCalc: [32, / 32]", () => {
//   expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
// });

// // test("firstPrioritiesCalc: [32, + 32]", () => {
// //   expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
// // });

// test("secondPrioritiesCalc: [32, + 32]", () => {
//   expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
// });

// test("secondPrioritiesCalc: [32, - 32]", () => {
//   expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
// });

// test("secondPrioritiesCalc: [32, x 32]", () => {
//   expect(secondPrioritiesCalc([32, "x", 32])).toEqual(0);
// });

import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

const tableFirst = [
  [1, "*", 32, 32],
  [32, "/", 32, 1],
  [32, "**", 0, 1024],
  [32, "^", 2, 1024],
  [6, "!", 0, 720],
];

const tableSecond = [
  [32, "+", 32, 64],
  [32, "-", 32, 0],
];

test.each(tableFirst)(
  "firstPrioritiesCalc(%s, %s, %s)",
  (a, operator, b, result) => {
    expect(firstPrioritiesCalc([a, operator, b])).toEqual([result]);
  }
);

test.each(tableSecond)(
  "secondPrioritiesCalc(%s, %s, %s)",
  (a, operator, b, result) => {
    expect(secondPrioritiesCalc([a, operator, b])).toEqual(result);
  }
);
