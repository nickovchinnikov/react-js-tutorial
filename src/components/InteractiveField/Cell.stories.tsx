import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { Cell } from "./Cell";
export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const nonFilled = () => [
  <Cell
    onClick={action("Cell clicked")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
  <Cell
    onClick={action("Cell clicked")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx2"
  />,
];

export const filledWithX = () => [
  <Cell
    onClick={action("Cell clicked")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  >
    {text("filled with", "x")}
  </Cell>,
  <Cell
    onClick={action("Cell clicked")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx2"
  >
    {text("filled with", "x")}
  </Cell>,
];

export const filledWithY = () => [
  <Cell
    onClick={action("Cell clicked")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  >
    {text("filled with", "y")}
  </Cell>,
  <Cell
    onClick={action("Cell clicked")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx2"
  >
    {text("filled with", "y")}
  </Cell>,
];
