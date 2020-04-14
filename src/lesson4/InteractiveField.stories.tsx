import React from "react";
import { withKnobs, number, array } from "@storybook/addon-knobs";
import Field from "./Field";
import InteractiveField from "./InteractiveField";
export default {
  title: "Lesson 4 / InteractiveField",
  decorators: [withKnobs],
};

const players = ["x", "y"];
export const withRealField = () => (
  <InteractiveField
    xSize={number("xSize", 3)}
    ySize={number("ySize", 3)}
    playerMarks={array("playerMarks", players)}
    fieldComponent={Field}
  />
);
