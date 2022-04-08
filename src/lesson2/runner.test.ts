import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });

  it("7 ^ 2", () => {
    expect(runner("7 ^ 2")).toEqual(49);
  });

  it("9 **", () => {
    expect(runner("9 **")).toEqual(81);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3 ^ 2", () => {
    expect(runner("2 + 2 * 3 ^ 2")).toEqual(38);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3 - 3 **", () => {
    expect(runner("20 + 1 * 10 - 5 * 3 - 3 **")).toEqual(6);
  });

  it("5 ^ 2 + 20 - 10 * 10 / 5 - 3 + ! 4", () => {
    expect(runner("5 ^ 2 + 20 - 10 * 10 / 5 - 3 + ! 4")).toEqual(46);
  });
});