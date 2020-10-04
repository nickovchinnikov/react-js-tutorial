import React, { FC } from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";

import { ErrorBoundary } from "@/components";
import {
  AccessChecker,
  CreateCustomGame,
  GameState,
  InteractiveField,
  getInteractiveFieldModule,
  getChatModule,
  getHashModule,
  Chat,
  Hash,
} from "@/modules";

const dynamicReduxModules = [
  getInteractiveFieldModule(),
  getChatModule(),
  getHashModule(),
];

export const TicTacToeGame: FC<{}> = () => (
  <ErrorBoundary>
    <DynamicModuleLoader modules={dynamicReduxModules}>
      <AccessChecker>
        <CreateCustomGame />
        <GameState />
        <InteractiveField />
        <Chat />
        <Hash />
      </AccessChecker>
    </DynamicModuleLoader>
  </ErrorBoundary>
);
