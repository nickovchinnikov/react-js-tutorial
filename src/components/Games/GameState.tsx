import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/rdx/store";

import { GameStatus } from "./reducer";

interface MapStateProps {
  moves: number;
  nextPlayer: string;
  gameStatus: GameStatus;
  winner?: string;
}

const mapStateToProps = ({ game }: TicTacToeGameState): MapStateProps => ({
  moves: game.moves,
  nextPlayer: game.nextTurn,
  gameStatus: game.gameStatus,
  winner: game.winner,
});

export type Props = ReturnType<typeof mapStateToProps>;

export const GameStateComponent: FC<Props> = ({
  moves,
  nextPlayer,
  gameStatus,
  winner,
}) => (
  <div>
    {winner && <h3>Winner: {winner}</h3>}
    <h3>Status: {gameStatus}</h3>
    <h4>Next player: {nextPlayer}</h4>
    <h4>Moves number: {moves}</h4>
  </div>
);

export const GameState = connect(mapStateToProps)(GameStateComponent);
