import { Middleware } from "redux";

export const delayMiddleware: Middleware = () => (next) => (action) => {
  if (
    "meta" in action &&
    "delay" in action.meta &&
    typeof action.meta.delay === "number"
  ) {
    const timeout = setTimeout(() => next(action), action.meta.delay);

    return () => clearTimeout(timeout);
  }

  return next(action);
};
