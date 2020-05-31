import React from "react";
import { TicTacToeGameState } from "@/rdx/reducer";
import { connect } from "react-redux";

const RawNextMove: React.FC<{ nextMove: string }> = ({ nextMove }) => (
  <h2>Next move is for {nextMove}</h2>
);

function mapStateToProps(state: TicTacToeGameState) {
  return {
    nextMove: state.nextMove,
  };
}

export const NextMove = connect(mapStateToProps)(RawNextMove);
