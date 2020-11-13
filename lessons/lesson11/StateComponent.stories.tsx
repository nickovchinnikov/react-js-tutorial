import React from "react";
import {
  StateComponent,
  StateComponentWithObj,
  StateComponentWithLifeCycle,
} from "./StateComponent";

export default {
  title: "StateComponentExample",
};

export const stateComponentExampleWithScalar = () => [
  <StateComponent key="1" />,
];

export const stateComponentExampleWithObj = () => [
  <StateComponentWithObj key="1" />,
];

export const stateComponentWithLifecycleExample = () => [
  <StateComponentWithLifeCycle key="1" />,
];
