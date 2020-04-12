import React, { FC } from "react";
import Cell from "./Cell";
import "./Field.css";

interface FieldProps {
  // array representing field state
  field: string[][];
  // calback to fire event on field interaction
  onClick: (x: number, y: number) => void;
}

const Field: FC<FieldProps> = (props) => (
  <div className="field">
    {props.field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell
          filled={filled}
          x={x}
          y={y}
          onClick={props.onClick}
          key={`${x}_${y}`}
        />
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </div>
);

export default Field;

export function getField(props: FieldProps) {
  return <Field {...props} />;
}
