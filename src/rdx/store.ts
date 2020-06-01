import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { reducer } from "./reducer";

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware, loggerMiddleware],
});
