import { createStore, Action } from 'redux';

function reducer(state = {}, action: Action) {
  return state;
}

export const store = createStore(reducer);
