import { mount } from "enzyme";
import { getFieldElement } from "./Field";

describe("Field", () => {
  it("renders cells for passed empty field", () => {
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
  it("renders filled cells", () => {
    const field = mount(
      getFieldElement({
        field: [
          ["x", "o"],
          ["o", ""],
        ],
        onClick: jest.fn(),
      })
    );
    expect(field.find("br").length).toBe(1);
    expect(field.find(".cell").length).toBe(4);
    expect(field.find(".cell-empty").length).toBe(1);
    expect(field.find(".cell-filled").length).toBe(3);
    expect(
      field.findWhere(
        (el) => el.text() === "x" && typeof el.type() !== "string"
      ).length
    ).toBe(1);
    expect(
      field.findWhere(
        (el) => el.text() === "o" && typeof el.type() !== "string"
      ).length
    ).toBe(2);
  });
});
