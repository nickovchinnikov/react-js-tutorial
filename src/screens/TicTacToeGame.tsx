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
  Chat,
} from "@/modules";

export const TicTacToeGame: FC<{}> = () => (
  <ErrorBoundary>
    <DynamicModuleLoader
      modules={[getInteractiveFieldModule(), getChatModule()]}
    >
      <AccessChecker>
        <CreateCustomGame />
        <GameState />
        <InteractiveField />
        <Chat />
      </AccessChecker>
    </DynamicModuleLoader>
  </ErrorBoundary>
);
