import { renderHook } from "@testing-library/react-hooks";

import { useDidUpdate } from "./useDidUpdate";

describe("test useDidUpdate hook", () => {
  const callback = jest.fn();

  it("First render hook -> didMound", () => {
    renderHook(() => useDidUpdate(callback));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it("Second render hook -> didUpdate", () => {
    const { rerender } = renderHook(() => useDidUpdate(callback));
    rerender();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
