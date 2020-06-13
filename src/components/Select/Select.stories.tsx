import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { Select } from "./Select";

export default {
  title: "Input",
  decorators: [withKnobs],
};

export const select = () => [
  <Select key="jsx" label="Symbol" options={array("options", ["X", "Y"])} />,
];
