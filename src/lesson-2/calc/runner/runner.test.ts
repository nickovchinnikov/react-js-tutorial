import { runner } from "./runner";

describe("Runner simple cases", () => {
  test("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  test("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  test("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });
});

describe("Runner tripled/mixed cases", () => {
  test("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  test("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  test("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });
});

describe("Runner long cases", () => {
  test("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  test("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });
});
