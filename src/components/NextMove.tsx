import React from 'react';
import { withRedux } from '@/utils/withRedux';
import { TicTacToeGameState } from '@/rdx/reducer';

const RawNextMove: React.FC<{ nextMove: string }> = ({ nextMove }) => <h2>Next move is for {nextMove}</h2>;

export const NextMove = withRedux(RawNextMove, (state: TicTacToeGameState) => ({
  nextMove: state.nextMove
}));
