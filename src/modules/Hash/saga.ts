import { wrap } from "comlink";
import { fork, call, put, delay } from "redux-saga/effects";

import { actions, initialState } from "./reducer";

const worker = new Worker("@/web-worker", {
  name: "WebWorker",
  type: "module",
});

const workerApi = wrap<import("@/web-worker/index.worker").WebWorker>(worker);

export function* updateHash() {
  let hash = initialState;
  while (true) {
    hash = yield call(workerApi.findHash, hash, "0000");
    yield put(actions.update(hash));
    yield delay(1000);
  }
}

export function* hashSaga() {
  yield fork(updateHash);
}
