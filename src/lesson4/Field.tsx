import React, { FC } from "react";
import Cell from "./Cell";
import "./Field.css";
import type { FieldProps } from "./interfaces";

const Field: FC<FieldProps> = ({ field, onClick }) => (
  <div className="field">
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell filled={filled} x={x} y={y} onClick={onClick} key={`${x}_${y}`} />
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </div>
);

export default Field;

export function getField(props: FieldProps) {
  return <Field {...props} />;
}
