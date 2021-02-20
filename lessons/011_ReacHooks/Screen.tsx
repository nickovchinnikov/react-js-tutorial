import React from "react";
import { useAppState } from "./useAppState";

export const Screen = () => {
  const isForeground = useAppState();
  return (
    <div>
      <h3>Reach hooks lesson</h3>
      <p>Is foreground: {String(isForeground)}</p>
    </div>
  );
};
