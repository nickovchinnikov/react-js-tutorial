import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Field } from "./Field";

export default {
  title: "Field",
  decorators: [withKnobs],
};

const elementClicked = action("Cell clicked (element)");

export const emptyField = () => [
  <Field
    key="jsx"
    onClick={elementClicked}
    field={object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])}
  />,
];

export const nonEmptyField = () => [
  <Field
    key="jsx"
    onClick={elementClicked}
    field={object("field", [
      ["x", "o", ""],
      ["", "o", ""],
      ["", "", ""],
    ])}
  />,
];
