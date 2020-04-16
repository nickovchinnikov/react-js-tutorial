import React, { FC } from "react";
import type { CellProps } from "types/field";

import { CellItem } from "./CellItems";

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
