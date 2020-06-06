import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/rdx/store";

const mapStateToProps = ({ game }: TicTacToeGameState) => ({
  moves: game.moves,
  nextPlayer: game.nextTurn,
  gameStatus: game.gameStatus,
});

export type Props = ReturnType<typeof mapStateToProps>;

export const GameStateComponent: FC<Props> = ({
  moves,
  nextPlayer,
  gameStatus,
}) => (
  <div>
    <h3>Status: {gameStatus}</h3>
    <h4>Next player: {nextPlayer}</h4>
    <h4>Moves number: {moves}</h4>
  </div>
);

export const GameState = connect(mapStateToProps)(GameStateComponent);
