import { Action } from "redux";
import * as actions from "@/rdx/actions";

type GameFieldState = string[][];

const defaultState: GameFieldState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export function gameField(
  state: GameFieldState = defaultState,
  action: Action & { payload?: any }
): GameFieldState {
  if (actions.oMove.match(action)) {
    const { x, y } = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    newState[y][x] = "o";
    return newState;
  }
  if (actions.xMove.match(action)) {
    const { x, y } = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    newState[y][x] = "x";
    return newState;
  }

  return state;
}
