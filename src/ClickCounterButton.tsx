import React from "react";

interface Prop {
  increment: () => void;
  children?: number;
}

export const ClickCounterButton: React.FC<Prop> = ({
  increment,
  children = 0,
}) => <button onClick={increment}>Clicked {children} times!</button>;
