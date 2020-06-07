import React from "react";
import { withKnobs, number, text, select } from "@storybook/addon-knobs";

import { GameStateComponent } from "./GameState";
import { GameStatus, firstPlayerMark } from "./reducer";

export default {
  title: "GameStateForm",
  decorators: [withKnobs],
};

export const GameStateInfo = () => (
  <GameStateComponent
    gameStatus={select("gameStatus", GameStatus, GameStatus.NewGame)}
    nextPlayer={text("nextPlayer", firstPlayerMark)}
    moves={number("moves", 10)}
  />
);

export const GameStateInfoWithWinner = () => (
  <GameStateComponent
    winner={text("winner", firstPlayerMark)}
    gameStatus={select("gameStatus", GameStatus, GameStatus.NewGame)}
    nextPlayer={text("nextPlayer", firstPlayerMark)}
    moves={number("moves", 10)}
  />
);
