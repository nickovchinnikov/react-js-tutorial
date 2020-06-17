import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, text, select } from "@storybook/addon-knobs";

import { GameStateComponent } from "./GameState";
import { actions, GameStatus, firstPlayerMark } from "./reducer";

export default {
  title: "GameStateForm",
  decorators: [withKnobs],
};

export const GameStateInfo = () => (
  <GameStateComponent
    rebuild={action("rebuild click") as typeof actions.rebuild}
    winner={text("winner", "")}
    gameStatus={select("gameStatus", GameStatus, GameStatus.NewGame)}
    nextTurn={text("nextTurn", firstPlayerMark)}
    moves={number("moves", 10)}
  />
);

export const GameStateInfoWithWinner = () => (
  <GameStateComponent
    rebuild={action("rebuild click") as typeof actions.rebuild}
    winner={text("winner", firstPlayerMark)}
    gameStatus={select("gameStatus", GameStatus, GameStatus.NewGame)}
    nextTurn={text("nextTurn", firstPlayerMark)}
    moves={number("moves", 10)}
  />
);
