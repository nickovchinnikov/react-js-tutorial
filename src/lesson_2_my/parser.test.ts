import calculate from "./parser";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(calculate("1 + 32")).toEqual(33);
  });

  it("11 + 3 * 22", () => {
    expect(calculate("11 + 3 * 22")).toEqual(77);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(calculate("1 + 32 - 2 + 2")).toEqual(29);
  });
});
