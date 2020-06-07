import {
  createEmptyGameField,
  getCols,
  getDiagonals,
  getMarkCount,
  getInfoAboutGameField,
} from "./fieldManager";

const realGamefield = [
  ["x", "x", "x"],
  ["y", "y", "y"],
  ["x", "x", "y"],
];

describe("Games saga", () => {
  it("createEmptyGameField", () => {
    expect(createEmptyGameField(1, 1)).toEqual([[""]]);
    expect(createEmptyGameField(1, 2)).toEqual([["", ""]]);
    expect(createEmptyGameField(2, 1)).toEqual([[""], [""]]);
  });
  it("getCols", () => {
    expect(
      getCols([
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
      ])
    ).toEqual([
      ["11", "21", "31"],
      ["12", "22", "32"],
      ["13", "23", "33"],
    ]);
  });
  it("getDiagonals", () => {
    expect(
      getDiagonals([
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
      ])
    ).toEqual([
      ["11", "22", "33"],
      ["13", "22", "31"],
    ]);
  });
  it("getMarksCount", () => {
    const cols = getCols(realGamefield);
    const diag = getDiagonals(realGamefield);

    expect(getMarkCount(realGamefield, "x")).toEqual([3, 0, 2]);
    expect(getMarkCount(realGamefield, "y")).toEqual([0, 3, 1]);
    expect(getMarkCount(cols, "x")).toEqual([2, 2, 1]);
    expect(getMarkCount(diag, "y")).toEqual([2, 1]);
  });
  it("getInfoAboutGameField", () => {
    expect(getInfoAboutGameField(realGamefield, "y")).toEqual([
      0,
      3,
      1,
      1,
      1,
      2,
      2,
      1,
    ]);
  });
});
