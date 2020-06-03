import { loginSlice, initialState } from "./reducer";

describe("Login reducer", () => {
  it("Attempt change username to empty", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login(""))
    ).toEqual({ username: "" });
  });
  it("Change username", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login("ComeToMe"))
    ).toEqual({ username: "ComeToMe" });
  });
});
