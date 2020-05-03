import React from "react";

import { Entrance } from "./Entrance";
import { shallow } from "enzyme";

describe("Entrance", () => {
  it("render input with default value", () => {
    expect(shallow(<Entrance defaultValue={"1234"} />)).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        type="text"
        value="1234"
      />
    `);
  });

  it("handles text input", () => {
    const wrapper = shallow(<Entrance defaultValue={"1234"} />);
    const input = wrapper.find("input");
    wrapper.find("input").simulate("change", { target: { value: "abc" } });
    expect(input.prop("value")).toBe("1234"); // on redendering new input is created, so old one keeps prev value
    expect(wrapper.find("input").prop("value")).toBe("ABC");
    expect(wrapper).toMatchInlineSnapshot(`
      <input
        onChange={[Function]}
        type="text"
        value="ABC"
      />
    `);
  });
});
