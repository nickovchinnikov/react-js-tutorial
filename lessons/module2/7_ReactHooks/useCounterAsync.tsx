import React, {
  useState,
  useContext,
  useCallback,
  createContext,
  FC,
} from "react";

const CounterStepContext = createContext(1);

export interface CounterStep {
  step: number;
}

export const CounterStepProvider: FC<CounterStep> = ({ step, children }) => (
  <CounterStepContext.Provider value={step}>
    {children}
  </CounterStepContext.Provider>
);

interface Counter {
  count: number;
  increment: () => void;
  incrementAsync: () => void;
  reset: () => void;
}

export const useCounterAsync = (initialValue = 0): Counter => {
  const [count, setCount] = useState(initialValue);
  const step = useContext(CounterStepContext);

  const increment = useCallback(() => setCount((x) => x + step), [step]);

  const incrementAsync = useCallback(() => setTimeout(increment, 100), [
    increment,
  ]);

  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  if (count > 9000) {
    throw Error("It's over 9000!");
  }

  return { count, increment, incrementAsync, reset };
};
