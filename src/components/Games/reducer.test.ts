import {
  actions,
  GameStatus,
  reducer,
  initialState,
  firstPlayerMark,
  secondPlayerMark,
} from "./reducer";

describe("Games reducer", () => {
  it("rebuild action", () => {
    expect(
      reducer({ ...initialState, playerMarks: ["1", "2"] }, actions.rebuild())
    ).toEqual({
      ...initialState,
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
      moves: 1,
    });
  });
  it("change status", () => {
    expect(
      reducer(initialState, actions.changeStatus(GameStatus.GameOver))
    ).toEqual({
      ...initialState,
      gameStatus: GameStatus.GameOver,
    });
  });
  it("change winner", () => {
    expect(reducer(initialState, actions.setWinner(firstPlayerMark))).toEqual({
      ...initialState,
      winner: firstPlayerMark,
    });
  });
});
