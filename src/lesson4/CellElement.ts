import React from "react";

interface CellProps {
  filled?: string;
}

export function getCellElement(props: CellProps) {
  if (!props.filled) {
    return React.createElement(
      "button",
      {
        className: "cell cell-empty",
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
