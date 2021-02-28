import { call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { dynamic, EffectProvider } from "redux-saga-test-plan/providers";

const add2 = (a: number) => a + 2;

function* someSaga() {
  const x = yield call(add2, 4);
  const y = yield call(add2, 6);
  const z = yield call(add2, 8);

  yield put({ type: "DONE", payload: x + y + z });
}

type ProviderType = EffectProvider<{ args: [number] }>;

const provideDoubleIf6: ProviderType = ({ args: [a] }, next) =>
  // Check if the first argument is 6
  a === 6 ? a * 2 : next();

const provideTripleIfGt4: ProviderType = ({ args: [a] }, next) =>
  // Check if the first argument is greater than 4
  a > 4 ? a * 3 : next();

it("works with dynamic static providers", () => {
  return expectSaga(someSaga)
    .provide([
      [matchers.call.fn(add2), dynamic(provideDoubleIf6)],
      [matchers.call.fn(add2), dynamic(provideTripleIfGt4)],
    ])
    .put({ type: "DONE", payload: 42 })
    .run();
});
