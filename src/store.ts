import { combineReducers } from "redux";
import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";

import { gameSlice } from "./modules/InteractiveField";
import { loginSlice, getLoginModule } from "./modules/Login";
import { backgroundSlice, getBackgroundModule } from "./modules/Background";

export const store = createStore(
  { extensions: [getSagaExtension({})] },
  getLoginModule(),
  getBackgroundModule()
);

const reducer = combineReducers({
  login: loginSlice.reducer,
  game: gameSlice.reducer,
  background: backgroundSlice.reducer,
});

export type TicTacToeGameState = ReturnType<typeof reducer>;
