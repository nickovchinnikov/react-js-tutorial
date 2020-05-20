import { createStore } from 'redux';

import { reducer } from './reducer';

export const store = createStore(
  reducer,
  // https://github.com/zalmoxisus/redux-devtools-extension
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);