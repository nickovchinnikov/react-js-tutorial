import React, { FC } from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import {
  CounterStepProvider,
  useCounterAsync,
  CounterStep,
} from "./useCounterAsync";

describe("test useCounterAsync hook", () => {
  it("should use custom step when incrementing", () => {
    const Wrapper: FC<CounterStep> = ({ children, step }) => (
      <CounterStepProvider step={step}>{children}</CounterStepProvider>
    );

    const { result, rerender } = renderHook(() => useCounterAsync(), {
      wrapper: Wrapper,
      initialProps: {
        step: 2,
      },
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(2);

    /**
     * Change the step value
     */
    rerender({ step: 8 });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(10);
  });

  it("should increment counter after delay", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounterAsync());
    result.current.incrementAsync();

    await waitForNextUpdate();

    expect(result.current.count).toBe(1);
  });

  it("should throw when over 9000", () => {
    const { result } = renderHook(() => useCounterAsync(9000));
    act(() => {
      result.current.increment();
    });
    expect(result.error).toEqual(Error("It's over 9000!"));
  });
});
