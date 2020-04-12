import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { getCellElement } from "./CellElement";
export default {
  title: "Lesson 4 / Cell",
  decorators: [withKnobs],
};

export const nonFilled = () =>
  getCellElement({
    onClick: action("Cell clicked"),
    x: number("x", 1),
    y: number("y", 23),
  });

export const filledWithX = () =>
  getCellElement({
    filled: text("filled with", "x"),
    onClick: action("Cell clicked"),
    x: number("x", 1),
    y: number("y", 23),
  });

export const filledWithY = () =>
  getCellElement({
    filled: text("filled with", "y"),
    onClick: action("Cell clicked"),
    x: number("x", 1),
    y: number("y", 23),
  });
