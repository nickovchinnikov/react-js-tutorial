import { Action } from "redux";
import * as actionTypes from '@/rdx/types';

type GameFieldState = string[][];

const defaultState: GameFieldState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

export function gameField(state: GameFieldState = defaultState, action: Action & { payload?: any }): GameFieldState {
  switch (action.type) {
    case actionTypes.O_MOVE: {
      const { y, x } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      newState[y][x] = 'o';
      return newState;
    }
    case actionTypes.X_MOVE: {
      const { y, x } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      newState[y][x] = 'x';
      return newState;
    }
  }


  return state;
}