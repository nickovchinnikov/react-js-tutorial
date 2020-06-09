export const LOADING = "LOADING";
export function loadingCreator(isLoading: boolean) {
  return {
    type: LOADING,
    isLoading,
  };
}

export const SUCCESS = "SUCCESS";
export function successCreator(payload: JSON | string) {
  return {
    type: SUCCESS,
    isLoading: false,
    data: payload,
    error: undefined,
  };
}

export const ERROR = "ERROR";
export function errorCreator(payload: Error | string) {
  return {
    type: ERROR,
    isLoading: false,
    data: undefined,
    error: payload,
  };
}

export const ANALYTICS_CLICK = "ANALYTICS_CLICK";
export function analyticsClickCreator(payload: any) {
  return {
    type: ANALYTICS_CLICK,
    probability: payload,
  };
}
