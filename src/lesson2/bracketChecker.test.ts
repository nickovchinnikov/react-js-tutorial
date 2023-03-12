import { bracketChecker } from "./bracketChecker";

describe("bracketChecker correct cases", () => {
  it("2 ( and 2 )", () => {
    expect(bracketChecker("( 5 + ( 5 + 5 ) )")).toEqual(true);
  });
});

describe("bracketChecker incorrect cases, ", () => {
  it("to many )", () => {
    expect(bracketChecker("( 5 + ( 5 + 5 ) ) )")).toEqual(false);
  });

  it("to many (", () => {
    expect(bracketChecker("( 5 + ( 5 + 5  )")).toEqual(false);
  });
});
