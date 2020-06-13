import React, { FC } from "react";
import styled from "@emotion/styled";

import { Cell } from "./Cell";

export interface Props {
  // array representing field state
  field: string[][];
  // calback to fire event on field interaction
  onClick: (x: number, y: number) => void;
}

const FieldWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  border: 2px solid lightgray;
`;

export const Field: FC<Props> = ({ field, onClick }) => (
  <FieldWrapper>
    {field?.map((row, y) => [
      ...row?.map((filled: string, x) => (
        <Cell key={`${x}_${y}`} x={x} y={y} onClick={onClick}>
          {filled}
        </Cell>
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </FieldWrapper>
);
