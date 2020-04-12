import React from "react";

export function getCellElement() {
  return React.createElement(
    "button",
    {
      className: "cell cell-empty",
    },
    " "
  );
}
