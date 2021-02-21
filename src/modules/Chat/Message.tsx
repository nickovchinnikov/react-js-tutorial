import React, { FC } from "react";

interface Props {
  author: string;
  children: string;
}

export const MessageComponent: FC<Props> = ({ author, children }) => (
  <div data-testid="msg-component">
    <b>{author}: </b>
    <span>{children}</span>
  </div>
);
