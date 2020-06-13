import React, { FC } from "react";

import {
  AccessChecker,
  CreateCustomGame,
  GameState,
  InteractiveField,
} from "@/modules";

export const TicTacToeGame: FC<{}> = () => (
  <AccessChecker>
    <CreateCustomGame />
    <GameState />
    <InteractiveField />
  </AccessChecker>
);
