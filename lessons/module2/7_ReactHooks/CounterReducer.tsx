import React, { FC, useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: string;
}

export const initialState: State = { count: 0 };

export const actions = {
  increment: "increment",
  decrement: "decrement",
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actions.increment:
      return { count: state.count + 1 };
    case actions.decrement:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const CounterReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div data-testid="count">Count: {state.count}</div>
      <button onClick={() => dispatch({ type: actions.decrement })}>-</button>
      <button onClick={() => dispatch({ type: actions.increment })}>+</button>
    </>
  );
};
