import React, { FC, useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: string;
}

const initialState: State = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
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
      <button
        data-testid="decrement"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        data-testid="increment"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </>
  );
};
