import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { Select } from "./Select";

export default {
  title: "Input",
  decorators: [withKnobs],
};

export const select = () => [
  <Select key="jsx" options={array("options", ["X", "Y"])} />,
];
