import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import { gameSlice, gameSaga } from "@/modules/Games";
import { loginSlice, loginSaga } from "@/modules/Login";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
  yield fork(gameSaga);
}

const reducer = combineReducers({
  login: loginSlice.reducer,
  game: gameSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type TicTacToeGameState = ReturnType<typeof reducer>;
