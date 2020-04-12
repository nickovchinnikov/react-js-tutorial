import { mount } from "enzyme";
import { getCellElement } from "./CellElement";
import React from "react";

describe("cell", () => {
  it("renders button for empty cell", () => {
    expect(mount(getCellElement()).html()).toBe(
      '<button class="cell cell-empty"> </button>'
    );
  });
});
