import {
  actions,
  GameStatus,
  reducer,
  initialState,
  firstPlayerMark,
  secondPlayerMark,
} from "./reducer";

import { createEmptyGameField } from "./fieldManager";

describe("Games reducer", () => {
  it("rebuild action", () => {
    const fieldSize: [number, number] = [9, 9];
    const playerMarks: [string, string] = ["1", "2"];
    expect(
      reducer({ ...initialState, playerMarks, fieldSize }, actions.rebuild())
    ).toEqual({
      ...initialState,
      gameField: createEmptyGameField(...fieldSize),
      playerMarks: ["1", "2"],
      fieldSize: [9, 9],
    });
  });
  it("createGameWithParams", () => {
    const fieldSize: [number, number] = [6, 6];
    const playerMarks: [string, string] = ["1", "2"];
    expect(
      reducer(
        { ...initialState },
        actions.createGameWithParams({
          playerMarks,
          nextTurn: "1",
          fieldSize,
        })
      )
    ).toEqual({
      ...initialState,
      playerMarks,
      nextTurn: "1",
      fieldSize,
      gameField: createEmptyGameField(...fieldSize),
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
  it("click action when game over", () => {
    expect(
      reducer(
        { ...initialState, gameStatus: GameStatus.GameOver },
        actions.click({ x: 1, y: 1 })
      )
    ).toEqual({
      ...initialState,
      gameStatus: GameStatus.GameOver,
      gameField: createEmptyGameField(...initialState.fieldSize),
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
