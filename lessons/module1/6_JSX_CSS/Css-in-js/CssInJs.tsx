import React, { memo, useState } from "react";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
};

const $red = "red";
const $blue = "#4398e3";
const $cyan = "#43d6e3";

const Root = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  text-align: center;
`;

const ChangedRoot = styled(Root)`
  height: 200px;
`;

const Title = styled.div<{ colored: boolean }>`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  transition: 0.5s;
  color: ${(props) => (props.colored ? $red : "inherit")}; ;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 0;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: ${$blue};
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 12px rgba(${$cyan}, 0.68);
  }
  &:active {
    background-color: ${$cyan};
  }
`;

export const CssInJsRaw = memo<Props>(({ className }) => {
  const [colored, setColored] = useState(false);
  return (
    <ChangedRoot className={className}>
      <div>
        <Title colored={colored}>Заголовок</Title>
        <Button onClick={() => setColored((v) => !v)}>Сменить цвет</Button>
      </div>
    </ChangedRoot>
  );
});

export const CssInJs = styled(CssInJsRaw)`
  height: 1000px;
`;

CssInJs.displayName = "Basis";
