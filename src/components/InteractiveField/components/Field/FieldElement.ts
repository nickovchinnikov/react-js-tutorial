import React from "react";

import { getCell } from "./components";
import type { FieldProps } from "types/field";

export const getField = (props: FieldProps) =>
  React.createElement(
    "div",
    {
      className: "field",
    },
    ...props.field.reduce((acc: any, row: any[], y: number) => {
      return [
        ...acc,
        ...row.map((filled: string | undefined, x: any) => {
          return getCell({
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
