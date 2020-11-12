import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { ClickCounter } from "./ClickCounter";

afterEach(cleanup);

describe("Test ClickCounter", () => {
  it("should increase counter when the button clicked", () => {
    const { getByTestId } = render(<ClickCounter />);

    const counter = getByTestId("counter");
    const increaseBtn = getByTestId("increase-btn");

    expect(counter.textContent).toBe("Counter: 0");
    fireEvent.click(increaseBtn);
    expect(counter.textContent).toBe("Counter: 1");
    fireEvent.click(increaseBtn);
    expect(counter.textContent).toBe("Counter: 2");
  });
});
