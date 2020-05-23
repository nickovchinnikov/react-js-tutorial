import { Action } from "redux";
import * as actionTypes from '@/rdx/types';

type nextMoveState = 'x' | 'o';

const defaultState: nextMoveState = 'x';

export function nextMove(state: nextMoveState = defaultState, action: Action & { payload?: any }): nextMoveState {
  switch (action.type) {
    case actionTypes.O_MOVE: {
      return 'x';
    }
    case actionTypes.X_MOVE: {
      return 'o';
    }
  }

  return state;
}