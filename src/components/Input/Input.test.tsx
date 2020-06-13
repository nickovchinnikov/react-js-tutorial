import React from "react";
import renderer from "react-test-renderer";

import { InputText } from "./InputText";
import { InputColor } from "./InputColor";

describe("Inputs", () => {
  it("renders InputText placeholder set to 'placeholder'", () => {
    expect(
      renderer.create(<InputText placeholder="placeholder" />).toJSON()
    ).toMatchSnapshot();
  });
  it("renders InputColor with default green value", () => {
    expect(
      renderer.create(<InputColor defaultValue="green" />).toJSON()
    ).toMatchSnapshot();
  });
});
