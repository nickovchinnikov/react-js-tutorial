import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("20 / 2", () => {
    expect(runner("20 / 2")).toEqual(10);
  });

  it("3 ^ 3", () => {
    expect(runner("3 ^ 3")).toEqual(27);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });

  it("100 - 20", () => {
    expect(runner("100 - 20")).toEqual(80);
  });

  it("5!", () => {
    expect(runner("5!")).toEqual(120);
  });

  it("2**", () => {
    expect(runner("2**")).toEqual(4);
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

  it("2 ^ 3 + 2**", () => {
    expect(runner("2 ^ 3 + 2**")).toEqual(12);
  });

  it("5! + 4**", () => {
    expect(runner("5! + 4**")).toEqual(136);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("(((2+2) + 3*3 + 2) + 10 / 2) ^ 3 + 3** - 5!", () => {
    expect(runner("(((2+2) + 3*3 + 2) + 10 / 2) ^ 3 + 3** - 5!")).toEqual(7889);
  });
});

describe("Runner group cases", () => {
  it("(2 + 2) * 3", () => {
    expect(runner("(2 + 2) * 3")).toEqual(12);
  });

  it("(10 + 10) / (4 - 2)", () => {
    expect(runner("(10 + 10) / (4 - 2)")).toEqual(10);
  });

  it("((2 + 2) / 4 ) ^ 2", () => {
    expect(runner("((2 + 2) / 4 ) ^ 2")).toEqual(1);
  });
});
