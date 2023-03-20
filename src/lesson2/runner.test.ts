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

  it("5 + 32", () => {
    expect(runner("5 + 32")).toEqual(37);
  });

  it("2 - 32", () => {
    expect(runner("2 - 32")).toEqual(-30);
  });

  it("25 - 5", () => {
    expect(runner("25 - 5")).toEqual(20);
  });

  it("2 / 2", () => {
    expect(runner("2 / 2")).toEqual(1);
  });

  it("12 / 3", () => {
    expect(runner("12 / 3")).toEqual(4);
  });

  it("2 ^ 2", () => {
    expect(runner("2 ^ 2")).toEqual(4);
  });

  it("5 ^ 2", () => {
    expect(runner("5 ^ 2")).toEqual(25);
  });

  it("5 ! + 4", () => {
    expect(runner("5 ! + 4")).toEqual(124);
  });

  it("3 ! + 4", () => {
    expect(runner("3 ! + 4")).toEqual(10);
  });

  it("5 ! * 2", () => {
    expect(runner("5 ! * 2")).toEqual(240);
  });

  it("5 ! / 2", () => {
    expect(runner("5 ! / 2")).toEqual(60);
  });

  it("5 ! / 4", () => {
    expect(runner("5 ! / 4")).toEqual(30);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });

  it("2 + 2 / 2", () => {
    expect(runner("2 + 2 / 2")).toEqual(3);
  });

  it("2 + 2 + 5 !", () => {
    expect(runner("2 + 2 + 5 !")).toEqual(124);
  });

  it("2 ^ 2 / 4", () => {
    expect(runner("2 ^ 2 / 4")).toEqual(1);
  });

  it("2 ** + 2", () => {
    expect(runner("2 ** + 2")).toEqual(6);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("10 - 5 ** + 10 / 5 - 3", () => {
    expect(runner("10 - 5 ** + 10 / 5 - 3")).toEqual(-16);
  });

  it("5 ! - 10 * 10 / 5 - 3", () => {
    expect(runner("5 ! - 10 * 10 / 5 - 3")).toEqual(97);
  });
});
