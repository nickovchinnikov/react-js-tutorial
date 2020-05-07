import { useEffect, useState, useRef, useCallback } from "react";
import { logAppOpen } from "./Analytics";

export const useAppState = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);
  const isForegroundRef = useRef(isForeground);

  const handleAppStateChange = useCallback(({ type }) => {
    if (["focus", "blur"].some((p) => p === type)) {
      if (!isForegroundRef.current && type === "focus") {
        logAppOpen();
      }
      const newState = type === "focus";
      setIsForeground(newState);
      isForegroundRef.current = newState;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("focus", handleAppStateChange);
    window.addEventListener("blur", handleAppStateChange);
    return () => {
      window.removeEventListener("focus", handleAppStateChange);
      window.removeEventListener("blur", handleAppStateChange);
    };
  }, [handleAppStateChange]);

  return isForeground;
};

// simplified version, just an example without tests.
export const useAppStateWithoutLogs = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);

  const handleAppStateChange = useCallback(({ type }) => {
    setIsForeground(type === "focus");
  }, []);

  useEffect(() => {
    window.addEventListener("focus", handleAppStateChange);
    window.addEventListener("blur", handleAppStateChange);
    return () => {
      window.removeEventListener("focus", handleAppStateChange);
      window.removeEventListener("blur", handleAppStateChange);
    };
  }, [handleAppStateChange]);

  return isForeground;
};
