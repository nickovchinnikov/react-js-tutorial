import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/store";

import { actions, selectors } from "./reducer";

const mapStateToProps = (state: TicTacToeGameState) => ({
  ...selectors.playerInfo(state),
});

const mapDispatchToProps = {
  rebuild: actions.rebuild,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const GameStateComponent: FC<Props> = ({
  moves,
  nextTurn,
  gameStatus,
  winner,
  rebuild,
}) => (
  <div>
    {winner && (
      <h3>
        Winner: {winner} <button onClick={rebuild}>New game</button>
      </h3>
    )}
    <h3>Status: {gameStatus}</h3>
    <h4>Next player: {nextTurn}</h4>
    <h4>Moves number: {moves}</h4>
  </div>
);

export const GameState = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStateComponent);
