import React, { FC } from "react";
import { connect } from "react-redux";

import { TicTacToeGameState } from "@/rdx/store";

import { actions, GameStatus } from "./reducer";

interface Props {
  moves: number;
  nextPlayer: string;
  gameStatus: GameStatus;
  rebuild: typeof actions.rebuild;
  winner?: string;
}

const mapStateToProps = ({ game }: TicTacToeGameState) => ({
  moves: game.moves,
  nextPlayer: game.nextTurn,
  gameStatus: game.gameStatus,
  winner: game.winner,
});

const mapDispatchToProps = {
  rebuild: actions.rebuild,
};

export const GameStateComponent: FC<Props> = ({
  moves,
  nextPlayer,
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
    <h4>Next player: {nextPlayer}</h4>
    <h4>Moves number: {moves}</h4>
  </div>
);

export const GameState = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStateComponent);
