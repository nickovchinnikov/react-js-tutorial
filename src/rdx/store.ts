import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducer";

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { logger } = require(`redux-logger`);

  middleware.push(logger);
}

export const store = configureStore({
  reducer,
  middleware,
});
