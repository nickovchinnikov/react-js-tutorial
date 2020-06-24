import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it('should show "Sign in" link by default', () => {
    const app = shallow(<App />);
    expect(app.find('Link[to="/signin"]').length).toBe(1);
  });
});
