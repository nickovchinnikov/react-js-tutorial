import React from "react";
import { shallow } from "enzyme";

import { ClickCounterButton } from "./ClickCounterButton";

const incMock = jest.fn();

describe("Click counter render check", () => {
  it("Default render", () => {
    expect(
      shallow(<ClickCounterButton increment={incMock} />).matchesElement(
        <button>Clicked 0 times!</button>
      )
    ).toBe(true);
  });

  it("Default render with prop", () => {
    expect(
      shallow(
        <ClickCounterButton increment={incMock}>{1}</ClickCounterButton>
      ).matchesElement(<button>Clicked 1 times!</button>)
    ).toBe(true);
  });

  it("Click simulation", () => {
    const incMock = jest.fn();

    const wrapper = shallow(
      <ClickCounterButton increment={incMock}>{1}</ClickCounterButton>
    );

    expect(wrapper.text()).toEqual("Clicked 1 times!");

    wrapper.find("button").simulate("click");

    expect(incMock.mock.calls.length).toBe(1);
  });
});
