import { Action } from "redux";
import * as actionTypes from './types';

type PlayerMark = 'x' | 'o';

interface TicTacToeGameState {
  nextMove: PlayerMark;

  gameField: (PlayerMark | null)[][];
}

const defaultState: TicTacToeGameState = {
  nextMove: 'x',

  gameField: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
}

export function reducer(state: TicTacToeGameState = defaultState, action: Action): TicTacToeGameState {
  switch (action.type) {
    case actionTypes.O_MOVE:
      return {
        ...state,
        nextMove: 'x',
      }
    case actionTypes.X_MOVE:
      return {
        ...state,
        nextMove: 'o',
      }
  }


  return state;
}