import React from "react";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import { GameStateComponent } from "./GameState";

export default {
  title: "GameStateForm",
  decorators: [withKnobs],
};

export const GameStateInfo = () => (
  <GameStateComponent
    nextPlayer={text("nextPlayer", "x")}
    moves={number("moves", 10)}
  />
);
