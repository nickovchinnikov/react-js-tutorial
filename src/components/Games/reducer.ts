import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lensPath, set } from "ramda";

import { Coordinates } from "@/rdx/actions";

import { createEmptyGameField } from "./fieldManager";

export type FieldSizeType = [number, number];
export type PlayerMarksType = [string, string];
export type GameFieldType = string[][];

export const PlayerMarks: PlayerMarksType = ["x", "o"];
export const [firstPlayerMark, secondPlayerMark] = PlayerMarks;

export const defaultFieldSize: FieldSizeType = [3, 3];
const [defaultSizeX, defaultSizeY] = defaultFieldSize;

export type RebuildActionType = PayloadAction<{
  fieldSize: FieldSizeType;
  playerMarks: PlayerMarksType;
  nextTurn: string;
}>;

export type ClickActionType = PayloadAction<Coordinates>;

export const initialState: {
  fieldSize: FieldSizeType;
  playerMarks: PlayerMarksType;
  gameField: GameFieldType;
  nextTurn: string;
  filledOutCount: number;
} = {
  fieldSize: defaultFieldSize,
  playerMarks: PlayerMarks,
  gameField: createEmptyGameField(defaultSizeX, defaultSizeY),
  nextTurn: firstPlayerMark,
  filledOutCount: 0,
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
      const { nextTurn, gameField, filledOutCount } = state;
      return {
        ...state,
        gameField: set(lensPath([y, x]), nextTurn, gameField),
        nextTurn:
          nextTurn === firstPlayerMark ? secondPlayerMark : firstPlayerMark,
        filledOutCount: filledOutCount + 1,
      };
    },
  },
});

export const { reducer, actions } = gameSlice;
