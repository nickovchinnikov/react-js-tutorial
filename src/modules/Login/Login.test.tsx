import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import { loginSlice } from "./reducer";
import { LoginComponent } from "./Login";

jest.mock("react-router", () => ({
  Redirect: (props: unknown) => {
    return <div>Redirect: {JSON.stringify(props)}</div>;
  },
}));

afterEach(cleanup);

describe("Login", () => {
  it("navigates to user page on submit", async () => {
    jest.spyOn(loginSlice.actions, "login");

    const username = "BobMarley";

    render(<LoginComponent username="" login={loginSlice.actions.login} />);

    fireEvent.change(await screen.findByRole("textbox"), {
      target: {
        value: username,
      },
    });

    fireEvent.submit(await screen.findByRole("form"));

    expect(loginSlice.actions.login).toHaveBeenCalledWith(username);
  });
  it("redirect when username is empty", async () => {
    jest.spyOn(loginSlice.actions, "login");

    const username = "BobMarley";

    const { container } = render(
      <LoginComponent username={username} login={loginSlice.actions.login} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Redirect: 
          {"to":"/ticktacktoe"}
        </div>
      </div>
    `);
  });
});
