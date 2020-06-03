import React from "react";
import { shallow } from "enzyme";

import { loginSlice } from "./reducer";
import { LoginComponent } from "./Login";

describe("Login", () => {
  it("navigates to user page on submit", async () => {
    jest.spyOn(loginSlice.actions, "login");

    const username = "BobMarley";
    const component = shallow(
      <LoginComponent username="" login={loginSlice.actions.login} />
    );

    component.find("input").simulate("change", {
      target: {
        value: username,
      },
    });

    await component.find("form").simulate("submit", {
      preventDefault: () => null,
    });

    expect(loginSlice.actions.login).toHaveBeenCalledWith(username);
  });
});
