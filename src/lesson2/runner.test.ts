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

  it("2 ^ 10", () => {
    const result = runner("2 ^ 10");

    expect(result).toEqual(1024);
  });
  it("2 ^ -1", () => {
    const result = runner("2 ^ -1");

    expect(result).toEqual(0.5);
  });
  it("3 **", () => {
    const result = runner("3 **");

    expect(result).toEqual(9);
  });
  it("4 !", () => {
    const result = runner("4 !");

    expect(result).toEqual(24);
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

  it("2 ^ 10 - 100", () => {
    const result = runner("2 ^ 10 - 100");

    expect(result).toEqual(924);
  });
  it("8 + 2 ** / 4", () => {
    const result = runner("8 + 2 ** / 4");

    expect(result).toEqual(9);
  });

  it("3 ! + 2 ** / 4 - 3 !", () => {
    const result = runner("3 ! + 2 ** / 4 - 3 !");

    expect(result).toEqual(1);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("2 ^ 10 - 100 * 20 / 2 + 1", () => {
    const result = runner("2 ^ 10 - 100 * 20 / 2 + 1");

    expect(result).toEqual(25);
  });

  it("10 ** + 4 / 2 ** - 2", () => {
    const result = runner("10 ** + 4 / 2 ** - 2");

    expect(result).toEqual(99);
  });

  it("10 ** + 4 ! / 2 ** - 2 ! * 5", () => {
    const result = runner("10 ** + 4 ! / 2 ** - 2 ! * 5");

    expect(result).toEqual(96);
  });
});
