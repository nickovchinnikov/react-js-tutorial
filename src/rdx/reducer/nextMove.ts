import * as actions from "@/rdx/actions";
import { createReducer } from "@reduxjs/toolkit";

type nextMoveState = "x" | "o";

const defaultState: nextMoveState = "x";

export const nextMove = createReducer<nextMoveState>(defaultState, {
  [actions.oMove.type]: () => "x",
  [actions.xMove.type]: () => "o",
});
