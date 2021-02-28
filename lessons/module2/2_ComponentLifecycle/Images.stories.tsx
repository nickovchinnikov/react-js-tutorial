import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { ImageLocal } from "./ImageLocal";
import { ImageServer } from "./ImageServer";
// import { ImageRandom } from "./ImageRandom";

export default {
  title: "Images",
  decorators: [withKnobs],
};

export const LocallyCreatedURL = () => [
  <ImageLocal key="jsx" id={number("id", 3)} />,
];

export const RemotelyCreatedURL = () => [
  <ImageServer key="jsx" id={number("id", 7)} />,
];

// Lack of screenshot testing
/*
export const RandomImages = () => [
  <ImageRandom
    key="jsx"
    interval={number("interval", 1000)}
    isActive={boolean("is active", true)}
  />,
];
*/
