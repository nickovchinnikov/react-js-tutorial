import { loginSlice, initialState } from "./reducer";

describe("Login reducer", () => {
  const username = "ComeToMe";
  it("Attempt login with empty username", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login(""))
    ).toEqual({ username: "" });
  });
  it("Correct login action", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login(username))
    ).toEqual({ username });
  });
  it("Logout action", () => {
    expect(
      loginSlice.reducer({ username }, loginSlice.actions.logout())
    ).toEqual({ username: "" });
  });
});
