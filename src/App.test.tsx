import React from "react";
import { store } from "./store";
import { App } from "./App";
import { shallow } from "enzyme";
import { loginSlice } from "@/modules/Login";

describe("App", () => {
  it('should show "Sign in" link by default', () => {
    const app = shallow(<App />);
    expect(app.find('Link[to="/signin"]').length).toBe(1);
  });

  it('should not show "Sign in" link for authorized user', () => {
    store.dispatch(loginSlice.actions.login("some user"));
    const app = shallow(<App />);
    expect(app.find('Link[to="/signin"]').length).toBe(0);
  });
});
