import { mount } from "enzyme";
import { getCellElement } from "./CellElement";

describe("cell", () => {
  it("renders button for empty cell", () => {
    expect(
      mount(
        getCellElement({
          onClick: jest.fn(),
        })
      ).html()
    ).toBe('<button class="cell cell-empty"> </button>');
  });
  it("renders button for filled with x cell", () => {
    expect(
      mount(getCellElement({ filled: "x", onClick: jest.fn() })).html()
    ).toBe('<span class="cell cell-filled">x</span>');
  });
  it("calls onClick callback on click by empty cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(getCellElement({ onClick }));
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("does not call onClick callback on click by filled cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(getCellElement({ filled: "y", onClick }));
    wrapper.simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });
});
