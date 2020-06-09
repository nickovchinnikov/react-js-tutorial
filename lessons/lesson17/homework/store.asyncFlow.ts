import { reducer } from "./reducers/reducers.asyncFlow";
import { thunk } from "./middlewares/thunk";
import { probability } from "./middlewares/probability";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
  middleware: [thunk, probability],
});
