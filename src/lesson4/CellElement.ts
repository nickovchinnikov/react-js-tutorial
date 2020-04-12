import React from "react";

interface CellProps {
  filled?: string;
  onClick: (x: number, y: number) => void;
  x?: number;
  y?: number;
}

export const getCell = ({ onClick, filled, x = 0, y = 0 }: CellProps) =>
  filled
    ? React.createElement(
        "span",
        {
          className: "cell cell-filled",
        },
        filled
      )
    : React.createElement(
        "button",
        {
          className: "cell cell-empty",
          onClick: () => onClick(x, y),
        },
        " "
      );
