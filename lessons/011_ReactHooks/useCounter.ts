import { useState, useCallback } from "react";

interface Counter {
  count: number;
  increment: () => void;
  reset: () => void;
}

export const useCounter = (initialValue = 0): Counter => {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, reset };
};
