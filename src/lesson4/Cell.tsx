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

/**
 * Some custom description for Cell component
 */
const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
  if (filled) {
    return <span className="cell cell-filled">{filled}</span>;
  }
  return (
    <button className="cell cell-empty" onClick={() => onClick(x || 0, y || 0)}>
      {" "}
    </button>
  );
};

export default Cell;

export function getCell(props: CellProps) {
  // return <Cell x={props.x} y={props.y} onClick={props.onClick} />;
  return <Cell {...props} />;
}
