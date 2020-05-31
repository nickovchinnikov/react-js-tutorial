import { gameField } from "./gameField";
import { nextMove } from "./nextMove";
import { combineReducers } from "redux";
import { nameReducer } from "@/rdx/reducer/name";

export const reducer = combineReducers({
  nextMove,
  gameField,
  name: nameReducer,
});

export type TicTacToeGameState = ReturnType<typeof reducer>;
