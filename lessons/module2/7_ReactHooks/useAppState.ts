import { useEffect, useState, useRef, useCallback } from "react";
import { logAppOpen } from "./Analytics";

export const useAppState = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);
  const isForegroundRef = useRef(isForeground);

  const handleAppStateChange = useCallback(({ type }) => {
    if (["focus", "blur"].includes(type)) {
      if (!isForegroundRef.current && type === "focus") {
        logAppOpen();
      }
      const isInForeground = type === "focus";
      setIsForeground(isInForeground);
      isForegroundRef.current = isInForeground;
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useAppStateWithoutLogs = (): boolean => {
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
