import { Action } from "redux";
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
    const { x, y } = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    newState[y][x] = "o";
    return newState;
  },
  [actions.oMove.type]: (state, action) => {
    const { x, y } = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    newState[y][x] = "x";
    return newState;
  },
});
