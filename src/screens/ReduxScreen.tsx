import { store } from '@/rdx/store';
import React from 'react';

(window as any).__store = store;

store.subscribe(() => {
  console.log('State', store.getState());
});

store.dispatch({
  type: 'SOME_ACTION'
});

export class ReduxScreen extends React.Component<{}, {}>{
  render() {
    return <h1>Open console to observe</h1>
  }
}