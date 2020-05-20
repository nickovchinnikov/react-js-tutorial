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
store.dispatch({ type: actionTypes.O_MOVE })

export class ReduxScreen extends React.Component<{}, {}>{
  onCellClick = (x: number, y: number) => {

  }

  render() {
    return <div>
      <h1>Open console to observe</h1>
      <Field field={store.getState().gameField} onClick={this.onCellClick} />
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
    </div>
  }
}