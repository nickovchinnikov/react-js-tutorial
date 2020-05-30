import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { ImageLocal } from "./ImageLocal";
import { ImageServer } from "./ImageServer";
import { ImageRandom } from "./ImageRandom";

storiesOf("Images", module)
  .addDecorator(withKnobs)
  .lokiSkip("RandomImages", () => (
    <ImageRandom
      key="jsx"
      interval={number("interval", 1000)}
      isActive={boolean("is active", true)}
    />
  ))
  .lokiSkip("LocallyCreatedURL", () => (
    <ImageLocal key="jsx" id={number("id", 3)} />
  ))
  .lokiSkip("RemotelyCreatedURL", () => (
    <ImageServer key="jsx" id={number("id", 7)} />
  ));
