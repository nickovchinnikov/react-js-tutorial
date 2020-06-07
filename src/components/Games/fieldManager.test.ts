import {
  createEmptyGameField,
  getCols,
  getMainDiagonals,
  getDiagonals,
  getAllDiagonals,
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
  it("getMainDiagonals", () => {
    expect(
      getMainDiagonals([
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
      ])
    ).toEqual([
      ["11", "22", "33"],
      ["13", "22", "31"],
    ]);
  });
  it("getDiagonals", () => {
    expect(
      getDiagonals([
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
      ])
    ).toEqual([["7"], ["4", "8"], ["1", "5", "9"], ["2", "6"], ["3"]]);
  });
  it("getDiagonals top to bottom", () => {
    expect(
      getDiagonals(
        [
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"],
        ],
        false
      )
    ).toEqual([["1"], ["2", "4"], ["3", "5", "7"], ["6", "8"], ["9"]]);
  });
  it("getAllDiagonals", () => {
    expect(
      getAllDiagonals([
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
      ])
    ).toEqual([
      ["7"],
      ["4", "8"],
      ["1", "5", "9"],
      ["2", "6"],
      ["3"],
      ["1"],
      ["2", "4"],
      ["3", "5", "7"],
      ["6", "8"],
      ["9"],
    ]);
  });
  it("getMarksCount", () => {
    const cols = getCols(realGamefield);
    const diag = getMainDiagonals(realGamefield);

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
      0,
      1,
      2,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
    ]);
  });
});
