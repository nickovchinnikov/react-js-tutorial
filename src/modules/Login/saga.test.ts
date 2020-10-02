import { call } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

import { checkUserSession, saveUserSession, loginSaga } from "./saga";
import { CheckState, actions, reducer } from "./reducer";

import { getUserSession, login, logout, sentStatistic } from "@/api/auth";

describe("Login Saga", () => {
  describe("Login success", () => {
    it("checkUserSession with not-empty username success", () => {
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
    it("checkUserSession check login flow steps", () => {
      const userSession = "Username";
      return expectSaga(saveUserSession, {
        type: actions.login.type,
        payload: userSession,
      })
        .call(login, userSession)
        .run();
    });
    it("loginSaga default login flow success", () => {
      const userSession = "Username";
      const saga = testSaga(loginSaga);
      saga
        .next()
        .fork(checkUserSession)
        .next(userSession)
        .take(actions.login.type)
        .next(actions.login(userSession))
        .call(login, userSession)
        .finish();
    });
  });
  describe("Login fail", () => {
    it("checkUserSession with empty username fail", () => {
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
    it("loginSaga with empty username fails", () => {
      const userSession = "";
      const saga = testSaga(loginSaga);
      saga
        .next()
        .fork(checkUserSession)
        .next(userSession)
        .take(actions.login.type)
        .next(actions.login(userSession))
        .take(actions.logout.type)
        .finish();
    });
  });
  describe("Full flow login", () => {
    it("loginSaga user login full flow", () => {
      const emptyUserSession = "";
      const userSession = "Username";
      const saga = testSaga(loginSaga);
      saga
        .next()
        .fork(checkUserSession)
        .save("LoginSagaDefaultLoginFlow")
        .next()
        .take(actions.login.type)
        .next(actions.login(emptyUserSession))
        .take(actions.logout.type)
        .restore("LoginSagaDefaultLoginFlow")
        .next()
        .take(actions.login.type)
        .next(actions.login(userSession))
        .call(login, userSession)
        .next()
        .take(actions.logout.type)
        .next()
        .all([call(logout), call(sentStatistic)])
        .finish();
    });
  });
});
