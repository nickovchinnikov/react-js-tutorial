import { Action } from "redux";
import * as actionTypes from './types';

type PlayerMark = 'x' | 'o';

interface TicTacToeGameState {
  nextMove: PlayerMark;

  gameField: (PlayerMark | '')[][];
}

const defaultState: TicTacToeGameState = {
  nextMove: 'x',

  gameField: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
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