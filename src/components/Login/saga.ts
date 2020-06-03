import { isEmpty } from "ramda";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, call, put, fork } from "redux-saga/effects";

import { getUserSession, login, logout } from "@/api/auth";

import { actions } from "./reducer";

export function* checkUserSession() {
  const userSession = yield call(getUserSession);
  if (userSession && !isEmpty(userSession)) {
    yield put({ type: actions.login.type, payload: userSession });
  }
}

export function* clearUserSession() {
  yield call(logout);
}

export function* saveUserSession(action: PayloadAction<string>) {
  const username = String(action.payload);
  if (username && !isEmpty(username)) {
    yield call(login, username);
  }
}

export function* loginSaga() {
  yield fork(checkUserSession);
  yield takeEvery(actions.login.type, saveUserSession);
  yield takeEvery(actions.logout.type, clearUserSession);
}
