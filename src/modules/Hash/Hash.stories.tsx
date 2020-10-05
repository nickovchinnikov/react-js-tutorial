import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { HashComponent } from "./Hash";

export default {
  title: "HashComponent",
  decorators: [withKnobs],
};

export const HashComponentExample = () => (
  <HashComponent>
    {text(
      "Hash",
      "288fa5fc4a3b311a79c33edbc8ac0a96e7a4a58235a17216067f31dfe6d52a36"
    )}
  </HashComponent>
);
