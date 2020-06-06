import {
  actions,
  reducer,
  createEmptyGameField,
  initialState,
  firstPlayerMark,
  secondPlayerMark,
  defaultFieldSize,
} from "./reducer";

describe("Games reducer", () => {
  it("createEmptyGameField", () => {
    expect(createEmptyGameField(1, 1)).toEqual([[""]]);
    expect(createEmptyGameField(1, 2)).toEqual([["", ""]]);
    expect(createEmptyGameField(2, 1)).toEqual([[""], [""]]);
  });
  it("rebuild action", () => {
    expect(
      reducer(
        initialState,
        actions.rebuild({
          fieldSize: defaultFieldSize,
          playerMarks: ["1", "2"],
          nextTurn: "1",
        })
      )
    ).toEqual({
      gameField: [],
      fieldSize: defaultFieldSize,
      playerMarks: ["1", "2"],
      nextTurn: "1",
    });
  });
  it("click action", () => {
    expect(reducer(initialState, actions.click({ x: 1, y: 1 }))).toEqual({
      ...initialState,
      gameField: [
        ["", "", ""],
        ["", firstPlayerMark, ""],
        ["", "", ""],
      ],
      nextTurn: secondPlayerMark,
    });
  });
});
