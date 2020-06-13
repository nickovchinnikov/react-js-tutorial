import React, { FC } from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";

import { ErrorBoundary } from "@/components";
import {
  AccessChecker,
  CreateCustomGame,
  GameState,
  InteractiveField,
  getInteractiveFieldModule,
} from "@/modules";

export const TicTacToeGame: FC<{}> = () => (
  <ErrorBoundary>
    <DynamicModuleLoader modules={[getInteractiveFieldModule()]}>
      <AccessChecker>
        <CreateCustomGame />
        <GameState />
        <InteractiveField />
      </AccessChecker>
    </DynamicModuleLoader>
  </ErrorBoundary>
);
