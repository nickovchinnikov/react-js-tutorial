import {
  actions,
  reducer,
  initialState,
  firstPlayerMark,
  secondPlayerMark,
  defaultFieldSize,
} from "./reducer";

describe("Games reducer", () => {
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
      gameField: [undefined, [undefined, firstPlayerMark]],
      nextTurn: secondPlayerMark,
    });
  });
});
