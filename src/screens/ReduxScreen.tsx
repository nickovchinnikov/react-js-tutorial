import { store } from '@/rdx/store';
import React from 'react';
import * as actionTypes from '@/rdx/types';
import { Field } from '@/components/InteractiveField/components/Field';

(window as any).__store = store;

store.subscribe(() => {
  console.log('State', store.getState());
});

store.dispatch({
  type: 'SOME_ACTION'
});

store.dispatch({ type: actionTypes.X_MOVE });
store.dispatch({ type: actionTypes.O_MOVE });

export class ReduxScreen extends React.Component<{}, {}>{
  state = {
    gameField: store.getState().gameField,
    nextMove: store.getState().nextMove,
  }

  componentDidMount() {
    store.subscribe(() => this.setState({
      gameField: store.getState().gameField,
      nextMove: store.getState().nextMove,
    }));
  }

  onCellClick = (x: number, y: number) => {
    store.dispatch({
      type: this.state.nextMove === 'x' ? actionTypes.X_MOVE : actionTypes.O_MOVE
    })
  }

  render() {
    return <div>
      <h1>Open console to observe</h1>
      <h2>Next move: {this.state.nextMove}</h2>
      <Field field={this.state.gameField} onClick={this.onCellClick} />
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
    </div>
  }
}