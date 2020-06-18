import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";

import { BackgroundComponent } from "./Background";
import { actions, BackgroundStatus } from "./reducer";

export default {
  title: "Background job",
  decorators: [withKnobs],
};

export const BackgroundInitial = () => (
  <BackgroundComponent
    status={select("status", BackgroundStatus, BackgroundStatus.init)}
    cancel={action("Cancel") as typeof actions.cancel}
  />
);
