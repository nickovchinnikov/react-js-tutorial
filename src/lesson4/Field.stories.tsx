import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { getField as getFieldElement } from "./FieldElement";
import Field from "./Field";
export default {
  title: "Lesson 4 / Field",
  decorators: [withKnobs],
};

export const emptyField = () => [
  getFieldElement({
    onClick: action("Cell clicked (element)"),
    field: object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]),
  }),
  <Field
    key="jsx"
    onClick={action("Cell clicked (jsx")}
    field={object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])}
  />,
];

export const nonEmptyField = () => [
  getFieldElement({
    onClick: action("Cell clicked"),
    field: object("field", [
      ["x", "o", ""],
      ["", "o", ""],
      ["", "", ""],
    ]),
  }),
  <Field
    key="jsx"
    onClick={action("Cell clicked (jsx")}
    field={object("field", [
      ["x", "o", ""],
      ["", "o", ""],
      ["", "", ""],
    ])}
  />,
];
