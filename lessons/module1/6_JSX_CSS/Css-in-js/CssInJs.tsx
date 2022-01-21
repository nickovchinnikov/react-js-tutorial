import React, { memo, useReducer } from "react";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
};

const Root = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  text-align: center;
`;

const Changed = styled(Root)`
  height: 200px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  transition: 0.5s;
  color: ${(props: { colored: boolean }) =>
    props.colored ? "red" : "inherit"}; ;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 0;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: #4398e3;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 12px rgba(67, 214, 227, 0.68);
  }
  &:active {
    background-color: #43d6e3;
  }
`;

export const CssInJsRaw = memo<Props>(({ className }) => {
  const [colored, toggleColored] = useReducer((v) => !v, false);
  return (
    <Changed className={className}>
      <div>
        <Title colored={colored}>Заголовок</Title>
        <Button onClick={toggleColored}>Сменить цвет</Button>
      </div>
    </Changed>
  );
});

export const CssInJs = styled(CssInJsRaw)`
  height: 1000px;
`;

CssInJs.displayName = "Basis";
