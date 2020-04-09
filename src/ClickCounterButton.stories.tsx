import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

import { ClickCounterButton } from "./ClickCounterButton";

export default {
  title: "ClickCounterButton",
  decorators: [withKnobs],
};

export const ClickCounterButtonStory: React.FC<{}> = () => {
  const count = number("Number", 0);

  return (
    <ClickCounterButton increment={action("Increment")}>
      {count}
    </ClickCounterButton>
  );
};
