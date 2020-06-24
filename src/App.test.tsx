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

  it('should update "Sign in" link visibility on login', () => {
    // hack related to the fact, that we have store as singleton
    // @todo: refactor `store` to `getStore`
    store.dispatch(loginSlice.actions.logout());

    const app = shallow(<App />);
    expect(app.find('Link[to="/signin"]').length).toBe(1);
    store.dispatch(loginSlice.actions.login("some user"));
    app.update();
    expect(app.find('Link[to="/signin"]').length).toBe(0);
  });

  it('should update "Sign in" link visibility on logout', () => {
    store.dispatch(loginSlice.actions.login("some user"));
    const app = shallow(<App />);
    expect(app.find('Link[to="/signin"]').length).toBe(0);
    store.dispatch(loginSlice.actions.logout());
    app.update();
    expect(app.find('Link[to="/signin"]').length).toBe(1);
  });
});
