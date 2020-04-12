import React, { FC } from "react";
import "./Cell.css";

interface CellProps {
  // is cell filled flag
  filled?: string;
  // onClick handler to fire events about interactions
  onClick: (x: number, y: number) => void;
  // x-coordinate to inform which cell is clicked
  x?: number;
  // y-coordinate to inform which cell is clicked
  y?: number;
}

const Cell: FC<CellProps> = (props) => {
  if (props.filled) {
    return <span className="cell cell-filled">{props.filled}</span>;
  }
  return (
    <button
      className="cell cell-empty"
      onClick={() => props.onClick(props.x || 0, props.y || 0)}
    >
      {" "}
    </button>
  );
};

export default Cell;

export function getCell(props: CellProps) {
  // return <Cell x={props.x} y={props.y} onClick={props.onClick} />;
  return <Cell {...props} />;
}
