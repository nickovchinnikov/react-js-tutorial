import React from "react";
import { withKnobs, number, text, select } from "@storybook/addon-knobs";

import { GameStateComponent } from "./GameState";
import { GameStatus } from "./reducer";

export default {
  title: "GameStateForm",
  decorators: [withKnobs],
};

export const GameStateInfo = () => (
  <GameStateComponent
    gameStatus={select("gameStatus", GameStatus, GameStatus.NewGame)}
    nextPlayer={text("nextPlayer", "x")}
    moves={number("moves", 10)}
  />
);
