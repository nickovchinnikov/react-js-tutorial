import React, { FC } from "react";
import { Cell } from "./components";
import "./Field.css";
import type { FieldProps } from "types/field";

export const Field: FC<FieldProps> = ({ field, onClick }) => (
  <div className="field">
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell key={`${x}_${y}`} filled={filled} x={x} y={y} onClick={onClick} />
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </div>
);

export const getField = (props: FieldProps) => <Field {...props} />;
