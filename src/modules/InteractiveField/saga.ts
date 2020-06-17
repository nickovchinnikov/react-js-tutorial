import { takeEvery, select, take, put, fork } from "redux-saga/effects";

import { getInfoAboutGameField } from "./fieldManager";
import {
  actions,
  selectors,
  GameStatus,
  firstPlayerMark,
  secondPlayerMark,
} from "./reducer";

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

export function* watchAndLog() {
  while (true) {
    const action = yield take("*");
    const state = yield select();

    // eslint-disable-next-line no-console
    console.log("action", action);
    // eslint-disable-next-line no-console
    console.log("state after", state);
  }
}

export function* watchFirstThreeAction() {
  for (let i = 0; i < 3; i++) {
    yield take("*");
    // eslint-disable-next-line no-console
    console.log(`Action number: #${i}`);
  }
  // eslint-disable-next-line no-console
  console.log("First tree actions done!");
}

export function* gameSaga() {
  yield fork(watchAndLog);
  yield fork(watchFirstThreeAction);
  yield takeEvery(actions.click.type, gameStateWatcher);
}
