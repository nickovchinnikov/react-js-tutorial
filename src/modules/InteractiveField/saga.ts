import { takeEvery, select, put } from "redux-saga/effects";

import { TicTacToeGameState } from "@/store";

import { getInfoAboutGameField } from "./fieldManager";
import {
  actions,
  GameStatus,
  firstPlayerMark,
  secondPlayerMark,
} from "./reducer";

export const selectors = {
  game: ({ game }: TicTacToeGameState) => game,
};

const winChecker = (check: number) => check >= 3;

export function* gameStateWatcher() {
  const data = yield select(selectors.game);

  const { moves, gameField } = data;

  const gameFieldLength = gameField.length * gameField[0].length;

  if (moves === 1) {
    yield put(actions.changeStatus(GameStatus.Play));
  }

  if (moves >= 5) {
    const firstPlayerWinCheck = getInfoAboutGameField(
      gameField,
      firstPlayerMark
    ).find(winChecker);

    if (firstPlayerWinCheck) {
      yield put(actions.changeStatus(GameStatus.GameOver));
      yield put(actions.setWinner(firstPlayerMark));
    }

    const secondPlayerWinCheck = getInfoAboutGameField(
      gameField,
      secondPlayerMark
    ).find(winChecker);

    if (secondPlayerWinCheck) {
      yield put(actions.changeStatus(GameStatus.GameOver));
      yield put(actions.setWinner(secondPlayerMark));
    }
  }

  if (moves === gameFieldLength) {
    yield put(actions.changeStatus(GameStatus.GameOver));
  }
}

export function* gameSaga() {
  yield takeEvery(actions.click.type, gameStateWatcher);
}
