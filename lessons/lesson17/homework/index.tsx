import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { App } from "./app";
import { store } from "./store.asyncFlow";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
