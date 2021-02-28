import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("should reset counter to updated initial value", () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    {
      initialProps: { initialValue: 0 },
    }
  );
  expect(result.current.count).toBe(0);
  rerender({ initialValue: 10 });
  act(() => {
    result.current.reset();
  });
  expect(result.current.count).toBe(10);
});
