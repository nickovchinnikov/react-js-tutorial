import { actions, reducer, CheckState, initialState } from "./reducer";

describe("Login reducer", () => {
  const username = "ComeToMe";
  it("Attempt login with empty username", () => {
    expect(reducer(initialState, actions.login(""))).toEqual({
      username: "",
      status: CheckState.initiated,
    });
  });
  it("Correct login action", () => {
    expect(reducer(initialState, actions.login(username))).toEqual({
      username,
      status: CheckState.succeed,
    });
  });
  it("Logout action", () => {
    expect(
      reducer({ username, status: CheckState.succeed }, actions.logout())
    ).toEqual({
      username: "",
      status: CheckState.failed,
    });
  });
});
