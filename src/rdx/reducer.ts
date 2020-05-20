import { Action } from "redux";

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
  return state;
}