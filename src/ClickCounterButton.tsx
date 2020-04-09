import React, { ReactElement } from "react";

interface Prop {
  increment: () => void;
  children?: number;
}

export const ClickCounterButton = ({
  increment,
  children = 0,
}: Prop): ReactElement => (
  <button onClick={increment}>Clicked {children} times!</button>
);
