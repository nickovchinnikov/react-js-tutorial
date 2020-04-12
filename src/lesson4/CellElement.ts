import React from "react";

interface CellProps {
  filled?: string;
  onClick: (x: number, y: number) => void;
  x?: number;
  y?: number;
}

export function getCell({ onClick, filled, x = 0, y = 0 }: CellProps) {
  if (!filled) {
    return React.createElement(
      "button",
      {
        className: "cell cell-empty",
        onClick: () => onClick(x, y),
      },
      " "
    );
  }
  return React.createElement(
    "span",
    {
      className: "cell cell-filled",
    },
    filled
  );
}
