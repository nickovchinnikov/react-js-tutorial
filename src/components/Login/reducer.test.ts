import { actions, reducer, initialState } from "./reducer";

describe("Login reducer", () => {
  const username = "ComeToMe";
  it("Attempt login with empty username", () => {
    expect(reducer(initialState, actions.login(""))).toEqual({ username: "" });
  });
  it("Correct login action", () => {
    expect(reducer(initialState, actions.login(username))).toEqual({
      username,
    });
  });
  it("Logout action", () => {
    expect(reducer({ username }, actions.logout())).toEqual({ username: "" });
  });
});
