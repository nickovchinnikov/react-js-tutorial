import { loginSlice, initialState } from "./reducer";

describe("Login reducer", () => {
  it("Attempt change username to empty", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.setUsername(""))
    ).toEqual({ username: "" });
  });
  it("Change username", () => {
    expect(
      loginSlice.reducer(
        initialState,
        loginSlice.actions.setUsername("ComeToMe")
      )
    ).toEqual({ username: "ComeToMe" });
  });
});
