import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { loginSlice } from "components/Login/reducer";

const reducer = combineReducers({
  login: loginSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type TicTacToeGameState = ReturnType<typeof reducer>;
