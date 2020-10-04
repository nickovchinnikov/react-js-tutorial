import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/store";

interface Props {
  children: string;
}

const mapStateToProps = ({ hash }: TicTacToeGameState) => ({
  hash,
});

const mapDispatchToProps = {};

export const HashComponent: FC<Props> = ({ children }) => (
  <div>
    <b>Hash:</b> {children}
  </div>
);

export const Hash = connect(mapStateToProps, mapDispatchToProps)(HashComponent);
