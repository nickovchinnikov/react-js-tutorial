import React, { FC } from "react";
import styled from "@emotion/styled";
import type { FieldProps } from "types/field";

import { Cell } from "./components";

const FieldWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  border: 2px solid lightgray;
`;

export const Field: FC<FieldProps> = ({ field, onClick }) => (
  <FieldWrapper>
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <Cell key={`${x}_${y}`} x={x} y={y} onClick={onClick}>
          {filled}
        </Cell>
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </FieldWrapper>
);
