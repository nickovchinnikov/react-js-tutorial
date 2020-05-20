import { store } from '@/rdx/store';
import React from 'react';
import * as actionTypes from '@/rdx/types';
import { Field } from '@/components/InteractiveField/components/Field';
import { withRedux } from '@/utils/withReduxHOC';
import { Action } from 'redux';

(window as any).__store = store;

function getReduxScreenState() {
  return {
    gameField: store.getState().gameField,
    nextMove: store.getState().nextMove,
  };
}

interface RawReduxScreenProps {
  nextMove: string;
  gameField: string[][];
  dispatch: (action: Action & { payload?: any }) => void;
}

class RawReduxScreen extends React.Component<RawReduxScreenProps, {}>{
  onCellClick = (x: number, y: number) => {
    this.props.dispatch({
      type: this.props.nextMove === 'x' ? actionTypes.X_MOVE : actionTypes.O_MOVE,
      payload: { x, y },
    })
  }

  render() {
    return <div>
      <h1>Open console to observe</h1>
      <h2>Next move: {this.props.nextMove}</h2>
      <Field field={this.props.gameField} onClick={this.onCellClick} />
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
    </div>
  }
}

export const ReduxScreen = withRedux(RawReduxScreen, getReduxScreenState);