import React, { ReactNode } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Storybook Knobs example",
  decorators: [withKnobs],
};

export const withAButton = (): ReactNode => (
  <button
    onClick={action("button-click")}
    disabled={boolean("Disabled", false)}
  >
    {text("Label", "Hello Storybook")}
  </button>
);

export const asDynamicVariables = (): ReactNode => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
