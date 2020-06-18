import { race, take, call } from "redux-saga/effects";

import { createConnection } from "@/api/auth";

import { actions } from "./reducer";

export function* backgroundSaga() {
  while (true) {
    yield take(actions.start.type);
    yield race({
      task: call(createConnection),
      cancel: take(actions.cancel.type),
    });
  }
}
