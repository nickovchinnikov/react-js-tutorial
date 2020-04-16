import styled from "@emotion/styled";
import { css } from "@emotion/core";

const BaseCell = css`
  width: 25px;
  height: 25px;
  border: 1px solid;
  display: inline-block;
  border-radius: 10px;
  line-height: 25px;
  text-align: center;
  margin: 5px;
  vertical-align: bottom;
`;

export const CellEmpty = styled.button`
  ${BaseCell};
  border-color: gray;
`;

export const CellFilled = styled.span`
  ${BaseCell};
  border-color: lightgray;
  color: gray;
`;
