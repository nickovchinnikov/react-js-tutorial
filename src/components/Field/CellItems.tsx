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

const EmptyCell = css`
  border-color: gray;
`;

const FilledCell = css`
  border-color: lightgray;
  color: gray;
`;

interface Props {
  isFilled: boolean;
}

export const CellItem = styled.button`
  ${BaseCell};
  ${({ isFilled }: Props) => (isFilled ? FilledCell : EmptyCell)};
`;
