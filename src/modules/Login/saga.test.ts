import { expectSaga } from "redux-saga-test-plan";

import * as matchers from "redux-saga-test-plan/matchers";

import { checkUserSession, saveUserSession } from "./saga";
import { CheckState, actions, reducer } from "./reducer";

import { getUserSession, login } from "@/api/auth";

describe("Login saga", () => {
  it("checkUserSession success", () => {
    const userSession = "Username";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), userSession]])
      .put(actions.login(userSession))
      .hasFinalState({
        username: userSession,
        status: CheckState.succeed,
      })
      .run();
  });
  it("checkUserSession fail", () => {
    const userSession = "";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), userSession]])
      .put(actions.logout())
      .hasFinalState({
        username: userSession,
        status: CheckState.failed,
      })
      .run();
  });
  it("checkUserSession", () => {
    const userSession = "Username";
    return expectSaga(saveUserSession, {
      type: actions.login.type,
      payload: userSession,
    })
      .call(login, userSession)
      .run();
  });
});
