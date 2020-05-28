import { Action } from "redux";
import * as actions from "@/rdx/actions";

type nextMoveState = "x" | "o";

const defaultState: nextMoveState = "x";

export function nextMove(
  state: nextMoveState = defaultState,
  action: Action & { payload?: any }
): nextMoveState {
  if (actions.oMove.match(action)) {
    return "x";
  }
  if (actions.xMove.match(action)) {
    return "o";
  }

  return state;
}
