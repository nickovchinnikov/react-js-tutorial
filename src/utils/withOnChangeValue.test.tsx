test("dummy test", () => undefined);

/*

import React from "react";
import { withOnChangeValue } from "./withOnChangeValue";
import { InputText } from "components/GameSettingsForm/components/InputText";
import { shallow } from "enzyme";

// todo: remove `.skip` to check your implementation
describe.skip("withOnChangeValue", () => {
  it("is a function", () => {
    expect(typeof withOnChangeValue).toBe("function");
  });

  it("calls original onChange", () => {
    const WrappedComponent = withOnChangeValue(InputText);
    const onChange = jest.fn();

    const wrapper = shallow(<WrappedComponent onChange={onChange} />);
    const event = {
      target: { value: "123" },
    };
    wrapper.simulate("change", event);
    expect(onChange).toHaveBeenCalledWith(event);
  });

  it("calls onChangeText", () => {
    const WrappedComponent = withOnChangeValue(InputText);
    const onChangeValue = jest.fn();

    const wrapper = shallow(<WrappedComponent onChangeValue={onChangeValue} />);
    const event = {
      target: { value: "123" },
    };
    wrapper.simulate("change", event);
    expect(onChangeValue).toHaveBeenCalledWith(event.target.value);
  });
});

*/
