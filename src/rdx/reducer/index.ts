import { combineReducers } from "redux";

import { nameReducer } from "@/rdx/reducer/name";

import { gameField } from "./gameField";
import { nextMove } from "./nextMove";

export const reducer = combineReducers({
  nextMove,
  gameField,
  name: nameReducer,
});

export type TicTacToeGameState = ReturnType<typeof reducer>;
