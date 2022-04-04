import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/store";

import { actions, selectors, BackgroundStatus } from "./reducer";

const mapStateToProps = (state: TicTacToeGameState) => ({
  ...selectors.background(state),
});

const mapDispatchToProps = {
  cancel: actions.cancel,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const BackgroundComponent: FC<Props> = ({ status, cancel }) => (
  <div>
    <h3>Status: {status}</h3>
    {status !== BackgroundStatus.cancel && (
      <button onClick={cancel}>Cancel</button>
    )}
  </div>
);

export const Background = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundComponent);
