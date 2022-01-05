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

  it("5 !", () => {
    expect(runner("5 !")).toEqual(120);
  });

  it("5 **", () => {
    expect(runner("5 **")).toEqual(25);
  });

  it("7 ^ 2", () => {
    expect(runner("7 ^ 2")).toEqual(49);
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

  it("5 ! * 2 + 10", () => {
    expect(runner("5 ! * 2 + 10")).toEqual(250);
  });

  it("5 ** + 10", () => {
    expect(runner("5 ** + 10")).toEqual(35);
  });

  it("7 ^ 2 * 10", () => {
    expect(runner("7 ^ 2 * 10")).toEqual(490);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("2 ^ 2 ! ^ 2", () => {
    expect(runner("2 ^ 2 ! ^ 2")).toEqual(16);
  });
});

describe("Parser brackets cases", () => {
  it("( 2 + 2 ) * ( 2 + 2 )", () => {
    expect(runner("( 2 + 2 ) * ( 2 + 2 )")).toEqual(16);
  });

  it("( ( 2 + 2 ) * ( 2 + 2 ) + 1 )", () => {
    expect(runner("( ( 2 + 2 ) * ( 2 + 2 ) + 1 )")).toEqual(17);
  });

  it("2 ^ ( ( 2 + 1 ) * ( 2 + 1 ) + 1 )", () => {
    expect(runner("2 ^ ( ( 2 + 1 ) * ( 2 + 1 ) + 1 )")).toEqual(1024);
  });
});
