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

export function reducer(state: TicTacToeGameState = defaultState, action: Action & { payload?: any }): TicTacToeGameState {
  switch (action.type) {
    case actionTypes.O_MOVE: {
      const { y, x } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      newState.gameField[y][x] = 'o';
      return {
        ...newState,
        nextMove: 'x',
      }
    }
    case actionTypes.X_MOVE: {
      const { y, x } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      newState.gameField[y][x] = 'x';
      return {
        ...newState,
        nextMove: 'o',
      }
    }
  }


  return state;
}