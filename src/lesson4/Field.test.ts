import { mount } from "enzyme";
import { getFieldElement } from "./Field";

describe("Field", () => {
  it("renders cess for passed empty field", () => {
    const field = mount(
      getFieldElement({
        field: [
          ["", ""],
          ["", ""],
        ],
        onClick: jest.fn(),
      })
    );
    expect(field.find("br").length).toBe(1); // rows - 1
    expect(field.find(".cell").length).toBe(4); // cell
    expect(field.find(".cell-empty").length).toBe(4); // cell
  });
});
