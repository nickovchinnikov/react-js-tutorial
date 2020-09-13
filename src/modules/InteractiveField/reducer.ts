import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lensPath, set, pick } from "ramda";

import { TicTacToeGameState } from "@/store";

import { createEmptyGameField } from "./fieldManager";

export type Coordinates = { x: number; y: number };

export enum GameStatus {
  NewGame = "New game",
  Play = "Play",
  GameOver = "Game over",
}

export type FieldSizeType = [number, number];
export type PlayerMarksType = [string, string];
export type GameFieldType = string[][];

export const PlayerMarks: PlayerMarksType = ["x", "o"];
export const [firstPlayerMark, secondPlayerMark] = PlayerMarks;

export const defaultFieldSize: FieldSizeType = [3, 3];
const [defaultSizeX, defaultSizeY] = defaultFieldSize;

export type RebuildActionType = PayloadAction<{
  fieldSize?: FieldSizeType;
  playerMarks?: PlayerMarksType;
  nextTurn?: string;
}>;

export type ClickActionType = PayloadAction<Coordinates>;
export type ChangeStatusActionType = PayloadAction<GameStatus>;
export type SetWinnerActionType = PayloadAction<string>;

export const selectors = {
  game: ({ game }: TicTacToeGameState) => game,
  playerInfo: ({ game }: TicTacToeGameState) =>
    pick(["moves", "nextTurn", "gameStatus", "winner"], game),
};

export const initialState = {
  fieldSize: defaultFieldSize,
  playerMarks: PlayerMarks,
  gameField: createEmptyGameField(defaultSizeX, defaultSizeY),
  gameStatus: GameStatus.NewGame,
  nextTurn: firstPlayerMark,
  moves: 0,
  winner: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    rebuild: (state) => ({
      ...state,
      gameStatus: GameStatus.NewGame,
      gameField: createEmptyGameField(...state.fieldSize),
    }),
    createGameWithParams: (state, { payload }: RebuildActionType) => {
      const fieldSize = payload.fieldSize ?? state.fieldSize;
      return {
        ...state,
        gameStatus: GameStatus.NewGame,
        fieldSize,
        playerMarks: payload.playerMarks ?? state.playerMarks,
        nextTurn: payload.nextTurn ?? state.nextTurn,
        gameField: createEmptyGameField(...fieldSize),
      };
    },
    click: (state, { payload }: ClickActionType) => {
      const { x, y } = payload;
      const { nextTurn, gameField, moves, gameStatus } = state;
      if (gameStatus !== GameStatus.GameOver) {
        return {
          ...state,
          gameField: set(lensPath([y, x]), nextTurn, gameField),
          nextTurn:
            nextTurn === firstPlayerMark ? secondPlayerMark : firstPlayerMark,
          moves: moves + 1,
        };
      }
      return state;
    },
    changeStatus: (state, { payload }: ChangeStatusActionType) => ({
      ...state,
      gameStatus: payload,
    }),
    setWinner: (state, { payload }: SetWinnerActionType) => ({
      ...state,
      winner: payload,
    }),
  },
});

export const { reducer, actions } = gameSlice;
