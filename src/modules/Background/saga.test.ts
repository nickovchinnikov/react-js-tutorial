import { call, take } from "redux-saga/effects";
import { testSaga } from "redux-saga-test-plan";

import { backgroundSaga } from "./saga";
import { actions } from "./reducer";

import { createConnection } from "@/api/auth";

describe("Background saga", () => {
  it("Background saga flow", () => {
    const saga = testSaga(backgroundSaga);
    saga
      .next()
      .take(actions.start.type)
      .next()
      .race({
        task: call(createConnection),
        cancel: take(actions.cancel.type),
      })
      .finish();
  });
});
