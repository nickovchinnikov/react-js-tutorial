import React, { FC } from "react";

interface Props {
  author: string;
  children: string;
}

export const MessageComponent: FC<Props> = ({ author, children }) => (
  <div>
    <b>{author}: </b>
    <span>{children}</span>
  </div>
);
