import React from "react";
import { mount, render } from "enzyme";

import { ClickCounter } from "./ClickCounter";

describe("Click counter render check", () => {
  it("componentDidMount test", () => {
    const spy = jest.spyOn(ClickCounter.prototype, "componentDidMount");
    mount(<ClickCounter />);
    expect(spy).toHaveBeenCalled();
  });

  it("should render to static HTML", () => {
    expect(render(<ClickCounter />).text()).toEqual("Clicked 0 times!");
  });
});
