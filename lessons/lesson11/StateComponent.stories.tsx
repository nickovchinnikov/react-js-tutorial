import React from "react";
import {
  StateComponent,
  StateComponentWithObj,
  StateComponentWithLifeCycle,
} from "./StateComponent";

export default {
  title: "StateComponentExample",
};

export const stateComponentExample = () => [
  <StateComponent key="1" />,
  <StateComponentWithObj key="2" />,
];

export const stateComponentWithLifecycleExample = () => [
  <StateComponentWithLifeCycle key="1" />,
];
