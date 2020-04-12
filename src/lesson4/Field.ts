import React from "react";

import { getCellElement } from "./CellElement";
interface FieldProps {
  field: string[][];
  onClick: (x: number, y: number) => void;
}

export function getFieldElement(props: FieldProps) {
  return React.createElement(
    "div",
    {
      className: "field",
    },
    ...props.field.reduce((acc, row, y) => {
      return [
        ...acc,
        ...row.map((filled, x) => {
          return getCellElement({
            onClick: props.onClick,
            filled: filled ? filled : undefined,
            x,
            y,
          });
        }),
        ...(y === props.field.length - 1 ? [] : [React.createElement("br")]),
      ];
    }, [] as React.ReactHTMLElement<HTMLElement>[])
  );
}
