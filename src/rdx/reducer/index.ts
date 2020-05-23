import { gameField } from './gameField';
import { nextMove } from './nextMove';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  nextMove,
  gameField
});

export type TicTacToeGameState = ReturnType<typeof reducer>;
