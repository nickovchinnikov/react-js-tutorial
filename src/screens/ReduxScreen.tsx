import { store } from '@/rdx/store';
import React from 'react';
import * as actionTypes from '@/rdx/types';

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
  render() {
    return <h1>Open console to observe</h1>
  }
}