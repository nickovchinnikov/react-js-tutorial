import { renderHook, act } from "@testing-library/react-hooks";
import { useAppState } from "./useAppState";
import { logAppOpen } from "./Analytics";

jest.mock("./Analytics.ts", () => ({
  logAppOpen: jest.fn(),
}));

describe("test useAppState hook", () => {
  let listeners: any[] = [];

  window.addEventListener = jest.fn((name, handler) => {
    listeners.push({
      name,
      handler,
    });
  });

  window.removeEventListener = jest.fn((name, handler) => {
    listeners = listeners.filter(
      (p) => p.name !== name && p.handler !== handler
    );
  });

  const emit = (name: string) => {
    listeners.forEach((p) => {
      if (p.name === name) {
        p.handler({ type: name });
      }
    });
  };

  beforeEach(() => {
    listeners = [];
    jest.clearAllMocks();
  });

  it("initially true. bring focus keeps it true", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current).toBe(true);
    act(() => {
      emit("focus");
    });
    expect(logAppOpen).not.toHaveBeenCalled();
    expect(result.current).toBe(true);
  });

  it("initially true. bluring change hook return to false", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current).toBe(true);
    act(() => {
      emit("blur");
    });
    expect(logAppOpen).not.toHaveBeenCalled();
    expect(result.current).toBe(false);
  });

  it("test jumping back and forth between active and background states. Check that logAppOpen is called when app is being open", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current).toBe(true);
    act(() => {
      emit("blur");
    });
    act(() => {
      emit("blur");
    });
    expect(result.current).toBe(false);
    act(() => {
      emit("focus");
    });
    expect(logAppOpen).toHaveBeenCalledTimes(1);
    expect(result.current).toBe(true);
  });

  it("random statuses shouldn't affect hook return", () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current).toBe(true);
    act(() => {
      emit("error");
    });
    expect(result.current).toBe(true);
    act(() => {
      emit("fake1");
    });
    expect(result.current).toBe(true);
    expect(logAppOpen).toHaveBeenCalledTimes(0);
  });

  it("do not remove/re-create listeners on re-render or state change", () => {
    const renderHookResult = renderHook(() => useAppState());
    renderHookResult.rerender();
    act(() => {
      emit("focus");
    });
    act(() => {
      emit("blur");
    });
    expect(logAppOpen).toHaveBeenCalledTimes(0);
    expect(window.removeEventListener).not.toHaveBeenCalledWith("blur");
    expect(window.removeEventListener).not.toHaveBeenCalledWith("focus");
  });
});
