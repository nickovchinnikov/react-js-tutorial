import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { InputText, InputColor } from "./";

export default {
  title: "Input",
  decorators: [withKnobs],
  parameters: {
    loki: { skip: true },
  },
};

export const inputText = () => [
  <InputText key="jsx" placeholder="textInput" />,
];

export const inputColor = () => [<InputColor key="jsx" />];
