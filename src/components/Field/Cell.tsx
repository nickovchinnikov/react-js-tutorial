import React, { FC } from "react";

import { CellItem } from "./CellItems";

export interface CellProps {
  // is cell filled flag
  children?: string;
  // onClick handler to fire events about interactions
  onClick: (x: number, y: number) => void;
  // x-coordinate to inform which cell is clicked
  x?: number;
  // y-coordinate to inform which cell is clicked
  y?: number;
}

export const Cell: FC<CellProps> = ({ children, x, y, onClick }) => {
  const isFilled = Boolean(children);

  return (
    <CellItem
      isFilled={isFilled}
      onClick={() => !isFilled && onClick(x || 0, y || 0)}
    >
      {children}
    </CellItem>
  );
};
