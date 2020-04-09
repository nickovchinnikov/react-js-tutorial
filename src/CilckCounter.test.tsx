import React from "react";
import { shallow, mount, render } from "enzyme";

import { ClickCounter } from "./ClickCounter";

describe("Click counter render check", function () {
  it("Default render", function () {
    expect(
      shallow(<ClickCounter />).matchesElement(
        <button>Clicked 0 times!</button>
      )
    ).toBe(true);
  });

  it("Default render with prop", function () {
    expect(
      shallow(<ClickCounter start={1} />).matchesElement(
        <button>Clicked 1 times!</button>
      )
    ).toBe(true);
  });

  it("Click simulation", function () {
    const wrapper = shallow(<ClickCounter />);

    expect(wrapper.text()).toEqual("Clicked 0 times!");

    wrapper.find("button").simulate("click");

    expect(wrapper.text()).toEqual("Clicked 1 times!");
  });

  it("componentDidMount test", function () {
    const spy = jest.spyOn(ClickCounter.prototype, "componentDidMount");
    const wrapper = mount(<ClickCounter />);

    const instance = wrapper.instance();

    if (instance && instance.componentDidMount) {
      instance.componentDidMount();
    }

    expect(spy).toHaveBeenCalled();
  });

  it("should render to static HTML", function () {
    expect(render(<ClickCounter />).text()).toEqual("Clicked 0 times!");
  });
});
