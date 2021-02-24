import React from "react";
import { act, cleanup, render, screen } from "@testing-library/react";

import { loginSlice } from "@/modules/Login";
import { store } from "./store";
import { App } from "./App";

afterEach(cleanup);

describe("App", () => {
  it('should update "Sign in" link visibility on login', () => {
    render(<App />);

    expect(screen.getAllByRole("link", { name: "SignIn" }).length).toBe(1);

    act(() => {
      store.dispatch(loginSlice.actions.login("some user"));
    });

    expect(
      screen.getAllByRole("heading", { name: "Hello, some user!" }).length
    ).toBe(1);
  });
  it('should update "Sign in" link visibility on logout', () => {
    render(<App />);
    act(() => {
      store.dispatch(loginSlice.actions.login("some user"));
    });
    expect(
      screen.getAllByRole("heading", { name: "Hello, some user!" }).length
    ).toBe(1);
    act(() => {
      store.dispatch(loginSlice.actions.logout());
    });
    expect(screen.getAllByRole("link", { name: "SignIn" }).length).toBe(1);
  });
});
