import { runner, normalMode, pnMode, makepolishNotationReg } from "./runner";

describe("Runner normal mode simple cases", () => {
  it("1 * 32", () => {
    expect(normalMode("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(normalMode("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(normalMode("2 + 32")).toEqual(34);
  });
});

describe("Runner normal mode simple mix cases", () => {
  it("2 * 2 * 3", () => {
    expect(normalMode("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(normalMode("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(normalMode("2 + 2 * 3")).toEqual(8);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });
});

describe("Runner brackets cases", () => {
  it("(2 + 3) * ((1 + 7 * (5 + 3)))", () => {
    expect(runner("(2 + 3) * ((1 + 7 * (5 + 3)))")).toEqual(285);
  });

  it("(1 + 5) ^ 2", () => {
    expect(runner("(1 + 5) ^ 2")).toEqual(36);
  });
});

describe("Runner polish notation mode", () => {
  it("5 3 6 * +_6 3 / - 7 +", () => {
    expect(pnMode("5 3 6 * + 6 3 / - 7 +")).toEqual(28);
  });

  it("30 sin", () => {
    expect(pnMode("30 sin")).toEqual(0.5);
  });

  it("30 sin 60 cos +", () => {
    expect(pnMode("30 sin 60 cos +")).toEqual(1);
  });
});

describe("polish notation reg expression test", () => {
  it("get polish notation reg expression", () => {
    expect(makepolishNotationReg()).toEqual(
      /(((\d+|\d+\.\d+)\s(\d+|\d+\.\d+)\s(\*|\/|\+|\-|\^|\!))|((\d+|\d+\.\d+)\s(sin|cos|tg|ctg)))/
    );
  });
});
