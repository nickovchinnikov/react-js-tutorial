import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { getCell as getCellElement } from "./CellElement";
import Cell from "./Cell";
export default {
  title: "Lesson 4 / Cell",
  decorators: [withKnobs],
};

export const nonFilled = () => [
  getCellElement({
    onClick: action("Cell clicked"),
    x: number("x", 1),
    y: number("y", 23),
  }),
  <Cell
    onClick={action("Cell clicked(jsx")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];

export const filledWithX = () => [
  getCellElement({
    filled: text("filled with", "x"),
    onClick: action("Cell clicked"),
    x: number("x", 1),
    y: number("y", 23),
  }),
  <Cell
    onClick={action("Cell clicked(jsx")}
    filled={text("filled with", "x")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];

export const filledWithY = () => [
  getCellElement({
    filled: text("filled with", "y"),
    onClick: action("Cell clicked"),
    x: number("x", 1),
    y: number("y", 23),
  }),
  <Cell
    onClick={action("Cell clicked(jsx")}
    filled={text("filled with", "y")}
    x={number("x", 1)}
    y={number("y", 23)}
    key="jsx"
  />,
];
