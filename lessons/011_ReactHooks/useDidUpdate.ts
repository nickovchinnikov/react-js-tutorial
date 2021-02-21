import { useRef, useEffect } from "react";

// To mimic didMount juste pass[] as the second parameter of useEffect.
// To mimic didUpdate, pass all needed dependencies in the array.
export const useDidUpdate = (
  callback: () => void,
  deps?: ReadonlyArray<any>
): void => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};
