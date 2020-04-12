import React from "react";
import InteractionField from "./InteractiveField";
import { shallow } from "enzyme";

describe("InteractionField", () => {
  const FakeComponent: React.FC<{
    field: string[][];
    onClick: (x: number, y: number) => void;
  }> = () => null;

  it("renders passed component with field/onClick params and proper field size", () => {
    const field = shallow(
      <InteractionField
        fieldComponent={FakeComponent}
        xSize={1}
        ySize={2}
        playerMarks={["x"]}
      />
    ).find(FakeComponent);
    expect(field.props()).toEqual({
      field: [[""], [""]],
      onClick: expect.any(Function),
    });
  });

  it("updates field on calling onClick with correct values", () => {
    const wrapper = shallow(
      <InteractionField
        fieldComponent={FakeComponent}
        xSize={2}
        ySize={2}
        playerMarks={["x"]}
      />
    );
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["x", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(1, 1);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["x", ""],
        ["", "x"],
      ],
      onClick: expect.any(Function),
    });
  });

  it("changes player mark on eash move", () => {
    const wrapper = shallow(
      <InteractionField
        fieldComponent={FakeComponent}
        xSize={8}
        ySize={1}
        playerMarks={["x", "y", "z"]}
      />
    );
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["", "", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(0, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["x", "", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(1, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["x", "y", "", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(2, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["x", "y", "z", "", "", "", "", ""]],
      onClick: expect.any(Function),
    });
    wrapper.find(FakeComponent).props().onClick(3, 0);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [["x", "y", "z", "x", "", "", "", ""]],
      onClick: expect.any(Function),
    });
  });

  it("updates field on calling onClick ignores incorrect clicks", () => {
    const wrapper = shallow(
      <InteractionField
        fieldComponent={FakeComponent}
        xSize={2}
        ySize={2}
        playerMarks={["x", "y"]}
      />
    );
    wrapper.find(FakeComponent).props().onClick(5, 1);
    wrapper.update();
    expect(wrapper.find(FakeComponent).props()).toEqual({
      field: [
        ["", ""],
        ["", ""],
      ],
      onClick: expect.any(Function),
    });
  });
});
