import React, { FC } from "react";

import { State } from "./types.asyncFlow";
import { request } from "./request";
import { getPeopleDataThunk } from "./middlewares/getPeopleDataThunk";

import { useSelector, useDispatch } from "react-redux";

export const App: FC<{}> = () => {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => getPeopleDataThunk(request, dispatch)}>
        Make an api request
      </button>
      {state.isLoading && <div>Loading...</div>}
      {state.error && <div style={{ color: "red" }}>{state.error.message}</div>}
      {state.data && (
        <>
          <h1>Request body</h1>
          <p>{JSON.stringify(state.data, undefined, 2)}</p>
        </>
      )}
      <button
        onClick={() =>
          dispatch({
            type: "ANALYTICS_CLICK",
            meta: { probability: Math.random() },
          })
        }
      >
        try luck
      </button>
    </div>
  );
};
