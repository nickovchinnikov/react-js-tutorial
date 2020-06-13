import { combineReducers } from "redux";
import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";

import { gameSlice } from "@/modules/InteractiveField";
import { loginSlice, getLoginModule } from "@/modules/Login";

export const store = createStore(
  { extensions: [getSagaExtension({})] },
  getLoginModule()
);

const reducer = combineReducers({
  login: loginSlice.reducer,
  game: gameSlice.reducer,
});

export type TicTacToeGameState = ReturnType<typeof reducer>;
