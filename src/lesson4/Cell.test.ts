import { mount } from "enzyme";
import { getCellElement } from "./CellElement";

describe("cell", () => {
  it("renders button for empty cell", () => {
    expect(mount(getCellElement({})).html()).toBe(
      '<button class="cell cell-empty"> </button>'
    );
  });
  it("renders button for filled with x cell", () => {
    expect(mount(getCellElement({ filled: "x" })).html()).toBe(
      '<span class="cell cell-filled">x</span>'
    );
  });
});
