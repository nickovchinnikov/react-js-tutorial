import { expectSaga, testSaga } from "redux-saga-test-plan";

import * as matchers from "redux-saga-test-plan/matchers";

import { checkUserSession, saveUserSession, loginSaga } from "./saga";
import { CheckState, actions, reducer } from "./reducer";

import { getUserSession, login, logout } from "@/api/auth";

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
      .call(logout)
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
  it("loginSaga default login success", () => {
    const userSession = "Username";
    const saga = testSaga(loginSaga);
    saga
      .next()
      .call(getUserSession)
      .next(userSession)
      .put(actions.login(userSession))
      .finish();
  });
  it("loginSaga default login fails", () => {
    const userSession = "";
    const saga = testSaga(loginSaga);
    saga
      .next()
      .call(getUserSession)
      .next(userSession)
      .put(actions.logout())
      .next()
      .call(logout)
      .finish();
  });
  it("loginSaga user login full flow", () => {
    const emptyUserSession = "";
    const userSession = "Username";
    const saga = testSaga(loginSaga);
    saga
      .next()
      .call(getUserSession)
      .save("LoginSagaDefaultLoginFlow")
      .next(emptyUserSession)
      .put(actions.logout())
      .next()
      .call(logout)
      .restore("LoginSagaDefaultLoginFlow")
      .next(userSession)
      .put(actions.login(userSession))
      .save("CheckUserLoginFlow")
      .next()
      .take(actions.login.type)
      .next(actions.login(userSession))
      .call(login, userSession)
      .next()
      .take(actions.logout.type)
      .next()
      .call(logout)
      .restore("LoginSagaDefaultLoginFlow")
      .next()
      .take(actions.login.type)
      .next(actions.login(emptyUserSession))
      .take(actions.logout.type)
      .next()
      .call(logout)
      .finish();
  });
});
