import { action } from "@storybook/addon-actions";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import { getFieldElement } from "./Field";
export default {
  title: "Lesson 4 / Field",
  decorators: [withKnobs],
};

export const emptyField = () =>
  getFieldElement({
    onClick: action("Cell clicked"),
    field: object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]),
  });

export const nonEmptyField = () =>
  getFieldElement({
    onClick: action("Cell clicked"),
    field: object("field", [
      ["x", "o", ""],
      ["", "o", ""],
      ["", "", ""],
    ]),
  });
