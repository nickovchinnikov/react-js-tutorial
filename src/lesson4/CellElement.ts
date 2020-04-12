import React from "react";

interface CellProps {
  filled?: string;
  onClick: () => void;
}

export function getCellElement(props: CellProps) {
  if (!props.filled) {
    return React.createElement(
      "button",
      {
        className: "cell cell-empty",
        onClick: props.onClick,
      },
      " "
    );
  }
  return React.createElement(
    "span",
    {
      className: "cell cell-filled",
    },
    props.filled
  );
}
