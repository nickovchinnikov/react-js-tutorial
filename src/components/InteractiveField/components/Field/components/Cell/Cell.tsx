import React, { FC } from "react";
import type { CellProps } from "types/field";

import { CellEmpty, CellFilled } from "./CellItems";

export const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
  if (filled) {
    return <CellFilled>{filled}</CellFilled>;
  }
  return <CellEmpty onClick={() => onClick(x || 0, y || 0)}> </CellEmpty>;
};
