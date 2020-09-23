import React from "react";
import { action } from "@storybook/addon-actions";
import { Cell } from "./Cell";

export default {
  title: "Cell",
  argTypes: {
    x: { control: { type: "range", min: 1, max: 20, step: 1 } },
    y: { control: { type: "range", max: 20, step: 1 } },
    children: {
      control: { type: "text" },
    },
  },
};

export const nonFilled = (args: any) => [
  <Cell onClick={action("Cell clicked")} key="jsx" {...args} />,
  <Cell onClick={action("Cell clicked")} key="jsx2" {...args} />,
];

export const filledWithX = (args: any) => [
  <Cell onClick={action("Cell clicked")} key="jsx" {...args} />,
  <Cell onClick={action("Cell clicked")} key="jsx2" {...args} />,
];

export const filledWithY = (args: any) => [
  <Cell onClick={action("Cell clicked")} key="jsx" {...args} />,
  <Cell onClick={action("Cell clicked")} key="jsx2" {...args} />,
];
