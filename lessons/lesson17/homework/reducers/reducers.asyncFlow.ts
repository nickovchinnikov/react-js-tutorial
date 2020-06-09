import { Reducer } from "redux";
import { State } from "../types.asyncFlow";

const initialState: State = {
  isLoading: false,
  data: undefined,
  error: undefined,
  probability: undefined,
};

export const reducer: Reducer<State> = (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: undefined,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        data: undefined,
        error: action.error,
      };
    case "ANALYTICS_CLICK":
      return {
        ...state,
        probability: action.meta.probability,
      };
    default:
      return state;
  }
};
