import * as actions from "@/rdx/actions";
import { createReducer } from "@reduxjs/toolkit";

type GameFieldState = string[][];

const defaultState: GameFieldState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const gameField = createReducer<GameFieldState>(defaultState, {
  [actions.xMove.type]: (state, action) => {
    state[action.payload.y][action.payload.x] = "o";
    return state;
  },
  [actions.oMove.type]: (state, action) => {
    state[action.payload.y][action.payload.x] = "x";
    return state;
  },
});
