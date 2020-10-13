import { wrap } from "comlink";
import { fork, call, put, delay } from "redux-saga/effects";
// we're using worker loader https://webpack.js.org/loaders/worker-loader/
import Worker, { WebWorker } from "@/web-worker/index.worker";

import { actions, initialState } from "./reducer";

const worker = new Worker();

// Seems we have invalid types in `comlink`
// At least typings contradict to examples in documentation
const workerApi = (wrap(worker as any) as unknown) as WebWorker;

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
