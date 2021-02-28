import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import { ClickCounter } from "./ClickCounter";

afterEach(cleanup);

describe("Test ClickCounter", () => {
  it("should increase counter when the button clicked", () => {
    render(<ClickCounter />);

    const counter = screen.getByRole("heading");
    const increaseBtn = screen.getByRole("button");

    expect(counter.textContent).toBe("Counter: 0");

    fireEvent.click(increaseBtn);

    expect(counter.textContent).toBe("Counter: 1");

    fireEvent.click(increaseBtn);

    expect(counter.textContent).toBe("Counter: 2");
  });
});
