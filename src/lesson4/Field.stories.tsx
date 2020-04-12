import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { getField as getFieldElement } from "./FieldElement";
import Field from "./Field";

export default {
  title: "Lesson 4 / Field",
  decorators: [withKnobs],
};

const elementClicked = action("Cell clicked (element)");
const elementClickedJsx = action("Cell clicked (jsx");

export const emptyField = () => [
  getFieldElement({
    onClick: elementClicked,
    field: object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]),
  }),
  <Field
    key="jsx"
    onClick={elementClickedJsx}
    field={object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])}
  />,
];

export const nonEmptyField = () => [
  getFieldElement({
    onClick: elementClicked,
    field: object("field", [
      ["x", "o", ""],
      ["", "o", ""],
      ["", "", ""],
    ]),
  }),
  <Field
    key="jsx"
    onClick={elementClickedJsx}
    field={object("field", [
      ["x", "o", ""],
      ["", "o", ""],
      ["", "", ""],
    ])}
  />,
];
