import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lensPath, set } from "ramda";

import { Coordinates } from "@/rdx/actions";

export type FieldSizeType = [number, number];
export type PlayerMarksType = [string, string];
export type GameFieldType = string[][];

export const PlayerMarks: PlayerMarksType = ["x", "o"];
export const [firstPlayerMark, secondPlayerMark] = PlayerMarks;

export const defaultFieldSize: FieldSizeType = [3, 3];

export type RebuildActionType = PayloadAction<{
  fieldSize: FieldSizeType;
  playerMarks: PlayerMarksType;
  nextTurn: string;
}>;

export type ClickActionType = PayloadAction<Coordinates>;

export const createEmptyGameField = (rows: number, cols: number) =>
  Array.from({ length: rows }).map(() =>
    Array.from({ length: cols }).fill("")
  ) as GameFieldType;

export const initialState: {
  fieldSize: FieldSizeType;
  playerMarks: PlayerMarksType;
  gameField: GameFieldType;
  nextTurn: string;
} = {
  fieldSize: defaultFieldSize,
  playerMarks: PlayerMarks,
  gameField: createEmptyGameField(defaultFieldSize[0], defaultFieldSize[1]),
  nextTurn: firstPlayerMark,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    rebuild: (state, { payload }: RebuildActionType) => ({
      ...state,
      gameField: [],
      ...payload,
    }),
    click: (state, { payload }: ClickActionType) => {
      const { x, y } = payload;
      const { nextTurn, gameField } = state;
      return {
        ...state,
        gameField: set(lensPath([y, x]), nextTurn, gameField),
        nextTurn:
          nextTurn === firstPlayerMark ? secondPlayerMark : firstPlayerMark,
      };
    },
  },
});

export const { reducer, actions } = gameSlice;
