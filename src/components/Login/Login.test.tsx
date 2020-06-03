import React from "react";
import { shallow } from "enzyme";

import { LoginComponent } from "./Login";

describe("Login", () => {
  it("navigates to user page on submit", async () => {
    const setUsername = jest.fn();

    const username = "BobMarley";
    const component = shallow(
      // eslint-disable-next-line
      // @ts-ignore
      <LoginComponent username="" setUsername={setUsername} />
    );

    component.find("input").simulate("change", {
      target: {
        value: username,
      },
    });

    await component.find("form").simulate("submit", {
      preventDefault: () => null,
    });

    expect(setUsername).toHaveBeenCalledWith(username);
  });
});
