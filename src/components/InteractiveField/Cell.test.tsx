import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { Cell } from "./Cell";

describe("Cell", () => {
  it("renders button for empty cell", () => {
    expect(
      renderer.create(<Cell onClick={jest.fn()} />).toJSON()
    ).toMatchSnapshot();
  });
  it("renders button for filled with x cell", () => {
    expect(
      renderer.create(<Cell onClick={jest.fn()}>x</Cell>).toJSON()
    ).toMatchSnapshot();
  });
  it("calls onClick callback on click by empty cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Cell onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("does not call onClick callback on click by filled cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Cell onClick={onClick}>y</Cell>);
    wrapper.simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });
  it("calls onClick callback with passed x, y params", () => {
    const onClick = jest.fn();
    const x = 12;
    const y = 14;
    const wrapper = mount(<Cell onClick={onClick} x={x} y={y} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledWith(x, y);
  });
});
