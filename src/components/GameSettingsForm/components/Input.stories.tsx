import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { InputText, InputColor } from "./";

export default {
  title: "Input",
  decorators: [withKnobs],
};

const elementClicked = action("Cell clicked (element)");

export const inputText = () => [
  <InputText key="jsx" placeholder="textInput" />,
];

export const inputColor = () => [<InputColor key="jsx" />];
