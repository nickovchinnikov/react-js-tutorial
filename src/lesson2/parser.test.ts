import { parser } from "./parser";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  /*it("2 ** + 2 / 3", () => {
    expect(parser("2 ** + 2 / 3")).toEqual([2, "**", '+', 2, "/", 3]);
  });*/

  // brackets
  it("(5.2 + 3.2)", () => {
    expect(parser("(5.2 + 3.2)")).toEqual(["(", 5.2, "+", 3.2, ")"])
  })
  it("8 + (6 * 3)", () => {
    expect(parser("8 + (6 * 3)")).toEqual([8, "+", "(", 6, "*", 3, ")"])
  })

  it("7 + (8 + 9 * 2) * 3 - ((1)) / (5 * (5 + 2))", () => {
    expect(parser("7 + (8 + 9 * 2) * 3 - ((1)) / (5 * (5 + 2))")).toEqual([7, "+", "(", 8, "+", 9, "*", 2, ")", "*", 3, "-", 1, "/", "(", 5, "*", "(", 5, "+", 2, ")", ")"])
  })
  it("5 + (3)", () => {
    expect(parser("5 + (3)")).toEqual([5, "+", 3])
  })

  it("5 + (((3)))", () => {
    expect(parser("5 + (3)")).toEqual([5, "+", 3])
  })

  it("5 + ()3)", () => {
    expect(() => parser("5 + ()3)")).toThrow(TypeError("Unexpected string"))
  })
  it("5 + ()3", () => {
    expect(() => parser("5 + ()3")).toThrow(TypeError("Unexpected string"))
  })
  it("5 + )3(", () => {
    expect(() => parser("5 + )3(")).toThrow(TypeError("Unexpected string"))
  })
  it("(5 + 3))", () => {
    expect(() => parser("(5 + 3))")).toThrow(TypeError("Unexpected string"))
  })
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 ! 33 -", () => {
    expect(() => parser("1 ! 33 -")).toThrow(TypeError("Unexpected string"));
  });

  it("** ** **", () => {
    expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
  });
  it("** 2", () => {
    expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
  });

  // brackets
  it("7 + ((8 * 9) - 3", () => {
    expect(() => parser("7 + ((8 * 9) - 3")).toThrow(TypeError("Unexpected string"));
  })

  it("7 + (8 * 9)) - 3", () => {
    expect(() => parser("7 + (8 * 9)) - 3")).toThrow(TypeError("Unexpected string"));
  })

  it("7 + (8 * 9)) - 3", () => {
    expect(() => parser("7 + (8 * 9)) - 3")).toThrow(TypeError("Unexpected string"));
  })

  it("7 + 2 () + 1", () => {
    expect(() => parser("7 + 2 () + 1")).toThrow(TypeError("Unexpected string"));
  })
});
