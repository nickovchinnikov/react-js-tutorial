import { mount } from "enzyme";
import { getField as getFieldElement } from "./FieldElement";
import { getField } from "./Field";

[
  {
    fn: getField,
    title: "JSX version",
  },
  { fn: getFieldElement, title: "Element version" },
].forEach((item) => {
  const getFieldElement = item.fn;
  describe(`Field: ${item.title}`, () => {
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
      console.log(field.html());
      expect(field.find("br").length).toBe(1);
      expect(field.find(".cell").length).toBe(4);
      expect(field.find(".cell-empty").length).toBe(1);
      expect(field.find(".cell-filled").length).toBe(3);
      expect(
        field.findWhere(
          (el) => el.html() === "x" && typeof el.type() !== "string"
        ).length
      ).toBe(1);
      expect(
        field.findWhere(
          (el) => el.html() === "o" && typeof el.type() !== "string"
        ).length
      ).toBe(2);
    });

    it("passed onClick inside cells", () => {
      const onClick = jest.fn();
      const field = mount(
        getFieldElement({
          field: [["", "x", "o"]],
          onClick,
        })
      );
      field.find(".cell-empty").simulate("click");
      expect(onClick).toHaveBeenCalledWith(0, 0);
    });
  });
});
